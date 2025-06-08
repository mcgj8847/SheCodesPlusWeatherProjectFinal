function searchCity(city) {
  let apiKey = `501af34b402d4e44o6622bceat198ee8`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}
function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  searchCity(searchInputElement.value);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
}
function displayWeather(response) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".current-temperature-value");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = temperature;
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  let descriptionElement = document.querySelector("#weather-descripcion");
  descriptionElement.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity-value");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  let windElement = document.querySelector("#wind-value");
  windElement.innerHTML = `${response.data.wind.speed} km/h`;
  let iconElement = document.querySelector("#current-temperature-icon");
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}">`;

  getForecast(response.data.city);
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}
let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();
currentDateELement.innerHTML = formatDate(currentDate);
let form = document.querySelector("form");
form.addEventListener("submit", search);
function getForecast(city) {
  let apiKey = `501af34b402d4e44o6622bceat198ee8`;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}
function displayForecast(response) {
  console.log(response);
  let forecastElement = document.querySelector("#forecast");
  let fday = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let forecastHtml = ``;
  fday.forEach(function (day) {
    forecastHtml += `<div class="weather-forecast-day" id="weather-forecast-day">
          <div id="forecast-day" class="forecast-day">${day} </div>
          <div id="forecast-icon" class="forecast-icon">⛅</div>
          <div id="forecast-values" class="forecast-values">
            <span id="forecast-min">7</span> °C <span id="forecast-max">20</span>°C
          </div>
        </div>`;
  });
  forecastElement.innerHTML = forecastHtml;
}
displayForecast();
