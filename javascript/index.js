function updateTime() {
// Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement) {
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");


losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format(
"h:mm:ss [<small>]A[</small>]"
);
}

// Tokyo
let TokyoElement = document.querySelector("#tokyo");
if (TokyoElement) {
let TokyoDateElement = TokyoElement.querySelector(".date");
let TokyoTimeElement = TokyoElement.querySelector(".time");
let TokyoTime = moment().tz("Asia/Tokyo");


TokyoDateElement.innerHTML = moment().format("MMMM Do YYYY");
TokyoTimeElement.innerHTML = TokyoTime.format(
"h:mm:ss [<small>]A[</small>]"
);

}
}

// Lisbon
let LisbonElement = document.querySelector("#lisbon");
if (LisbonElement) {
let LisbonDateElement = LisbonElement.querySelector(".date");
let LisbonTimeElement = LisbonElement.querySelector(".time");
let LisbonTime = moment().tz("Europe/Lisbon");


LisbonDateElement.innerHTML = moment().format("MMMM Do YYYY");
LisbonTimeElement.innerHTML = LisbonTime.format(
"h:mm:ss [<small>]A[</small>]"
);
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
   <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
        </div>
        `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);