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
}
