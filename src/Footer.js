import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <p className="Footer">
      <a
        href="https://github.com/sarahcrack/react-weather-app"
        target="_blank"
        id="open-source-link"
      >
        Open-source code
      </a>{" "}
      by
      <a href="https://www.linkedin.com/in/sarah-crack-b2209195/">
        {" "}
        Sarah Crack
      </a>
    </p>
  );
}
