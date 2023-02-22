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
// Auckland
let AucklandElement = document.querySelector("#auckland");
if (AucklandElement) {
let AucklandDateElement = AucklandElement.querySelector(".date");
let AucklandTimeElement = AucklandElement.querySelector(".time");
let AucklandTime = moment().tz("Pacific/Auckland");


AucklandDateElement.innerHTML = moment().format("MMMM Do YYYY");
AucklandTimeElement.innerHTML = AucklandTime.format(
"h:mm:ss [<small>]A[</small>]"
);
}

}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess()
  }
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

  function changeTheme() {
        let body = document.querySelector("body");

        // body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
          body.classList.remove("dark");
          button.innerHTML = "Dark Mode ☾";
        } else {
          body.classList.add("dark");
          button.innerHTML = "Light Mode ☀";
        }
      }
      let button = document.querySelector("button");
      button.addEventListener("click", changeTheme);