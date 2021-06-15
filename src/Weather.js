import React from "react";
import "./Weather.css";
import Search from "./Search.js";
import axios from "axios";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10
  };

  return (
    <div className="weather">
        <Search />
      <hr />
      <h1>{weatherData.city}</h1>
      <ul>
        <li>
          Last updated: {weatherData.date} <span id="date-time"></span>
        </li>
        <li>{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li> Feels Like: 10℃</li>
            <li> Humidity: {weatherData.humidity}</li>
            <li> Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
        <p class="githubLink">
          <small>
            This project was coded by Hulda Palsdottir and is{" "}
            <a
              class="gitHub"
              href="https://github.com/huldapals/Weather-App-Project"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-Sourced on GitHub
            </a>
          </small>
        </p>
      </div>
    </div>
  );
}
