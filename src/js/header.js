document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenuModal = document.querySelector('.mobile-menu-modal');
    const closeMenu = document.querySelector('.mobile-menu-modal .mobile-close-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-nav a');

    menuToggle.addEventListener('click', function () {
        dropdownMenu.classList.toggle('active');
    });


    mobileMenuToggle.addEventListener('click', function () {
        mobileMenuModal.classList.toggle('active');
    });

    closeMenu.addEventListener('click', function () {
        mobileMenuModal.classList.toggle('active');

    });

    mobileMenuLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            mobileMenuModal.classList.toggle('active');
            setTimeout(function () {
                window.location.hash = target;
                const targetElement = document.querySelector(target);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        });
    });
});
