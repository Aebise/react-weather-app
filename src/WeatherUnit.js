import React, { useState } from "react";

export default function WeatherUnit(props) {
  let [unit, setUnit] = useState("celsius");
  function showFhar(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheitTemp() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="float-left">
        <span className="temperature">{props.celsius}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFhar}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="float-left">
        <span className="temperature">{Math.round(fahrenheitTemp())}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
