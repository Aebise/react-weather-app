import React from "react";

export default function FormattedDate(props) {
  let date = props.date;
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

  let minutes = props.date.getMinutes();
  let hours = props.date.getHours();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
