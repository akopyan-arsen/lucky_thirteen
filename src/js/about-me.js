import initAccordion from './Libraries/accordion';
import initSwiper from './Libraries/swiper';

const buildAboutMe = () => {
  initAccordion('.accordion-about-me .accordion-container', {
    openOnInit: [0],
  });
  initSwiper('.about-me-swiper .swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.about-me-swiper .button-next',
    },
    spaceBetween: 0,
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 6,
      },
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    slideActiveClass: 'swiper-slide-active',
  });
};

export default buildAboutMe;
