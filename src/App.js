import Weather from "./Weather";
import "./App.css";
import SearchCity from "./SearchCity";
import CityDate from "./CityDate";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <title>Wicked Weather App</title>
          <SearchCity />
          <CityDate defaultCity="Bangkok" defaultCountry="Thailand" />
          <Weather defaultCity="Bangkok" />
          <Forecast />
        </div>
        <Footer />
      </div>
    </div>
  );
}
