// Auto-hide flash messages
document.addEventListener('DOMContentLoaded', () => {
    const flashes = document.querySelectorAll('.flash');
    flashes.forEach(f => {
        setTimeout(() => {
            f.style.transition = 'opacity 0.5s';
            f.style.opacity = '0';
            setTimeout(() => f.remove(), 500);
        }, 3500);
    });

    // Thumb gallery active state
    document.querySelectorAll('.thumb').forEach(thumb => {
        thumb.addEventListener('click', () => {
            document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });
});
