import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastPreview(props) {
  function days() {
    let days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];

    let date = new Date(props.data.dt * 1000);

    let day = days[date.getDay()];
    return `${day}`;
  }

  return (
    <div className="ForecastPreview col-sm-2">
      {days()}
      <WeatherIcon code={props.data.weather[0].icon} />
      {Math.round(props.data.temp.max)} | {Math.round(props.data.temp.min)}{" "}
      <br />
      {props.data.weather[0].main}
    </div>
  );
}
