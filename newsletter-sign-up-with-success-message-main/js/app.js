const emailInput = document.getElementById('input-email');
const subscribeBtn = document.getElementById('button-subscribe');
const dismissBtn = document.getElementById('dismiss-button');

subscribeBtn.addEventListener("click", e => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isCorrect = emailRegex.test(emailInput.value);

    if (isCorrect) {
        hideElement('.wrapper');
        hideElement('.label-error');
        emailInput.classList.remove('input-error');
        showElement('.successful-msg-container');
        document.getElementById('email-sended').innerHTML = emailInput.value;
    } else {
        showElement('.label-error');
        emailInput.classList.add('input-error');
    }
    console.log('clicked');
});

dismissBtn.addEventListener("click", e => {
    hideElement('.successful-msg-container');
    showElement('.wrapper');
});

const hideElement = element => document.querySelector(element).classList.add('hidden');
const showElement = element => document.querySelector(element).classList.remove('hidden');

