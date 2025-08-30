// Animaciones para CIAN Robotics con Anime.js v3.2.2
document.addEventListener('DOMContentLoaded', function() {
    // 1. Animación del logo
    if (document.querySelector('.logo')) {
        anime({
            targets: '.logo',
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 1200,
            easing: 'easeOutElastic(1, .8)',
            delay: 300
        });
    }

    // 2. Animación de la navegación principal (derecha a izquierda)
    if (document.querySelector('.navegacion-principal')) {
        const navLinks = document.querySelectorAll('.navegacion-principal a');
        
        // Primero ocultamos todos los enlaces
        navLinks.forEach(link => {
            link.style.opacity = '0';
            link.style.transform = 'translateX(100px)';
        });
        
        // Animamos cada enlace de derecha a izquierda
        anime({
            targets: navLinks,
            translateX: [100, 0],
            opacity: [0, 1],
            duration: 800,
            delay: anime.stagger(150, {start: 500}), // Retraso escalonado empezando a los 500ms
            easing: 'easeOutExpo'
        });
    }

    // 3. Animación del texto del hero
    if (document.querySelector('.hero-text')) {
        anime({
            targets: '.hero-text',
            translateY: [100, 0],
            opacity: [0, 1],
            duration: 1500,
            easing: 'easeOutExpo',
            delay: 1000 // Mayor delay para que aparezca después de la navegación
        });
    }

    // 4. Animación de las tarjetas (Objetivos y Visión) con Intersection Observer
    function setupCardsAnimation() {
        const cards = document.querySelectorAll('.card');
        if (cards.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: entry.target,
                        translateY: [100, 0],
                        opacity: [0, 1],
                        duration: 1200,
                        easing: 'easeOutQuad',
                        delay: Array.from(cards).indexOf(entry.target) * 200
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        });

        cards.forEach(card => {
            observer.observe(card);
        });
    }

    // 5. Animación de la lista de productos con Intersection Observer
    function setupProductsAnimation() {
        const productItems = document.querySelectorAll('.productos_oferta li');
        if (productItems.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: entry.target,
                        translateX: [-100, 0],
                        opacity: [0, 1],
                        duration: 1000,
                        easing: 'easeOutSine',
                        delay: Array.from(productItems).indexOf(entry.target) * 150
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -30px 0px'
        });

        productItems.forEach(item => {
            observer.observe(item);
        });
    }

    // 6. Efectos hover en el menú de navegación
    const navLinks = document.querySelectorAll('.navegacion-principal a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.1,
                color: '#00bcd4',
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        link.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                color: '#f5f5f5',
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });

    // 7. Animación contacto
function setupContactAnimations() {
    const instagramContainer = document.querySelector('.instagram-container');
    const formContainer = document.querySelector('.form-container');
    
    if (formContainer) {
        anime({
            targets: formContainer,
            translateY: [100, 0],
            opacity: [0, 1],
            duration: 1200,
            easing: 'easeOutQuad',
            delay: 300
        });
    }
    
    if (instagramContainer) {
        anime({
            targets: instagramContainer,
            translateY: [100, 0],
            opacity: [0, 1],
            duration: 1200,
            easing: 'easeOutQuad',
            delay: 500
        });
    }
}

if (document.querySelector('.contact-section')) {
    setTimeout(setupContactAnimations, 100);
}

    // Inicializar animaciones con Intersection Observer
    setTimeout(() => {
        setupCardsAnimation();
        setupProductsAnimation();
    }, 100);
});