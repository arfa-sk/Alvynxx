function initFolderScroll() {
    const track = document.getElementById('folder-scroll-track');
    const folderFlap = document.querySelector('.react-folder-flap');
    const folderBase = document.querySelector('.react-folder');
    const cards = [
        document.querySelector('.react-card-1'),
        document.querySelector('.react-card-2'),
        document.querySelector('.react-card-3')
    ];

    if (!track || !folderFlap || !folderBase) return;

    let ticking = false;

    function updateFolder() {
        const rect = track.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        let progress = (windowHeight / 2 - rect.top) / (rect.height - windowHeight / 2);
        progress = Math.max(0, Math.min(1, progress));
        const easeProgress = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        const dropProgress = Math.max(0, (easeProgress - 0.5) * 2.0);
        
        const maxDrop = windowWidth <= 480 ? 60 : (windowWidth <= 768 ? 85 : 120);
        const dropAmount = dropProgress * maxDrop;

        folderBase.style.transform = `translateY(${dropAmount}px)`;
        folderFlap.style.transform = `translateY(${dropAmount}px) rotateX(${easeProgress * -40}deg)`;

        let targetTransforms;
        if (windowWidth <= 480) {
            targetTransforms = [
                { x: -85, y: 15, rot: -10, scale: 1.0 },
                { x: 0, y: 8, rot: 1, scale: 1.05 },
                { x: 85, y: 20, rot: 12, scale: 1.0 }
            ];
        } else if (windowWidth <= 768) {
            targetTransforms = [
                { x: -110, y: 20, rot: -12, scale: 1.0 },
                { x: 0, y: 12, rot: 1, scale: 1.08 },
                { x: 110, y: 25, rot: 14, scale: 1.0 }
            ];
        } else {
            targetTransforms = [
                { x: -140, y: 30, rot: -15, scale: 1.0 },
                { x: 0, y: 20, rot: 2, scale: 1.1 },
                { x: 140, y: 40, rot: 18, scale: 1.0 }
            ];
        }

        const initialTransforms = [
            { x: -38, y: 2, rot: -3, scale: 1 },
            { x: 0, y: 0, rot: 0, scale: 1 },
            { x: 42, y: 1, rot: 3.5, scale: 1 }
        ];

        cards.forEach((card, i) => {
            if (!card) return;
            const target = targetTransforms[i];
            const initial = initialTransforms[i];

            const currentX = initial.x + (target.x - initial.x) * easeProgress;
            let currentY = initial.y + (target.y - initial.y) * easeProgress;

            currentY -= dropAmount;

            const currentRot = initial.rot + (target.rot - initial.rot) * easeProgress;
            const currentScale = initial.scale + (target.scale - initial.scale) * easeProgress;

            card.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${currentRot}deg) scale(${currentScale})`;
        });

        ticking = false;
    }

    const requestTick = () => {
        if (!ticking) {
            requestAnimationFrame(updateFolder);
            ticking = true;
        }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', requestTick, { passive: true });
    requestTick();
}

// ---------------- Boot ----------------
document.addEventListener('DOMContentLoaded', () => {
    init();
    
    // Add Intersection Observer for testimonials
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
