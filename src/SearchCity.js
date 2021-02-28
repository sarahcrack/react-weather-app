import React from "react";

import "./SearchCity.css";

export default function SearchCity() {
  return (
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
  );
}
