import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import * as basicLightbox from 'basiclightbox';
import closex from '../img/icons.svg';

import {
  fetchData,
  BASE_URL,
  params,
  updateCommnetValue,
  updateEmailValue,
} from './Libraries/axios';
const body = document.querySelector('body');
const searchForm = document.querySelector('.feedback-form');
// const sendBtn = document.querySelector('.feedback-form[buttom]');

searchForm.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  body.style.overflow = 'hidden';
  const emailValue = event.target.elements.email.value;
  const commentsValue = event.target.elements.comments.value;

  updateCommnetValue(commentsValue);
  updateEmailValue(emailValue);

  try {
    const {
      data: { message, title },
    } = await fetchData(`${BASE_URL}/requests`, params);

    const instance = basicLightbox.create(
      `<div class="backdrop">
        <div class="modal">
          <button class="modal-btn" type="button" aria-label="Modal close button">
            <svg class="modal-icon-x" width="22" height="22">
              <use href="${closex}#icon-x"></use>
            </svg>
          </button>
          <h3 class="modal-title">${title}</h3>
          <p class="modal-desc">${message}</p>
        </div>
      </div>`,
      {
        onShow: instance => {
          instance.element().querySelector('.modal-btn').onclick = () => {
            instance.close();
          };
          instance.element().addEventListener('click', function (event) {
            if (event.target.classList.contains('backdrop')) {
              instance.close();
            }
          });
          window.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
              instance.close();
            }
          });
        },
        onClose: instance => {
          body.style.overflow = '';
        },
      }
    );
    instance.show();

    searchForm.reset();
  } catch (error) {
    // alert(error);
    iziToast.show({
      message: 'Please entered a valid data!',
      color: 'orange',
      position: 'topRight',
    });
  } finally {
  }
}

const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const footerEmail = document.querySelector('.footer-email');

emailInput.addEventListener('input', function () {
  if (!this.checkValidity()) {
    emailError.textContent = 'Invalid email, try again';
    emailError.style.color = '#E74A3B';
    footerEmail.style.borderBottom = '1px solid #E74A3B';
  } else {
    emailError.textContent = 'Success!';
    emailError.style.color = '#3CBC81';
    footerEmail.style.borderBottom = '1px solid #3CBC81';
  }
});

emailInput.addEventListener('blur', function () {
  emailError.textContent = '';
  footerEmail.style.borderBottom = '1px solid rgba(250, 250, 250, 0.2)';
});

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
