import Swiper from 'swiper/bundle';
import 'swiper/css';

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

fetchData();

function createMarkup(arr) {
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

function fetchData() {
  return fetch('https://portfolio-js.b.goit.study/api/reviews').then(
    response => {
      if (!response.ok) {
        throw new Error('Error');
      }
      return response.json();
    }
  );
}

fetchData()
  .then(data => {
    if (data.length === 0) {
      throw new Error('Not found');
    } else {
      createMarkup(data);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
