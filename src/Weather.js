import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    description: "Sunny with broken clouds",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    pack:
      "Don't forget to pack your jacket, sunglasses and umbrella just in case! 👍🏼",
    currentTemperature: 10,
    sunrise: "07:15",
    sunset: "17:00",
    feelsLike: 8,
    humidity: 3,
    windSpeed: 10,
  };

  return (
    <div className="Weather">
      <div className="row">
        <div className="col-sm-6">
          <img src={weatherData.imgUrl} id="weather-icon" alt="weather-image" />

          <p className="weather-description" id="description">
            {weatherData.description}
          </p>
          <p className="pack" id="what-to-pack">
            {" "}
            {weatherData.pack}
          </p>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>
              <span id="sunrise"></span>🌅 {weatherData.sunrise}{" "}
              <span id="sunset">{weatherData.sunset}</span>
            </li>
            <li className="weather-temperature">
              <span className="temperature" id="current-temperature">
                {weatherData.currentTemperature}
              </span>
              <a href="/" id="units-celsius" className="active">
                °C
              </a>
              <span id="units-line">|</span>
              <a href="/" id="units-fahrenheit">
                °F
              </a>
            </li>
            <li>
              Feels like:{" "}
              <span className="feels-like" id="feels-like">
                {weatherData.feelsLike}
              </span>
              °C
            </li>
            <li>
              Humidity:{" "}
              <span className="humidity" id="humidity">
                {weatherData.humidity}
              </span>
              %
            </li>
            <li>
              Wind Speed:{" "}
              <span className="wind-speed" id="wind-speed">
                {weatherData.windSpeed}
              </span>{" "}
              mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
