import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      windSpeed: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      city: response.data.name,
      sunrise: "07:15",
      sunset: "17:00",
      feelsLike: 8,
      pack:
        "Don't forget to pack your jacket, sunglasses and umbrella just in case! 👍🏼",
      imgUrl: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-sm-6">
            <img
              src={weatherData.imgUrl}
              id="weather-icon"
              alt="weather-image"
            />

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
                  {Math.round(weatherData.temperature)}
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
                  {Math.round(weatherData.windSpeed)}
                </span>{" "}
                mph
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "fde153f3844b17e39f35c5a4dda52b52";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);

    return "Loading...";
  }
}
