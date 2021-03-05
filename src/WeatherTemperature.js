import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenehit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>{" "}
        <span className="unit">°C | </span>
        <a href="/" id="units-fahrenheit" onClick={showFahrenheit}>
          °F
        </a>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature" id="current-temperature">
          {Math.round(fahrenheit())}
        </span>
        <a href="/" id="units-celsius" onClick={showCelsius}>
          {" "}
          °C
        </a>
        | <span>°F</span>
      </div>
    );
  }
}
