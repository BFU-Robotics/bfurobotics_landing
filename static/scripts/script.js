const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const logoBtn = document.querySelectorAll('.logo-wrapper');
const menuContent = document.querySelector('body > header > nav > ul');
const menuButtons = document.querySelectorAll('body > header > nav > ul > .nav-items > li');

let isMenuOpen = false;
const closeMenu = () => {
    if (isMenuOpen) {
        menuContent.classList.remove('show');
        isMenuOpen = false;
    }
}

menuBtn.addEventListener('click', function () {
    if (menuContent.classList.contains('show')) {
        closeMenu();
    } else {
        menuContent.classList.add('show');
        isMenuOpen = true;
    }
});

menuButtons.forEach(button => {
    button.addEventListener('click', function () {
        closeMenu();
    });
})

closeBtn.addEventListener('click', function () {
    closeMenu();
})

logoBtn.forEach(button => {
    button.addEventListener('click', function () {
        closeMenu();
    });
})