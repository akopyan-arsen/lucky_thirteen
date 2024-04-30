document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.menu');
  const menuPanel = document.querySelector('.ac-menu-panel');
  const openButton = document.querySelector('.burger-btn');
  const closeButton = document.querySelector('.menu-btn');
  const orderButton = document.querySelector('.mob-order-btn');

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
