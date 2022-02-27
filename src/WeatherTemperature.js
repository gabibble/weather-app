import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span>
      <span className="temperature">{Math.round(props.fahrenheit)}</span>{" "}
      <span className="unit">°F</span>
    </span>
  );
}
