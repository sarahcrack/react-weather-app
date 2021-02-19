import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function displayWeather(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }

  let apiKey = "fde153f3844b17e39f35c5a4dda52b52";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeather);

  return (
    <div className="Hello">
      <h2>Hello World!</h2>
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
}
