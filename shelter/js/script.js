// burger menu function

const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(nav =>
    nav.addEventListener('click', () => {
        burger.classList.remove('active');
        navMenu.classList.remove('active');
    }))

//slider

// import pets from '../js/pets.json' assert { type: 'json'};
let cardsCollection = document.getElementsByClassName('pets-card');


