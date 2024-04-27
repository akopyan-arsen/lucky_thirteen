// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
import * as basicLightbox from 'basiclightbox';

import { fetchData, BASE_URL, params } from './api';

const searchForm = document.querySelector('.feedback-form');
// const sendBtn = document.querySelector('.feedback-form[buttom]');

searchForm.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const emailValue = event.target.elements.email.value;
  const commentsValue = event.target.elements.comments.value;

  console.log(commentsValue);

  // if (!commentsValue) {
  //   iziToast.show({
  //     message:
  //       'Please ented a comment!',
  //     color: 'orange',
  //     position: 'topRight',
  //   });
  //   return;
  // }

  // gallery.innerHTML = '';
  // loader.classList.remove('is-hidden');

  try {
    const {
      data: { message, title },
    } = await fetchData(`${BASE_URL}/requests`, params);
    console.log(title);

    const instance = basicLightbox.create(
      `<div class="modal">
      <h3 class="modal-title">${title}</h1>
      <p class="modal-desc">${message}</p>
      </div>`,

      {
        onShow: instance => {
          instance.element().querySelector('.modal').onclick = instance.close;
        },
      }
    );
    instance.show();
    
  } catch (error) {
    alert(error);
  } finally {}
}
