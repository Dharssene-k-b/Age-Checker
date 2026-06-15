const dob = document.getElementById("dob");
const calcBtn = document.getElementById("calculate");
const calcAge = document.getElementById("calculated-age");
let day = document.getElementById("day");

const today = new Date();
let currYear = today.getFullYear();
let currMonth = today.getMonth();
let currDate = today.getDate();

let dateOfBirth = new Date(dob.value);
calculateAge();
calculateDay();

calcBtn.addEventListener("click", () => {
    if(dob.value.trim() === ""){
        alert("Select a date");
    }
    dateOfBirth = new Date(dob.value);
    calculateAge();
    calculateDay();
});

function calculateAge() {
    let birthYear = dateOfBirth.getFullYear()   ;
    let birthMonth = dateOfBirth.getMonth();
    let birthDate = dateOfBirth.getDate();

    let year = currYear - birthYear;
    let month = currMonth - birthMonth;
    let date = currDate - birthDate;

    if(date < 0) {
        let prevMonthDays = new Date(year, month, 0);
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
    let birthDay = dateOfBirth.toLocaleDateString("en-IN", {
        weekday: "long"
    });
    day.innerText = `Born on a ${birthDay}`;
}