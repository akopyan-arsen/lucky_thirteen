document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenuModal = document.querySelector('.mobile-menu-modal');
    const closeMenu = document.querySelector('.mobile-menu-modal .mobile-close-menu');

    menuToggle.addEventListener('click', function () {
        dropdownMenu.style.display = (dropdownMenu.style.display === 'flex') ? 'none' : 'flex';
    });

    mobileMenuToggle.addEventListener('click', function () {
        mobileMenuModal.style.display = 'block';
    });

    closeMenu.addEventListener('click', function () {
        mobileMenuModal.style.display = 'none';
    });

});
