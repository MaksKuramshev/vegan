const hamburger = document.querySelector('.hamburger'),
    closeElem = document.querySelector('.close'),
    menu = document.querySelector('.mobile__menu');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});