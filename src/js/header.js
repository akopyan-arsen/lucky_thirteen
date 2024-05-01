import backgroundImage from '../img/background/hero-bg-desktop.png';
import backgroundImage2 from '../img/background/hero-bg-desktop-2.png';
import backgroundImage3 from '../img/background/hero-bg-desktop-3.png';
import backgroundImage4 from '../img/background/hero-bg-desktop-4.png';
import backgroundImage5 from '../img/background/hero-bg-desktop-5.png';
import backgroundImage6 from '../img/background/hero-bg-desktop-6.png';

const hero = document.querySelector('.hero');
document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.menu');
  const menuPanel = document.querySelector('.ac-menu-panel');
  const openButton = document.querySelector('.burger-btn');
  const closeButton = document.querySelector('.menu-btn');
  const orderButton = document.querySelector('.mob-order-btn');
  const body = document.querySelector('body');


  const scroll = link => {
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 40;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  function openModal() {
    document.getElementById('myModal').classList.add('is-open');
    body.style.overflow = 'hidden';
  }

  function closeModal() {
    document.getElementById('myModal').classList.remove('is-open');
    body.style.overflow = '';
  }

  openButton.addEventListener('click', function () {
    openModal();
  });

  closeButton.addEventListener('click', function () {
    closeModal();
  });

  orderButton.addEventListener('click', function () {
    closeModal();
  });

  menuButton.addEventListener('click', function () {
    menuPanel.classList.toggle('active');
  });

  const menuLinks = document.querySelectorAll('.ac-menu-text');
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      scroll(this);
      menuPanel.classList.remove('active');
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 40;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });
  const mobmenuLinks = document.querySelectorAll('.menu-list');

  mobmenuLinks.forEach(function (link) {
    link.addEventListener('click', closeModal);
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
});
let currentIndex = 0;

document.getElementById('changeBackgroundBtn').addEventListener('click', changeBackground);

function changeBackground() {
const backgrounds = [backgroundImage2, backgroundImage3, backgroundImage4, backgroundImage5, backgroundImage6, backgroundImage];
const selectedBackground = backgrounds[currentIndex];
    hero.style.backgroundImage = `url(${selectedBackground})`;
    currentIndex = (currentIndex + 1) % backgrounds.length;
}