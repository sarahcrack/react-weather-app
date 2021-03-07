import React, { useState } from "react";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
    console.log(response.data);
  }

  if (
    loaded &&
    props.latitude === forecast.lat &&
    props.longitude === forecast.lon
  ) {
    return (
      <div className="Forecast row">
        <ForecastPreview data={forecast.daily[1]} />
        <ForecastPreview data={forecast.daily[2]} />
        <ForecastPreview data={forecast.daily[3]} />
        <ForecastPreview data={forecast.daily[4]} />
        <ForecastPreview data={forecast.daily[5]} />
        <ForecastPreview data={forecast.daily[6]} />
      </div>
    );
  } else {
    let apiKey = "fde153f3844b17e39f35c5a4dda52b52";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleForecastResponse);

    return null;
  }
}
