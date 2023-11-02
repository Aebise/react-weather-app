import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      city: response.data.name,
      date: "Wednesday 7:00",
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      ready: true,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a city"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                className="btn btn-primary w-100"
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </form>
        <h1>Weather</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix d-flex">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">{weatherData.temperature}</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "25fad9f7e87157d33dde0f82ab269ee8";
    let city = "New York";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
    return "Loading...";
  }
}
