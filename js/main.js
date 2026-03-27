// Smooth scroll y efectos
document.addEventListener('DOMContentLoaded', function() {
    
    // WhatsApp analytics
    const whatsappButtons = document.querySelectorAll('.btn-whatsapp');
    whatsappButtons.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            // Track click (puedes enviar a Google Analytics)
            console.log(`Producto ${index + 1} clicked`);
            
            // Vibración móvil
            if (navigator.vibrate) {
                navigator.vibrate(200);
            }
        });
    });

    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Preload imágenes
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});
