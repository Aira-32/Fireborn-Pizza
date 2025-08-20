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

    // Initialize Swiper if it exists on the page
    if (document.querySelector('.swiper')) {
        const swiper = new Swiper('.swiper', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }
        });
    }
});


const lightboxGallery = document.getElementById('lightbox');

const cardImgsGallery = document.querySelectorAll('.card-img-gallery')

const images = [

];

cardImgsGallery.forEach(card => {
    images.push(card.querySelector('img').src)
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
