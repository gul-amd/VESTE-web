const menu = document.quwrySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListerner('click', function() {
    menu.classList.toggle('si-active');
    menuLinks.classList.toggle('active')
})