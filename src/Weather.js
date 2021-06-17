import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });
  function displayWeather(response) {
    setWeather({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      Coordinates: response.data.coord,
    });
  }
  function search() {
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function retrievePosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }
  function handleInput(event) {
    setCity(event.target.value);
  }
  function getPositionFromDevice(event) {
    navigator.geolocation.getCurrentPosition(retrievePosition);
  }
  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="container-app container-sm">
          <div className="row">
            <div className="container-current-temperature">
              <div className="Search">
                <div className="search-engine">
                  <form onSubmit={handleSubmit} className="search-city">
                    <div className="row align-items-center  gx-0">
                      <div className="col-sm py-1 px-1">
                        <input
                          type="text"
                          className="btn btn-light city-text"
                          placeholder="select a city"
                          onChange={handleInput}
                        />
                      </div>
                      <div className="col-sm py-1 px-1">
                        <input
                          type="submit"
                          className="btn btn-light submit-button"
                          value="    Search 🔎    "
                        />
                      </div>
                      <div className="col-sm py-1 px-1">
                        <button
                          type="button"
                          onClick={getPositionFromDevice}
                          className="btn btn-light location-button"
                        >
                          {" "}
                          My Location{" "}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <WeatherInfo data={weather} />
            </div>
            {/* <WeatherForecast coordinates={weather.coordinates} /> */}
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
