import React from "react";
import FomattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        {props.data.city}, {props.data.country}
      </h1>
      <h4>
        <FomattedDate date={props.data.date} />
      </h4>

      <div className="row">
        <div className="col-sm-6">
          <div className="icon">
            <WeatherIcon code={props.data.icon} />
          </div>
          <p className="weather-description">{props.data.description}</p>
          <p className="pack" id="what-to-pack">
            {" "}
            {props.data.pack}
          </p>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>
              <span id="sunrise"></span>🌅 {props.data.sunrise}{" "}
              <span id="sunset">{props.data.sunset}</span>
            </li>
            <li className="weather-temperature">
              <WeatherTemperature celsius={props.data.temperature} />
            </li>
            <li>
              Feels like:{" "}
              <span className="feels-like" id="feels-like">
                {Math.round(props.data.feelsLike)}
              </span>
              °C
            </li>
            <li>
              Humidity:{" "}
              <span className="humidity" id="humidity">
                {props.data.humidity}
              </span>
              %
            </li>
            <li>
              Wind Speed:{" "}
              <span className="wind-speed" id="wind-speed">
                {Math.round(props.data.windSpeed)}
              </span>{" "}
              mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
