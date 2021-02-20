import Weather from "./Weather";
import "./App.css";
import SearchCity from "./SearchCity";
import CityDate from "./CityDate";
import Forecast from "./Forecast";

import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <title>Wicked Weather App</title>
          <SearchCity />
          <CityDate defaultCity="London" defaultCountry="GB" />
          <Weather />
          <Forecast />
        </div>
      </div>
    </div>
  );
}
