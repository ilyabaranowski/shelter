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


