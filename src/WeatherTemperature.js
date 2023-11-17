import React from "react";

export default function WeatherUnit(props) {
  return (
    <div className="float-left">
      <span className="temperature">{props.temperature}</span>
      <span className="unit">°C</span>
    </div>
  );
}
