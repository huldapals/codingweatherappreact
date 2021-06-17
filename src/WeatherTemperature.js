import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span>
      <span className="current-temperature">{props.celsius}</span>
      <span className="units">°C </span>
    </span>
  );
}