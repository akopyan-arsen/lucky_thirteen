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

const searchForm = document.querySelector('.feedback-form');
// const sendBtn = document.querySelector('.feedback-form[buttom]');

searchForm.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

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

      <h3 class="modal-title">${title}</h1>
      <p class="modal-desc">${message}</p>
      </div>
      </div>`,

      {
        onShow: instance => {
          instance.element().querySelector('.modal-btn').onclick =
            instance.close;

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
      }
    );
    instance.show();

    searchForm.reset();
  } catch (error) {
    // alert(error);
    iziToast.show({
      message: 'Please ented a valid data!',
      color: 'orange',
      position: 'topRight',
    });
  } finally {
  }
}
