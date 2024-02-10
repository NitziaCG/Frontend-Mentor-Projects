const markAsReadButton = document.querySelector('#mark-as-read-button');

markAsReadButton.addEventListener('click', () => {
    document.querySelectorAll('.wrapper__notifications__card__pulser').forEach(elem => elem.remove());
    document.querySelectorAll('.bg-blue').forEach(elem => elem.classList.remove('bg-blue'));
    document.querySelector('#notifications-count').textContent = '0';
})

