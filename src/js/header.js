document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.menu');
  const menuPanel = document.querySelector('.ac-menu-panel');
  const openButton = document.querySelector('.burger-btn');
  const closeButton = document.querySelector('.menu-btn');

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
  }

  function closeModal() {
    document.getElementById('myModal').classList.remove('is-open');
  }

  openButton.addEventListener('click', function () {
    openModal();
  });

  closeButton.addEventListener('click', function () {
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

  // Обробник події для якірних посилань
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      event.preventDefault(); // Скасування стандартної дії
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
});

const mobmenuLinks = document.querySelectorAll('.menu-list');
function closeMobileMenu() {
  document.getElementById('myModal').classList.remove('is-open');
}

mobmenuLinks.forEach(function (link) {
  link.addEventListener('click', closeMobileMenu);
});

window.onclick = function (event) {
  const modal = document.getElementById('myModal');
  if (event.target === modal) {
    document.getElementById('myModal').classList.remove('is-open');
  }
};
