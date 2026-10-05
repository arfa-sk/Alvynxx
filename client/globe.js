/**
 * D3 Wireframe Dotted Globe
 * Ultra-optimized: pre-computed land & dot data, batched canvas drawing, 60fps rAF animation
 */

function initRotatingEarth(containerId = 'globe-canvas-wrap', options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const canvas = container.querySelector('canvas') || document.createElement('canvas');
    if (!canvas.parentElement) {
        container.appendChild(canvas);
    }

    const context = canvas.getContext('2d');
    if (!context) return;

    const targetWidth = options.width || 420;
    const targetHeight = options.height || 420;

    let containerWidth = 0;
    let containerHeight = 0;
    let radius = 0;
    let dpr = window.devicePixelRatio || 1;

    function resize() {
        const rect = container.getBoundingClientRect();
        containerWidth = Math.min(targetWidth, rect.width || window.innerWidth - 40);
        containerHeight = Math.min(targetHeight, containerWidth);
        radius = containerWidth / 2.3;

        dpr = window.devicePixelRatio || 1;
        canvas.width = containerWidth * dpr;
        canvas.height = containerHeight * dpr;
        canvas.style.width = `${containerWidth}px`;
        canvas.style.height = `${containerHeight}px`;
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.scale(dpr, dpr);
    }

    resize();

    // Create orthographic projection and path generator
    const projection = d3
        .geoOrthographic()
        .scale(radius)
        .translate([containerWidth / 2, containerHeight / 2])
        .clipAngle(90);

    const path = d3.geoPath().projection(projection).context(context);

    // Pre-create graticule ONCE outside the render loop
    const graticule = d3.geoGraticule()();

    let landFeatures = null;
    let allDots = [];

    const render = () => {
        context.clearRect(0, 0, containerWidth, containerHeight);

        const currentScale = projection.scale();
        const scaleFactor = currentScale / (radius || 1);
        const cx = containerWidth / 2;
        const cy = containerHeight / 2;

        // Draw atmosphere / glow
        const gradient = context.createRadialGradient(
            cx, cy, currentScale * 0.85,
            cx, cy, currentScale * 1.15
        );
        gradient.addColorStop(0, 'rgba(114, 5, 5, 0.25)');
        gradient.addColorStop(0.8, 'rgba(114, 5, 5, 0.08)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        context.beginPath();
        context.arc(cx, cy, currentScale * 1.15, 0, 2 * Math.PI);
        context.fillStyle = gradient;
        context.fill();

        // Draw ocean (globe background sphere)
        context.beginPath();
        context.arc(cx, cy, currentScale, 0, 2 * Math.PI);
        context.fillStyle = '#050505';
        context.fill();
        context.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        context.lineWidth = 1.5 * scaleFactor;
        context.stroke();

        // Draw graticule
        context.beginPath();
        path(graticule);
        context.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        context.lineWidth = 0.8 * scaleFactor;
        context.stroke();

        if (landFeatures && landFeatures.length > 0) {
            // Draw land outlines (batched in 1 stroke)
            context.beginPath();
            for (let i = 0; i < landFeatures.length; i++) {
                path(landFeatures[i]);
            }
            context.strokeStyle = 'rgba(255, 255, 255, 0.4)';
            context.lineWidth = 1 * scaleFactor;
            context.stroke();

            // Draw halftone dots (batched in 1 path + 1 fill for maximum performance)
            if (allDots.length > 0) {
                const dotR = 1.25 * scaleFactor;
                const pi2 = Math.PI * 2;
                context.beginPath();
                for (let i = 0; i < allDots.length; i++) {
                    const p = projection(allDots[i]);
                    if (p) {
                        context.moveTo(p[0] + dotR, p[1]);
                        context.arc(p[0], p[1], dotR, 0, pi2);
                    }
                }
                context.fillStyle = '#ffffff';
                context.fill();
            }
        }
    };

    // Load data instantly from local bundled GLOBE_DATA
    const loadData = () => {
        if (window.GLOBE_DATA) {
            landFeatures = window.GLOBE_DATA.features;
            allDots = window.GLOBE_DATA.dots;
            render();
            return;
        }

        // Fallback: fetch local json files if window.GLOBE_DATA wasn't defined
        fetch('globe-dots.json')
            .then(res => res.json())
            .then(dots => {
                allDots = dots;
                return fetch('land-110m.json');
            })
            .then(res => res.json())
            .then(land => {
                landFeatures = land.features;
                render();
            })
            .catch(err => {
                console.warn('Fallback globe load failed:', err);
                render();
            });
    };

    // Set up rotation and interaction
    const rotation = [0, -10];
    let autoRotate = true;
    const rotationSpeed = 0.35;
    let isVisible = true;

    const animate = () => {
        if (isVisible) {
            if (autoRotate) {
                rotation[0] += rotationSpeed;
                projection.rotate(rotation);
                render();
            }
        }
        requestAnimationFrame(animate);
    };

    // Only animate when visible in viewport
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isVisible = entry.isIntersecting;
            });
        }, { threshold: 0.05 });
        observer.observe(container);
    }

    // Mouse drag interaction
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
            rotation[1] = Math.max(-90, Math.min(90, startRotation[1] - dy * sensitivity));

            projection.rotate(rotation);
            render();
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            setTimeout(() => {
                autoRotate = true;
            }, 600);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    // Touch interaction for mobile
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
            rotation[1] = Math.max(-90, Math.min(90, startRotation[1] - dy * sensitivity));

            projection.rotate(rotation);
            render();
        };

        const handleTouchEnd = () => {
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
            setTimeout(() => {
                autoRotate = true;
            }, 600);
        };

        document.addEventListener('touchmove', handleTouchMove, { passive: true });
        document.addEventListener('touchend', handleTouchEnd);
    };

    // Zoom on wheel
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
        resize();
        projection.scale(radius).translate([containerWidth / 2, containerHeight / 2]);
        render();
    });

    loadData();
    requestAnimationFrame(animate);
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initRotatingEarth('globe-canvas-wrap'));
} else {
    initRotatingEarth('globe-canvas-wrap');
}
