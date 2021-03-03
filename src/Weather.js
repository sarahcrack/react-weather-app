import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import Loader from "react-loader-spinner";

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
      country: response.data.sys.country,
      sunrise: "07:15",
      sunset: "17:00",
      feelsLike: response.data.main.feels_like,
      pack:
        "Don't forget to pack your jacket, sunglasses and umbrella just in case! 👍🏼",
      imgUrl: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="card-body">
          <form id="search-city-form">
            <div className="row">
              <div className="col-3" id="takeMeTo">
                <label for="takeMeTo">Take me to:</label>
              </div>
              <div className="col-5">
                <div className="form-group form-inline">
                  <input
                    type="search"
                    className="form-control shadow-sm w-100"
                    id="city-input"
                    placeholder="City"
                    autoFocus="on"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="col-2">
                <button
                  type="submit"
                  className="btn btn-success shadow w-100"
                  id="goBtn"
                >
                  Go!
                </button>
              </div>
              <div className="col-2">
                <button
                  type="submit"
                  className="btn btn-info shadow"
                  id="currentLocationBtn"
                >
                  {" "}
                  <i className="fas fa-map-marker-alt"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <WeatherInfo data={weatherData} />;
      </div>
    );
  } else {
    const apiKey = "fde153f3844b17e39f35c5a4dda52b52";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);

    return <Loader type="Hearts" color="#00BFFF" height={80} width={80} />;
  }
}
