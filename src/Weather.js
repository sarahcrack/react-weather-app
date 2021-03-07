import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import Loader from "react-loader-spinner";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      windSpeed: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      city: response.data.name,
      country: response.data.sys.country,
      sunriseTimestamp: response.data.sys.sunrise,
      sunsetTimestamp: response.data.sys.sunset,
      feelsLike: response.data.main.feels_like,
      pack:
        "Don't forget to pack your jacket, sunglasses and umbrella just in case! 👍🏼",
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      latitude: response.data.coord.lat,
      longitude: response.data.coord.lon,
      timezone: response.data.timezone,
    });
    console.log(response.data.sys.sunrise);
  }

  function search() {
    const apiKey = "fde153f3844b17e39f35c5a4dda52b52";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function findLocation(position) {
    const apiKey = "fde153f3844b17e39f35c5a4dda52b52";
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=en`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(findLocation);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="card-body">
          <form className="search-city-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-3">
                <label for="takeMeTo" className="takeMeTo">
                  Take me to:
                </label>
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
                    onChange={handleCityChange}
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
                  type="button"
                  className="btn btn-info shadow"
                  id="currentLocationBtn"
                  onClick={handleLocation}
                >
                  {" "}
                  <i className="fas fa-map-marker-alt"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <WeatherInfo data={weatherData} />;
        <Forecast
          latitude={weatherData.latitude}
          longitude={weatherData.longitude}
        />
      </div>
    );
  } else {
    search();

    return <Loader type="Hearts" color="#00BFFF" height={80} width={80} />;
  }
}
