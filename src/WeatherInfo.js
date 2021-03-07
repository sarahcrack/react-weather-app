import React from "react";
import FomattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";
import WhatToPack from "./WhatToPack";

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
          <p className="pack">
            {" "}
            <WhatToPack
              weatherCondition={props.data.weatherCondition}
              temperatureCondition={props.data.feelsLike}
            />
            {props.data.pack}
          </p>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>
              <div className="SunriseSunset">
                <span className="Sunrise">
                  <Sunrise
                    sunrise={props.data.sunriseTimestamp}
                    timezone={props.data.timezone}
                  />
                </span>
                <span className="Sunset">
                  <Sunset
                    sunset={props.data.sunsetTimestamp}
                    timezone={props.data.timezone}
                  />
                </span>
              </div>
            </li>
            <li className="weather-temperature">
              <WeatherTemperature celsius={props.data.temperature} />
            </li>
            <li>
              Feels like:{" "}
              <span className="feels-like">
                {Math.round(props.data.feelsLike)}
              </span>
              °C
            </li>
            <li>
              Humidity: <span className="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              Wind Speed:{" "}
              <span className="wind-speed">
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
