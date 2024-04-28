import Swiper from 'swiper/bundle';
import 'swiper/css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  speed: 400,
  slidesPerView: 4,
  spaceBetween: 16,

  navigation: {
    nextEl: '.right-arrow',
    prevEl: '.left-arrow',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
    },
  },
  allowTouchMove: true,
});

const reviewsContainer = document.querySelector('.swiper-wrapper');
const textError = document.querySelector('.no-content-warning');
const navigationBtn = document.querySelector('.nav');

fetchData();

textError.hidden = true;
let currentSlide = 0;
let totalSlides;

function createMarkup(arr) {
  if (arr.length === 0) {
    textError.hidden = false;
    reviewsContainer.hidden = true;
    navigationBtn.disabled = true;
  } else {
    const items = arr.map(({ author, avatar_url, review }) => {
      return `
      <li class="swiper-slide" id="card">
        <img class="review-icon" src="${avatar_url}" />
        <h3 class="item-name">${author}</h3>
        <p class="item-comment">${review}</p>
      </li>
    `;
    });

    const markup = items.join('');
    reviewsContainer.insertAdjacentHTML('beforeend', markup);
  }
}

async function fetchData() {
  try {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api/reviews'
    );

    const data = await response.json();
    totalSlides = data.length;
    return data;
  } catch (error) {
    console.log(error);
  }
}

fetchData()
  .then(data => {
    createMarkup(data);
    onSlideChange();
  })
  .catch(error => {
    console.log(error);
    iziToast.error({
      title: 'Opps',
      message: 'No content found',
      position: 'topLeft',
    });

    textError.hidden = false;
    reviewsContainer.hidden = true;
    navigationBtn.disabled = true;
  });

function onSlideChange() {
  if (currentSlide === totalSlides - 1) {
    navigationBtn.classList.add('disabled');
  } else {
    navigationBtn.classList.remove('disabled');
  }
}
