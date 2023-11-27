// script.js
function updateClock() {
    const now = new Date();

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[now.getDay()];

    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'long' }); // Get full month name
    const year = now.getFullYear();

    const formattedDate = `  ${dayOfWeek} ${ordinalSuffix(day)},  ${month}  ${year} `;

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formattedTime = `${hours}:${pad(minutes)}:${pad(seconds)}`;

    document.getElementById('realtimeclock').innerText = formattedTime;
    document.getElementById('realdate').innerText = formattedDate;
}

function pad(value) {
    return value < 10 ? '0' + value : value;
}

function ordinalSuffix(number) {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const relevantDigits = (number < 30) ? number % 20 : number % 10;
    const suffix = (relevantDigits <= 3) ? suffixes[relevantDigits] : suffixes[0];
    return number + suffix;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();
