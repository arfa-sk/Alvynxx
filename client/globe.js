/**
 * D3 Wireframe Dotted Globe
 * Ported from wireframe-dotted-globe.tsx for seamless vanilla JS execution.
 */

function initRotatingEarth(containerId = 'globe-container', options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const canvas = container.querySelector('canvas') || document.createElement('canvas');
    if (!canvas.parentElement) {
        container.appendChild(canvas);
    }

    const context = canvas.getContext('2d');
    if (!context) return;

    const width = options.width || 420;
    const height = options.height || 420;

    function resize() {
        const rect = container.getBoundingClientRect();
        const containerWidth = Math.min(width, rect.width || window.innerWidth - 40);
        const containerHeight = Math.min(height, containerWidth);
        const radius = containerWidth / 2.3;

        const dpr = window.devicePixelRatio || 1;
        canvas.width = containerWidth * dpr;
        canvas.height = containerHeight * dpr;
        canvas.style.width = `${containerWidth}px`;
        canvas.style.height = `${containerHeight}px`;
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.scale(dpr, dpr);

        return { containerWidth, containerHeight, radius };
    }

    let { containerWidth, containerHeight, radius } = resize();

    // Create projection and path generator
    const projection = d3
        .geoOrthographic()
        .scale(radius)
        .translate([containerWidth / 2, containerHeight / 2])
        .clipAngle(90);

    const path = d3.geoPath().projection(projection).context(context);

    const pointInPolygon = (point, polygon) => {
        const [x, y] = point;
        let inside = false;

        for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
            const [xi, yi] = polygon[i];
            const [xj, yj] = polygon[j];

            if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
                inside = !inside;
            }
        }
        return inside;
    };

    const pointInFeature = (point, feature) => {
        const geometry = feature.geometry;

        if (geometry.type === 'Polygon') {
            const coordinates = geometry.coordinates;
            if (!pointInPolygon(point, coordinates[0])) return false;
            for (let i = 1; i < coordinates.length; i++) {
                if (pointInPolygon(point, coordinates[i])) return false;
            }
            return true;
        } else if (geometry.type === 'MultiPolygon') {
            for (const polygon of geometry.coordinates) {
                if (pointInPolygon(point, polygon[0])) {
                    let inHole = false;
                    for (let i = 1; i < polygon.length; i++) {
                        if (pointInPolygon(point, polygon[i])) {
                            inHole = true;
                            break;
                        }
                    }
                    if (!inHole) return true;
                }
            }
            return false;
        }
        return false;
    };

    const generateDotsInPolygon = (feature, dotSpacing = 16) => {
        const dots = [];
        const bounds = d3.geoBounds(feature);
        const [[minLng, minLat], [maxLng, maxLat]] = bounds;

        const stepSize = dotSpacing * 0.08;

        for (let lng = minLng; lng <= maxLng; lng += stepSize) {
            for (let lat = minLat; lat <= maxLat; lat += stepSize) {
                const point = [lng, lat];
                if (pointInFeature(point, feature)) {
                    dots.push(point);
                }
            }
        }
        return dots;
    };

    const allDots = [];
    let landFeatures = null;

    const render = () => {
        context.clearRect(0, 0, containerWidth, containerHeight);

        const currentScale = projection.scale();
        const scaleFactor = currentScale / radius;

        // Draw atmosphere / glow
        const gradient = context.createRadialGradient(
            containerWidth / 2, containerHeight / 2, currentScale * 0.85,
            containerWidth / 2, containerHeight / 2, currentScale * 1.15
        );
        gradient.addColorStop(0, 'rgba(114, 5, 5, 0.25)');
        gradient.addColorStop(0.8, 'rgba(114, 5, 5, 0.08)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        context.beginPath();
        context.arc(containerWidth / 2, containerHeight / 2, currentScale * 1.15, 0, 2 * Math.PI);
        context.fillStyle = gradient;
        context.fill();

        // Draw ocean (globe background sphere)
        context.beginPath();
        context.arc(containerWidth / 2, containerHeight / 2, currentScale, 0, 2 * Math.PI);
        context.fillStyle = '#050505';
        context.fill();
        context.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        context.lineWidth = 1.5 * scaleFactor;
        context.stroke();

        if (landFeatures) {
            // Draw graticule
            const graticule = d3.geoGraticule();
            context.beginPath();
            path(graticule());
            context.strokeStyle = 'rgba(255, 255, 255, 0.15)';
            context.lineWidth = 0.8 * scaleFactor;
            context.stroke();

            // Draw land outlines
            context.beginPath();
            landFeatures.features.forEach((feature) => {
                path(feature);
            });
            context.strokeStyle = 'rgba(255, 255, 255, 0.4)';
            context.lineWidth = 1 * scaleFactor;
            context.stroke();

            // Draw halftone dots
            allDots.forEach((dot) => {
                const projected = projection([dot.lng, dot.lat]);
                if (
                    projected &&
                    projected[0] >= 0 &&
                    projected[0] <= containerWidth &&
                    projected[1] >= 0 &&
                    projected[1] <= containerHeight
                ) {
                    context.beginPath();
                    context.arc(projected[0], projected[1], 1.2 * scaleFactor, 0, 2 * Math.PI);
                    context.fillStyle = '#ffffff';
                    context.fill();
                }
            });
        }
    };

    const loadWorldData = async () => {
        try {
            const response = await fetch(
                'https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json'
            );
            if (!response.ok) throw new Error('Failed to load land data');

            landFeatures = await response.json();

            landFeatures.features.forEach((feature) => {
                const dots = generateDotsInPolygon(feature, 16);
                dots.forEach(([lng, lat]) => {
                    allDots.push({ lng, lat, visible: true });
                });
            });

            render();
        } catch (err) {
            console.error('Failed to load land map data:', err);
        }
    };

    // Set up rotation and interaction
    const rotation = [0, -10];
    let autoRotate = true;
    const rotationSpeed = 0.4;

    const rotate = () => {
        if (autoRotate) {
            rotation[0] += rotationSpeed;
            projection.rotate(rotation);
            render();
        }
    };

    const rotationTimer = d3.timer(rotate);

    const handleMouseDown = (event) => {
        autoRotate = false;
        const startX = event.clientX;
        const startY = event.clientY;
        const startRotation = [...rotation];

        const handleMouseMove = (moveEvent) => {
            const sensitivity = 0.4;
            const dx = moveEvent.clientX - startX;
            const dy = moveEvent.clientY - startY;

            rotation[0] = startRotation[0] + dx * sensitivity;
            rotation[1] = startRotation[1] - dy * sensitivity;
            rotation[1] = Math.max(-90, Math.min(90, rotation[1]));

            projection.rotate(rotation);
            render();
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp)
            setTimeout(() => {
                autoRotate = true;
            }, 500);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    // Touch support for mobile
    const handleTouchStart = (event) => {
        if (event.touches.length !== 1) return;
        autoRotate = false;
        const touch = event.touches[0];
        const startX = touch.clientX;
        const startY = touch.clientY;
        const startRotation = [...rotation];

        const handleTouchMove = (moveEvent) => {
            if (moveEvent.touches.length !== 1) return;
            const moveTouch = moveEvent.touches[0];
            const sensitivity = 0.4;
            const dx = moveTouch.clientX - startX;
            const dy = moveTouch.clientY - startY;

            rotation[0] = startRotation[0] + dx * sensitivity;
            rotation[1] = startRotation[1] - dy * sensitivity;
            rotation[1] = Math.max(-90, Math.min(90, rotation[1]));

            projection.rotate(rotation);
            render();
        };

        const handleTouchEnd = () => {
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
            setTimeout(() => {
                autoRotate = true;
            }, 800);
        };

        document.addEventListener('touchmove', handleTouchMove, { passive: true });
        document.addEventListener('touchend', handleTouchEnd);
    };

    const handleWheel = (event) => {
        event.preventDefault();
        const scaleFactor = event.deltaY > 0 ? 0.92 : 1.08;
        const newRadius = Math.max(radius * 0.6, Math.min(radius * 2.5, projection.scale() * scaleFactor));
        projection.scale(newRadius);
        render();
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
    canvas.addEventListener('wheel', handleWheel, { passive: false });

    window.addEventListener('resize', () => {
        const res = resize();
        containerWidth = res.containerWidth;
        containerHeight = res.containerHeight;
        radius = res.radius;
        projection.scale(radius).translate([containerWidth / 2, containerHeight / 2]);
        render();
    });

    loadWorldData();
}

document.addEventListener('DOMContentLoaded', () => {
    initRotatingEarth('globe-canvas-wrap');
});
