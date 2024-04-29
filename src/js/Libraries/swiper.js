import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const initSwiper = (classNames, options = {}) => {
  new Swiper(classNames, options);
};

export default initSwiper;
