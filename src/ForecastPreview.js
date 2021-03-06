import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastPreview(props) {
  return (
    <div className="ForecastPreview col-sm-2">
      <WeatherIcon code={props.data.weather[0].icon} />
      {Math.round(props.data.temp.max)} | {Math.round(props.data.temp.min)}{" "}
      <br />
      {props.data.weather[0].main}
    </div>
  );
}
