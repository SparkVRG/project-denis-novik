'use strict';

function mobileMenuToggle() {
    let menu = document.getElementsByClassName('header__nav')[0];
    let buttonImage = document.querySelector('.header__nav-mobile-toggle img');

    if (menu.style.right == '' || menu.style.right == '-101%') {
        menu.style.right = '0';
        buttonImage.src = 'images/icon-nav-mobile-toggle-close.svg';
    } else {
        menu.style.right = '-101%';
        buttonImage.src = 'images/icon-nav-mobile-toggle-open.svg';
    }
}