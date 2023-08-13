const submit_btn = document.getElementById("submit");
const submitCard = document.getElementById("submit-card");
const successCard = document.getElementById("success-card");
const rating = document.getElementById("submitted-rating");


submit_btn.addEventListener('click', e => {
    const checked = document.querySelector('input[name="option"]:checked');

    if (checked==null) {
        console.log('null')
    } else {
        submitCard.classList.add("hidden");
        successCard.classList.remove("hidden");

        rating.innerHTML = checked.value;
    }
})


