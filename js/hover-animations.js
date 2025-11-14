/**
 * SS.AI Website - Advanced Hover Animations & Effects
 * Interactive hover behaviors and smooth animations
 */

(function () {
    'use strict';

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function () {

        // ==========================================
        // PARALLAX HOVER EFFECT FOR CARDS
        // ==========================================
        const cards = document.querySelectorAll('.service, .pricing, .work, .panel');

        cards.forEach(card => {
            card.addEventListener('mousemove', function (e) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
            });

            card.addEventListener('mouseleave', function () {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
            });
        });

        // ==========================================
        // MAGNETIC BUTTON EFFECT
        // ==========================================
        const buttons = document.querySelectorAll('.btn-theme, .btn, button[type="submit"]');

        buttons.forEach(button => {
            button.addEventListener('mousemove', function (e) {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) translateY(-4px) scale(1.02)`;
            });

            button.addEventListener('mouseleave', function () {
                button.style.transform = 'translate(0, 0) translateY(0) scale(1)';
            });
        });

        // ==========================================
        // IMAGE TILT EFFECT
        // ==========================================
        const images = document.querySelectorAll('.work-overlay, .masonry-grid-item, .img-wrap');

        images.forEach(img => {
            img.addEventListener('mousemove', function (e) {
                const rect = img.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 15;
                const rotateY = (centerX - x) / 15;

                const imgElement = img.querySelector('img');
                if (imgElement) {
                    imgElement.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.12)`;
                }
            });

            img.addEventListener('mouseleave', function () {
                const imgElement = img.querySelector('img');
                if (imgElement) {
                    imgElement.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
                }
            });
        });

        // ==========================================
        // SMOOTH SCROLL WITH EASING
        // ==========================================
        const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

        smoothScrollLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href !== '#!') {
                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });

        // ==========================================
        // RIPPLE EFFECT ON CLICK
        // ==========================================
        function createRipple(event) {
            const button = event.currentTarget;
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');

            button.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        }

        buttons.forEach(button => {
            button.addEventListener('click', createRipple);
        });

        // Custom Cursor effect removed as per user request

        // ==========================================
        // SCROLL REVEAL ANIMATION
        // ==========================================
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.service, .pricing, .work, .masonry-grid-item');
        revealElements.forEach(el => {
            el.classList.add('reveal-hidden');
            observer.observe(el);
        });

        // ==========================================
        // NAVBAR SCROLL EFFECT
        // ==========================================
        let lastScroll = 0;
        const navbar = document.querySelector('.navbar, .header');

        if (navbar) {
            window.addEventListener('scroll', function () {
                const currentScroll = window.pageYOffset;

                if (currentScroll > 100) {
                    navbar.classList.add('navbar-scrolled');
                } else {
                    navbar.classList.remove('navbar-scrolled');
                }

                if (currentScroll > lastScroll && currentScroll > 300) {
                    navbar.classList.add('navbar-hidden');
                } else {
                    navbar.classList.remove('navbar-hidden');
                }

                lastScroll = currentScroll;
            });
        }

        // ==========================================
        // LOADING ANIMATION
        // ==========================================
        window.addEventListener('load', function () {
            document.body.classList.add('page-loaded');
        });

    });

})();
