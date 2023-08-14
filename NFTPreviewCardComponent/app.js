const bigPictureBox = document.querySelector(".big-picture");
const closeBtn = document.querySelector(".close-big-picture");
const hoverImg = document.querySelector(".view-img");
const img = document.querySelector(".view-img");

// events
closeBtn.addEventListener('click', e => {
    bigPictureBox.classList.add("hidden");
    hoverImg.classList.remove("hidden");
})

img.addEventListener('click', e => {
    bigPictureBox.classList.remove('hidden');
    hoverImg.classList.add("hidden");
})

