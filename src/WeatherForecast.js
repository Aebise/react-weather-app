import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Fri</div>
          <WeatherIcon icon="01d" iconSize={28} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-max">19°</span>
            <span className="WeatherForecast-min">12°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
