const graphsContainer = document.querySelector('.wrapper__statistics__graphs');

function loadData() {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let maxValueElem = data[0];
            data.forEach(elem => {
                let bar = document.querySelector(`#${elem.day}`);
                bar.value = String(elem.amount);
                bar.style.height = `calc(${elem.amount}% + 60px)`;
    
                if (elem.amount > maxValueElem.amount) {
                    maxValueElem = elem;
                }
            })
            document.querySelector(`#${maxValueElem.day}`).classList.add('max-value-bar');
        })
}


graphsContainer.addEventListener('mouseover', e => {
    if (e.target.classList.contains("bar")) {
        console.log(e.target);
        e.target.innerHTML = `<p class="flag">$${e.target.value}</p>`;
    }
});

graphsContainer.addEventListener('mouseout', e => {
    if (e.target.classList.contains("bar")) {
        e.target.innerHTML = "";
    }
})

loadData();