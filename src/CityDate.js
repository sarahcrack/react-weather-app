import React from "react";
import "./CityDate.css";

export default function CityDate(props) {
  return (
    <div className="CityDate">
      <h1 className="city">
        {props.defaultCity}, {props.defaultCountry}
      </h1>
      <h4 id="todays-date">Saturday 30th January</h4>
      <h4 id="current-time">13:25</h4>
    </div>
  );
}
