import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  let max = Math.round(props.data.temp.max);
  let min = Math.round(props.data.temp.min);
  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    return days[day];
  }
  function icon() {
    return props.data.weather[0].icon;
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon icon={icon()} iconSize={36} />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-max">{max}°</span>
        <span className="WeatherForecast-min">{min}°</span>
      </div>
    </div>
  );
}
