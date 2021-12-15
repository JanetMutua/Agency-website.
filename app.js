

const menuItem = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');


const mobile_menu = () =>{
    menuItem.classList.toggle('is-acive');
    menuLinks.classList.toggle('active')
}

//----------------event listener---------------------------------

menuItem.addEventListener('click', mobile_menu)