// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu elements
    const menuButton = document.getElementById('mobile-menu-button');
    const closeButton = document.getElementById('close-mobile-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');

    // Toggle mobile menu
    function toggleMenu() {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('translate-x-full');
        overlay.classList.toggle('hidden');
        overlay.classList.toggle('opacity-0');
        document.body.classList.toggle('overflow-hidden');
    }

    // Close mobile menu
    function closeMenu() {
        menuButton.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.add('translate-x-full');
        overlay.classList.add('hidden', 'opacity-0');
        document.body.classList.remove('overflow-hidden');
    }

    // Event listeners
    if (menuButton) menuButton.addEventListener('click', toggleMenu);
    if (closeButton) closeButton.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);

    // Close menu when clicking on menu links
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});

// Initialize Swiper for pizza slider
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            },
        },
        
        // Responsive breakpoints
        breakpoints: {
            // When window width is >= 640px
            640: {
                slidesPerView: 1.5,
            },
            // When window width is >= 1024px
            1024: {
                slidesPerView: 3,
            }
        },
        
        // Keyboard control
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        
        // Accessibility
        a11y: {
            prevSlideMessage: 'Previous pizza',
            nextSlideMessage: 'Next pizza',
            paginationBulletMessage: 'Go to pizza {{index}}',
        }
    });
});
});
