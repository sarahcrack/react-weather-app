import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastPreview.css";

export default function ForecastPreview(props) {
  function days() {
    let days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];

    let date = new Date(props.data.dt * 1000);

    let day = days[date.getDay()];
    return `${day}`;
  }

  function MaxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }

  function MinTemp() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }

  function ForecastDescription() {
    let forecastDescription = props.data.weather[0].main;
    return `${forecastDescription}`;
  }

  return (
    <div className="ForecastPreview col-sm-2">
      <span className="forecastDays">{days()}</span>
      <WeatherIcon code={props.data.weather[0].icon} />
      <span className="maxTemp">{MaxTemp()}</span>|
      <span className="minTemp">{MinTemp()}</span> <br />
      {ForecastDescription()}
    </div>
  );
}
