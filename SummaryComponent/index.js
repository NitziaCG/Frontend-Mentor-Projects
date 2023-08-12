fetch("data.json") /* get data from 'data.json' file */
.then(function(response){ /*The fetch() method returns a Promise object. So we use the .then() method to catch the Response object and to resolve it to a javascript object with the .json() method*/
    return response.json();
})
.then(function(data) { /*catch data*/
    let list = document.querySelector("#summary-list");
    let out = "";

    let counter = 1;
    for(let object of data) {
        out += `
            <li class="li-${counter}">
                <img src='${object.icon}'>
                <span class="li-category"> ${object.category}</span>
                <span class="score">
                    <span class="unit-score">${object.score}</span> / 100
                </span>
            </li>
        `;
        counter++;
    }

    list.innerHTML = out;
});
