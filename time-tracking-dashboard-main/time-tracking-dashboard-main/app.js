
eventListeners();
function eventListeners() {
    const dailyBtn = document.querySelector("#daily");
    const weeklyBtn = document.querySelector("#weekly");
    const monthlyBtn = document.querySelector("#monthly");

    dailyBtn.addEventListener("click", () => loadData(dailyBtn, "daily"));
    weeklyBtn.addEventListener("click", () => loadData(weeklyBtn, "weekly"));
    monthlyBtn.addEventListener("click", () => loadData(monthlyBtn, "monthly"));

    document.addEventListener("DOMContentLoaded", () => {
        weeklyBtn.classList.add("btn-selected");
        loadData(weeklyBtn, "weekly");
    });
}


function loadData(btn, time) {
    toggleBtnSelected(btn);

    fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
        json.forEach( elem => {
            const currentTime = document.querySelector(`.${elem["title"]}-current-time`);
            const previousTime = document.querySelector(`.${elem["title"]}-previous-time`);            
            const { current, previous } = elem["timeframes"][time];

            currentTime.textContent = current;
            previousTime.textContent = previous;
        })
    });
}

function toggleBtnSelected(btn) {
    document.querySelector(".btn-selected").classList.remove("btn-selected");
    btn.classList.toggle("btn-selected");
}

