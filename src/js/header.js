document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.menu');
  const menuPanel = document.querySelector('.ac-menu-panel');

  menuButton.addEventListener('click', function () {
    menuPanel.classList.toggle('active');
  });

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

  const menuLinks = document.querySelectorAll('.ac-menu-text');
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      scroll(this);
      menuPanel.classList.remove('active');
    });
  });
});

function openModal() {
  document.getElementById('myModal').classList.add('is-open');
}

function closeModal() {
  document.getElementById('myModal').classList.remove('is-open');
}

let menuLinks = document.querySelectorAll('.menu-list');
function closeMobileMenu() {
  document.getElementById('myModal').classList.remove('is-open');
}

menuLinks.forEach(function (link) {
  link.addEventListener('click', closeMobileMenu);
});

window.onclick = function (event) {
  const modal = document.getElementById('myModal');
  if (event.target === modal) {
    document.getElementById('myModal').classList.remove('is-open');
  }
};

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();
    });
  });
  scroll(this);
});
