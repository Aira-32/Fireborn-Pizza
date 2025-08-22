document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Mobile menu functionality ---
    const menuButton = document.getElementById('mobile-menu-button');
    const closeButton = document.getElementById('close-mobile-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');

    if (menuButton) {
        function toggleMenu() {
            const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('translate-x-full');
            overlay.classList.toggle('hidden');
            overlay.classList.toggle('opacity-0');
            document.body.classList.toggle('overflow-hidden');
        }

        function closeMenu() {
            menuButton.setAttribute('aria-expanded', 'false');
            mobileMenu.classList.add('translate-x-full');
            overlay.classList.add('hidden', 'opacity-0');
            document.body.classList.remove('overflow-hidden');
        }

        menuButton.addEventListener('click', toggleMenu);
        if (closeButton) closeButton.addEventListener('click', closeMenu);
        if (overlay) overlay.addEventListener('click', closeMenu);

        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // Sostituisci tutto il blocco 'if (document.querySelector('.swiper'))' con questo

if (document.querySelector('.swiper')) {
    const swiper = new Swiper('.swiper', {
        // Opzioni di base (per schermi grandi)
        loop: true,
        slidesPerView: 'auto', // Fondamentale: funziona perché ora gli slide hanno una larghezza
        spaceBetween: 30,
        centeredSlides: true,
        grabCursor: true,

        // Autoplay
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },

        // Paginazione
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigazione (pulsanti freccia)
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Breakpoints per adattare lo slider a schermi più piccoli
        breakpoints: {
            // Quando la larghezza della finestra è <= 768px
            768: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: false, // Su mobile non è necessario centrare una singola slide
            }
        }
    });
}

});


const lightboxGallery = document.getElementById('lightbox');
const cardImgsGallery = document.querySelectorAll('.card-img-gallery');

const images = [];

cardImgsGallery.forEach(card => {
    images.push(card.querySelector('img').src);
});

cardImgsGallery.forEach(card => {
    card.addEventListener('click', (e) => {
        lightboxGallery.classList.remove('hidden');
        let imgSrc = e.target.closest('img').src;
        lightboxGallery.querySelector('img').src = imgSrc;

        lightboxGallery.querySelector('.fa-x').addEventListener('click', () => lightboxGallery.classList.add('hidden'));

        lightboxGallery.querySelectorAll('.arrow').forEach(arrow => {
            arrow.addEventListener('click', (e) => {
                let indexOfCurrentImg = images.findIndex(src => src === imgSrc);

                // because the findIndex method returns -1 when he doesn't find anything
                if ( indexOfCurrentImg === -1 ) {
                    indexOfCurrentImg = 0;
                };

                // check if it's the right or left arrow
                if( arrow === lightboxGallery.querySelector('.arrow') ) { 

                    // if it's the first img and we want to go back
                    if (indexOfCurrentImg === 0) {
                        lightboxGallery.querySelector('img').src = images[images.length - 1];

                    } else {
                        lightboxGallery.querySelector('img').src = images[indexOfCurrentImg - 1] 
                    }

                }
                else {

                    // if it's the last img and we want to go forward
                    if (indexOfCurrentImg === images.length - 1) {
                        lightboxGallery.querySelector('img').src = images[0];

                    } else {
                        lightboxGallery.querySelector('img').src = images[indexOfCurrentImg + 1] 
                    }                }

                // update the src to the new img
                imgSrc = lightboxGallery.querySelector('img').src
            })
        });

    });
});