import React from "react";

export default function (props) {
  let weatherCondition = props.weatherCondition;
  let temperatureCondition = props.temperaturatureCondition;

  if (weatherCondition === "Clouds") {
    return "Don't forget to pack your jacket, sunglasses and umbrella just in case! 👍🏼";
  } else if (
    weatherCondition === "Rain" ||
    weatherCondition === "Drizzle" ||
    weatherCondition === "Thunderstorm"
  ) {
    return "Don't forget to pack your umbrella! ☂️";
  } else if (weatherCondition === "Snow") {
    return "Don't forget to pack your hat and gloves! ❄️";
  } else if (weatherCondition === "Clear" && temperatureCondition >= 15) {
    return "Don't forget to pack your sunglasses! 😎";
  } else if (weatherCondition === "Clear" && temperatureCondition < 15) {
    return "Don't forget to pack your coat and hat! 🧥`";
  } else {
    return "Don't forget to pack your jacket, sunglasses, umbrella, hat and gloves just in case! 👍🏼";
  }
}
