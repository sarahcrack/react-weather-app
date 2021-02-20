import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="forecast" id="forecast">
      <div className="days">
        <div className="row">
          <div className="col-sm-2">Sun</div>
          <div className="col-sm-2">Mon</div>
          <div className="col-sm-2">Tues</div>
          <div className="col-sm-2">Weds</div>
          <div className="col-sm-2">Thurs</div>
          <div className="col-sm-2">Fri</div>
        </div>
      </div>

      <div className="weatherImage">
        <div className="row">
          <div className="col-sm-2">
            {" "}
            <i className="fas fa-umbrella"></i>
          </div>
          <div className="col-sm-2">
            {" "}
            <i className="fas fa-sun"></i>
          </div>
          <div className="col-sm-2">
            {" "}
            <i className="fas fa-cloud-sun-rain"></i>
          </div>
          <div className="col-sm-2">
            {" "}
            <i className="far fa-sun"></i>
          </div>
          <div className="col-sm-2">
            {" "}
            <i className="fas fa-snowflake"></i>
          </div>
          <div className="col-sm-2">
            {" "}
            <i className="fas fa-umbrella"></i>
          </div>
        </div>
      </div>

      <div className="highLow">
        <div className="row">
          <div className="col-sm-2">15°|3°</div>
          <div className="col-sm-2">17°|4°</div>
          <div className="col-sm-2">16°|5°</div>
          <div className="col-sm-2">15°|6°</div>
          <div className="col-sm-2">6°|0°</div>
          <div className="col-sm-2">12°|5°</div>
        </div>
      </div>
    </div>
  );
}
