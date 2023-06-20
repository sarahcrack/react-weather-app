import React from "react";

export default function Sunrise (props) {
  let sunriseTimestamp = props.sunrise * 1000 + props.timezone * 1000;
  let sunriseDate = new Date(sunriseTimestamp);
  let sunriseHours = sunriseDate.getUTCHours();
  if (sunriseHours < 10) {
    sunriseHours = `0${sunriseHours}`;
  }
  let sunriseMinutes = "0" + sunriseDate.getUTCMinutes();

  return (
    <div className="formattedSunrise">
      <i class="far fa-sun"></i> {sunriseHours}:{sunriseMinutes.substr(-2)}
    </div>
  );
}
