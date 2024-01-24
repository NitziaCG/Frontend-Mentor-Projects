const openMenuButton = document.querySelector('#open-menu-btn');
const closeMenuButton = document.querySelector('#close-menu-btn');
const menu = document.querySelector('.container__header__nav');
const filter = document.querySelector('.filter');

openMenuButton.addEventListener('click', () => {
    menu.classList.remove('hidden');
    filter.classList.remove('hidden');
    console.log('opened')
})

closeMenuButton.addEventListener('click', () => {
    menu.classList.add('hidden');
    filter.classList.add('hidden');
    console.log('closed');
})


