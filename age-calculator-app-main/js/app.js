const button = document.querySelector('#button');
const now = new Date();

button.onclick = () => {
    const dayOutput = document.querySelector('#day-output');
    const monthOutput = document.querySelector('#month-output');
    const yearOutput = document.querySelector('#year-output');
    const year = checkYear();
    const month = checkMonth();
    const day = checkDay(year, month);

    if (year && month && day) {
        const age = calculateAge(year, month, day);
        yearOutput.innerHTML = age.years;
        monthOutput.innerHTML = age.months;
        dayOutput.innerHTML = age.days;
    } else {
        yearOutput.innerHTML = '--';
        monthOutput.innerHTML = '--';
        dayOutput.innerHTML = '--';
    }
};

const calculateAge = (year, month, day) => {
    const userDate = new Date(year, month, day);
    const result = new Date(now.getFullYear(), now.getMonth()+1, now.getDate()) - userDate;
    // const days = result/(1000 * 60 * 60 * 24);

    const years = result/(1000 * 60 * 60 * 24 * 31 * 12);
    const months = (years - Math.floor(years))*365/31;
    const days = (months - Math.floor(months))*31;    

    console.log(result);
    console.log(years);
    console.log(months);
    console.log(days);
    
    return {
        years: Math.floor(years),
        months: Math.floor(months),
        days: Math.ceil(days)
    }
};

const checkYear = () => {
    const year = parseInt(document.querySelector('#year-input').value);
    const currentYear = now.getFullYear();
    const yearError = document.querySelector('#year-error');

    if (!year) {
        yearError.innerHTML = 'This field is required';
        return 0;
    } else if (year > currentYear) {
        yearError.innerHTML = 'Must be in the past';
        return 0;
    } else {
        yearError.innerHTML = '';
        return year;
    }
};

const checkMonth = () => {
    const month = parseInt(document.querySelector('#month-input').value);
    const currentMonth = now.getMonth() + 1;
    const monthError = document.querySelector('#month-error');

    if (!month) {
        monthError.innerHTML = 'This field is required';
        return 0;
    } else if (month > 12) {
        monthError.innerHTML = 'Must be a valid month';
        return 0;
    } else if (month > currentMonth) {
        monthError.innerHTML = 'Must be in the past';
        return 0;
    } else {
        monthError.innerHTML = '';
        return month;
    }

};

const checkDay = (year, month) => {
    const day = parseInt(document.querySelector('#day-input').value);
    const currentDay = now.getDate();
    const daysInMonth = new Date(year, month, 0).getDate();
    const dayError = document.querySelector('#day-error');
    console.log('year: ' + year + ' month: ' + month + ' day: ' + currentDay);

    if (!day) {
        dayError.innerHTML = 'This field is required';
        return 0;
    } else if (day > daysInMonth) {
        dayError.innerHTML = 'Must be a valid day'
        return 0;
    } else if ((day > currentDay) && (month>=now.getMonth()+1) && (year>=now.getFullYear())) {
        dayError.innerHTML = 'Must be in the past';
        return 0;
    } else {
        dayError.innerHTML = '';
        return day;
    }
};

