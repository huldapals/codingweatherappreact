import axios from "axios";
import React, { useState } from "react";

export default function Search(){
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

function displayWeather(response){
setWeather({
  temperature: Math.round(response.data.main.temp),
  wind: response.data.wind.speed,
  humidity: response.data.main.humidity,
  icon: `http://openweathermap.org/img/wn/${
        response.data.weather[0].icon
      }@2x.png`,
  description: response.data.weather[0].description
});
}

function handleSubmit(event){
  event.preventDefault();
  let apiKey = "094780c710fa4efd669f0df8c3991927";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayWeather);
}

function updateCity(event) {
  setCity(event.target.value);
}

let form= (
    <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              autocomplete="on"
              className="form-control shadow-sm"
              onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-light shadow-sm"
            />
          </div>
        </div>
        </form>
        );

        return(
          <div>
            {form}
            <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
          </div>
        )
}