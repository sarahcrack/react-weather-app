import Weather from "./Weather";
import "./App.css";

import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <title>Wicked Weather App</title>

          <Weather defaultCity="London" defaultCountry="GB" />
        </div>
        <Footer />
      </div>
    </div>
  );
}
