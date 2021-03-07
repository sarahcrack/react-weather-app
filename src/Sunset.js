import React from "react";

export default function Sunset(props) {
  let sunsetTimestamp = props.sunset * 1000 + props.timezone * 1000;
  let sunsetDate = new Date(sunsetTimestamp);
  let sunsetHours = sunsetDate.getUTCHours();
  if (sunsetHours < 10) {
    sunsetHours = `0${sunsetHours}`;
  }
  let sunsetMinutes = "0" + sunsetDate.getUTCMinutes();

  return (
    <div className="formattedsunset">
      <i class="far fa-moon"></i> {sunsetHours}:{sunsetMinutes.substr(-2)}
    </div>
  );
}
