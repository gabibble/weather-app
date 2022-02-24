import React from "react";

export default function WeatherForecastDay(props) {
  let iconUrl = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()} </div>
      <div className="WeatherForecast-icon">
        <img src={iconUrl} alt="partly cloudy" className="float-left" />
      </div>
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-temp-max">{maxTemp()}</span> {""}
        <span className="WeatherForecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
