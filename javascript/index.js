function updateTime() {
// Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");


losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format(
"h:mm:ss [<small>]A[</small>]"
);

// Tokyo
let TokyoElement = document.querySelector("#tokyo");
let TokyoDateElement = TokyoElement.querySelector(".date");
let TokyoTimeElement = TokyoElement.querySelector(".time");
let TokyoTime = moment().tz("Asia/Tokyo");


TokyoDateElement.innerHTML = moment().format("MMMM Do YYYY");
TokyoTimeElement.innerHTML = TokyoTime.format(
"h:mm:ss [<small>]A[</small>]"
);

// Lisbon
let LisbonElement = document.querySelector("#lisbon");
let LisbonDateElement = LisbonElement.querySelector(".date");
let LisbonTimeElement = LisbonElement.querySelector(".time");
let LisbonTime = moment().tz("Europe/Lisbon");


LisbonDateElement.innerHTML = moment().format("MMMM Do YYYY");
LisbonTimeElement.innerHTML = LisbonTime.format(
"h:mm:ss [<small>]A[</small>]"
);
}

updateTime();
setInterval(updateTime, 1000);