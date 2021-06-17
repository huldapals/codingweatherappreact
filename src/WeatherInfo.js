import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function(props){
    return(
        <div className="WeatherInfo">
            <div className="Data">
                <h1 className="City">{props.data.city}</h1>
                <h2>Last Updated: <FormattedDate /></h2>
            </div>
        <div className="CurrentWeather">
            <div className="row">
                <div className="col-sm-7">
                    <div className="currentTemperature">
                        <WeatherTemperature />
                        <WeatherIcon />
                    </div>
                </div>
                <div className="col-sm-5">
                    <ul>
                        <li>
                            
                        </li>   
                    </ul>    
                </div>
            </div>

        </div>

        </div>
    )
}