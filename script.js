const dob = document.getElementById("dob");
const calcBtn = document.getElementById("calculate");
const calcAge = document.getElementById("calculated-age");
const day = document.getElementById("day");

const totalMonth = document.getElementById("totalMonth");
const totalWeek = document.getElementById("totalWeek");
const totalDay = document.getElementById("totalDay");
const totalHour = document.getElementById("totalHour");
const totalMinute = document.getElementById("totalMinute");
const totalSecond = document.getElementById("totalSecond");

const nextAge = document.getElementById("next-age");
const nextDay = document.getElementById("next-day");
const nextBdy = document.getElementById("next-bdy");

const today = new Date();
let currYear = today.getFullYear();
let currMonth = today.getMonth();
let currDate = today.getDate();

let year;
let month;
let date;

let dateOfBirth = new Date(dob.value);
calculateAge();
calculateDay();
calculatePresent();
calculateFuture();

// console.log(today);
// console.log(dob.value);
// console.log(today - dateOfBirth);

calcBtn.addEventListener("click", () => {
    if(dob.value.trim() === ""){
        alert("Select a date");
        return;
    }
    dateOfBirth = new Date(dob.value);
    calculateAge();
    calculateDay();
    calculatePresent();
    calculateFuture();

});

function calculateAge() {
    const today = new Date();
    let currYear = today.getFullYear();
    let currMonth = today.getMonth();
    let currDate = today.getDate();

    const birthYear = dateOfBirth.getFullYear()   ;
    const birthMonth = dateOfBirth.getMonth();
    const birthDate = dateOfBirth.getDate();

    year = currYear - birthYear;
    month = currMonth - birthMonth;
    date = currDate - birthDate;

    if(date < 0) {
        const prevMonthDays = new Date(year, month, 0).getDate();
        date = date + prevMonthDays;
        month--;
    }

    if(month < 0) {
        month = month + 12;
        year--;
    }
    // console.log(year + " " + month + " " + date);
    calcAge.innerText = `${year} Years, ${month} Months, ${date} days`;

}

function calculateDay() {
    const birthDay = dateOfBirth.toLocaleDateString("en-IN", {
        weekday: "long"
    });
    day.innerText = `Born on a ${birthDay}`;
}

function calculatePresent() {
    const diff = today - dateOfBirth;
    // console.log(diff);
    const totMonth = year * 12 + month;
    const totDay =Math.floor(diff / 86400000);
    const totWeek = Math.floor(totDay / 7);
    const totHour =Math.floor(diff / 3600000);
    const totMinute =Math.floor(diff / 60000);
    const totSecond =Math.floor(diff / 1000);

    totalMonth.innerHTML = `<h2>${totMonth}</h2> <span class="span">Total Months</span>`;
    totalWeek.innerHTML = `<h2>${totWeek}</h2> <span class="span">Total Weeks</span>`;
    totalDay.innerHTML = `<h2>${totDay}</h2> <span class="span">Total Days</span>`;
    totalHour.innerHTML = `<h2>${totHour}</h2> <span class="span">Total Hours</span>`;
    totalMinute.innerHTML = `<h2>${totMinute}</h2> <span class="span">Total Minutes</span>`;
    totalSecond.innerHTML = `<h2>${totSecond}</h2> <span class="span">Total Seconds</span>`;

    // console.log(diff + " " + totMonth + " " + totWeek + " " + totDay + " " + totHour + " " + totMinute + " " + totSecond);
}

function calculateFuture() {
    console.log(dateOfBirth.getMonth() + " " + dateOfBirth.getDate());
    console.log(year + 1);

    const futureDOB = new Date(dateOfBirth.getFullYear() + year + 1, dateOfBirth.getMonth() , dateOfBirth.getDate());
    const futureMs = futureDOB - today
    const noOfDays = Math.ceil(futureMs / 86400000);

    const futureDay = futureDOB.toLocaleDateString("en-IN",  {
        weekday: "long"
    });

    const futureMonth = futureDOB.toLocaleDateString("en-IN",  {
        month: "long"
    });

    // console.log(futureDay)
    nextBdy.innerText = `${futureDay}, ${futureMonth} ${futureDOB.getDate()}, ${futureDOB.getFullYear()}`;
    nextDay.innerText = `${noOfDays} days to go`;
    nextAge.innerText = `Turning ${year+1}`;

    // console.log(futureMs/86400000);
    // console.log(futureDOB);
    // console.log(futureMs);
    // console.log(futureDay);
}