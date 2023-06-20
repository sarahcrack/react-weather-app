import React from "react";

export default function FomattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.date.getDay()];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.date.getMonth()];

  let date = props.date.getDate();
  if (date === 1 || date === 21 || date === 31) {
    date = `${date}st`;
  } else if (date === 2 || date === 22) {
    date = `${date}nd`;
  } else if (date === 3 || date === 23) {
    date = `${date}rd`;
  } else {
    date = `${date}th`;
  }

  let year = props.date.getFullYear();

  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="date">
      {day} {date} {month} {year}
      <br />
      {hours}:{minutes}
    </div>
  );
}
