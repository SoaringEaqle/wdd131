
// Ideally this would connect to an external calender somewhere.
const calender = [
    {date: 260110, locationName: "I-Center Court 10", directions: "https://maps.app.goo.gl/LvUAAC1eherQk4eH6"},
    {date: 260117, locationName: "I-Center Court 10", directions: "https://maps.app.goo.gl/LvUAAC1eherQk4eH6"},
    {date: 260124, locationName: "I-Center Court 10", directions: "https://maps.app.goo.gl/LvUAAC1eherQk4eH6"},
    {date: 260131, locationName: "I-Center Court 10", directions: "https://maps.app.goo.gl/LvUAAC1eherQk4eH6"},
    {date: 260207, locationName: "I-Center Court 10", directions: "https://maps.app.goo.gl/LvUAAC1eherQk4eH6"},
    {date: 260214, locationName: "I-Center Court 10", directions: "https://maps.app.goo.gl/LvUAAC1eherQk4eH6"},
    {date: 260221, locationName: "I-Center Court 10", directions: "https://maps.app.goo.gl/LvUAAC1eherQk4eH6"},
    {date: 260228, locationName: "I-Center Court 10", directions: "https://maps.app.goo.gl/LvUAAC1eherQk4eH6"},
    {date: 260307, locationName: "I-Center Court 10", directions: "https://maps.app.goo.gl/LvUAAC1eherQk4eH6"},
    {date: 260314, locationName: "I-Center Court 10", directions: "https://maps.app.goo.gl/LvUAAC1eherQk4eH6"},
    {date: 260321, locationName: "I-Center Court 10", directions: "https://maps.app.goo.gl/LvUAAC1eherQk4eH6"},
    {date: 260328, locationName: "Field 6", directions: "https://maps.app.goo.gl/XVfyMQijFGvxGkeA8"},
    {date: 260404, locationName: "Field 6", directions: "https://maps.app.goo.gl/XVfyMQijFGvxGkeA8"},
    {date: 260410, locationName: "Canceled"}
]

let equipmentBTN = document.querySelector(".eqpmt-button");
let today = function () {
    let currDate = new Date();
    let dateInt = (currDate.getFullYear() - 2000) * 10000 + (currDate.getMonth() + 1) * 100 + currDate.getDate();
    console.log(dateInt);
    return dateInt;

}

equipmentBTN.addEventListener("click", () => {
    document.querySelector("#eqpmt-text").classList.toggle("hidden");
})

let calenderElm = document.querySelector("#calender");

let detailsElm = document.querySelector("#details");

buildCalender();


function buildCalender() {
    let next = calender.findIndex((day) => day.date > today());
    let calSeg = document.createElement("section");

    for (let i = next; i < Math.min(calender.length, next + 5); i++) {
        let date = document.createElement("button");
        date.innerHTML = `<h5>${stringifyDate(calender[i].date)}</h5>`;


        if(calender[i].locationName === "Canceled") {
            date.classList.add("canceled");
        }
        else if (calender[i].locationName.includes("I-Center")) {
            date.classList.add("indoor");
        }
        else{
            date.classList.add("outdoor");
        }

        date.addEventListener("click", (e) => extraData(calender[i]));

        calSeg.appendChild(date);
    }
    extraData(calender[next]);
    calenderElm.appendChild(calSeg);
}

function stringifyDate(dateInt) {
    let ret;
    let day = dateInt % 100;
    dateInt /= 100;
    let month = Math.floor(dateInt % 100);
    console.log(month);
    dateInt /= 100;
    let year = dateInt;

    switch (month) {
        case 1: ret = "January"; break;
        case 2: ret = "February"; break;
        case 3: ret = "March"; break;
        case 4: ret = "April"; break;
        case 5: ret = "May"; break;
        case 6: ret = "June"; break;
        case 7: ret = "July"; break;
        case 8: ret = "August"; break;
        case 9: ret = "September"; break;
        case 10: ret = "October"; break;
        case 11: ret = "November"; break;
        case 12: ret = "December"; break;
        default: console.log("invalid date");

    }

    ret += " " + day;
    return ret;

}

function extraData(date){
    detailsElm.innerHTML = `<h5>${stringifyDate(date.date)}</h5>
    ${detailsP2(date)}
    `;
}

function detailsP2(date) {
    if (date.locationName === "Canceled") {
        return `<h4>Canceled</h4>`
    }
    return `<h5>Place: ${date.locationName}</h5>
<a href="${date.directions}">Get Directions</a>`
}


