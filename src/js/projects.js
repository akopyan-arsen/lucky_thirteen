import Swiper from './Libraries/swiper';

function projectsSwipe() {
    // console.log("Run");
    Swiper('.projects-swiper .swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 25,
        navigation: {
            prevEl: '.projects-swiper .swiper-button-prev',
            nextEl: '.projects-swiper .swiper-button-next',
        },
        speed: 600,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
        slideActiveClass: 'swiper-slide-active',
    });
};

projectsSwipe();