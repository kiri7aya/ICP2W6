function convertTemperature() {
    let tempInput = document.getElementById("tempInput").value;
    let tempType = document.getElementById("tempType").value;
    let result;

    if (tempType === "CtoF") {
        result = (tempInput * 9/5) + 32;
        document.getElementById("tempOutput").innerText = `${tempInput}°C is ${result.toFixed(2)}°F.`;
    } else {
        result = (tempInput - 32) * 5/9;
        document.getElementById("tempOutput").innerText = `${tempInput}°F is ${result.toFixed(2)}°C.`;
    }
}

function displayCurrentDayAndTime() {
    let now = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[now.getDay()];
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // handle 0 as 12

    document.getElementById("timeOutput").innerText = `Today is: ${day}. Current time is: ${hours} ${ampm} : ${minutes} : ${seconds}.`;
}

function checkLeapYear() {
    let year = document.getElementById("leapYearInput").value;
    let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    document.getElementById("leapYearOutput").innerText = `${year} is ${isLeap ? '' : 'not '}a leap year.`;
}

function findSundayYears() {
    let sundayYears = [];
    for (let year = 2014; year <= 2050; year++) {
        let firstJan = new Date(year, 0, 1);
        if (firstJan.getDay() === 0) {
            sundayYears.push(year);
        }
    }
    document.getElementById("sundayYearsOutput").innerText = `1st January is a Sunday in the years: ${sundayYears.join(", ")}.`;
}

function removeCharacter() {
    let str = document.getElementById("stringInput").value;
    let position = document.getElementById("charPosition").value;
    let modifiedStr = str.slice(0, position) + str.slice(Number(position) + 1);
    document.getElementById("removeCharOutput").innerText = `Modified string: ${modifiedStr}`;
}
