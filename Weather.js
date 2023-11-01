import React from "react";
import axios from "axios";
import { useState } from "react";
import "./styles.css";
export default function Weather() {
  let [city, setCity] = useState("");

  function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hour = date.getHours();
    let minute = date.getMinutes();
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    day = days[day];
    if (minute < 10) {
      minute = `0${minute}`;
    }
    if (hour < 10) {
      hour = `0${hour}`;
    }

    return `${day} ${hour}:${minute}`;
  }

  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    day = days[day];
    return day;
  }

  function showForecast(response) {
    let forecastElement = document.querySelector("#forecast");
    let forecastHTML = `<div class="row">`;

    let forecast = response.data.daily;
    forecast.forEach(function (forecastDay, index) {
      if (index < 6) {
        let max = Math.round(forecastDay.temperature.maximum);
        let min = Math.round(forecastDay.temperature.minimum);
        forecastHTML =
          forecastHTML +
          `<div class="col-2">
        <div class="weather-forcast-date">${formatDay(forecastDay.time)}</div>
          <img src=${forecastDay.condition.icon_url} alt="" width="42" />
          <div class="weather-forecast-temp">
            <span class="weather-forecast-max"> ${max}° </span>
            <span class="weather-forecast-min"> ${min}° </span>
          </div>
        </div>`;
      }
    });

    forecastHTML = forecastHTML + "</div>";
    forecastElement.innerHTML = forecastHTML;
  }

  function getForecast(coordinates) {
    let lon = coordinates.lon;
    let lat = coordinates.lat;

    let apiKey = "0cfdfc5fe59dfdf10ddad45o04b0t539";
    let url = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`;
    axios.get(url).then(showForecast);
  }

  function showTemprature(response) {
    let temp = Math.round(response.data.main.temp);
    let tempElement = document.querySelector("#temprature");
    tempElement.innerHTML = temp;

    let city = response.data.name;
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = city;

    let descElement = document.querySelector("#description");
    descElement.innerHTML = response.data.weather[0].description;

    let humidElement = document.querySelector("#humidity");
    humidElement.innerHTML = response.data.main.humidity;

    let windElement = document.querySelector("#wind");
    windElement.innerHTML = response.data.wind.speed;

    let dateElement = document.querySelector("#date-time");
    dateElement.innerHTML = formatDate(response.data.dt * 1000);

    let iconElement = document.querySelector("#icon");
    iconElement.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );

    iconElement.setAttribute("alt", response.data.weather[0].description);

    getForecast(response.data.coord);
  }

  function search(city) {
    let apiKey = "bb0df6985c2eab6a171d64a6bacbb4e1";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(showTemprature);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }
  function updateInput(event) {
    setCity(event.target.value);
  }

  return (
    <div className="weather-app-wrapper">
      <div className="weather-app">
        <form id="search-form" className="mb-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                id="city-input"
                type="search"
                placeholder="Type city..."
                className="form-control"
                autocomplete="off"
                onChange={updateInput}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1 id="city"></h1>
        <ul>
          <li id="date-time">Friday 1:12</li>
          <li id="description"></li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img
                alt="Clear"
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                id="icon"
              />
              <div>
                <strong id="temprature"></strong>
                <span className="units">
                  <a href="#" className="active" id="celsius-temp">
                    °C
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity: <span id="humidity"></span>
              </li>
              <li>
                Wind: <span id="wind"></span> km/h
              </li>
            </ul>
          </div>
        </div>

        <div className="weather-forecast" id="forecast"></div>
      </div>
      <small className="coded-by">
        <a href="https://github.com/Aebise/weather-react" target="_blank">
          Source code &nbsp;
        </a>
        by Aebise Chimdessa
      </small>
    </div>
  );
}
