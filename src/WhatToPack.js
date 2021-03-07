import React from "react";

export default function (props) {
  let weatherCondition = props.weatherCondition;
  let temperatureCondition = props.temperaturatureCondition;

  if (weatherCondition === "Clouds") {
    return (
      <div>
        Don't forget to pack your jacket, sunglasses and umbrella just in case!{" "}
        <i class="fas fa-thumbs-up"></i>
      </div>
    );
  } else if (
    weatherCondition === "Rain" ||
    weatherCondition === "Drizzle" ||
    weatherCondition === "Thunderstorm"
  ) {
    return (
      <div>
        Don't forget to pack your umbrella! <i className="fas fa-umbrella"></i>
      </div>
    );
  } else if (weatherCondition === "Snow") {
    return (
      <div>
        Don't forget to pack your hat and gloves! <i class="fas fa-snowman"></i>
      </div>
    );
  } else if (weatherCondition === "Clear" && temperatureCondition >= 15) {
    return (
      <div>
        Don't forget to pack your sunglasses! <i class="fas fa-sun"></i>
      </div>
    );
  } else if (weatherCondition === "Clear" && temperatureCondition < 15) {
    return (
      <div>
        Don't forget to pack your coat and hat!{" "}
        <i class="fas fa-user-secret"></i>
      </div>
    );
  } else {
    return (
      <div>
        Don't forget to pack your jacket, sunglasses, umbrella, hat and gloves
        just in case! <i class="fas fa-thumbs-up"></i>
      </div>
    );
  }
}
