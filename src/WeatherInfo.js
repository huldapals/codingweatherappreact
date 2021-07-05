import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
            <div className="Data">
                <h1 className="City">{props.data.city}</h1>
                <h2>Last Updated: <FormattedDate date={props.data.date} /></h2>
            </div>
        <div className="CurrentWeather">
            <div className="row">
                <div className="col-sm-7">
                    <div className="currentTemperature">
                        <WeatherIcon code={props.data.icon}/>
                        <WeatherTemperature celsius={props.data.temperature} />
                        
                    </div>
                </div>
                <div className="col-sm-5">
                    <ul>
                        <li> 
                            <strong>Conditions:&nbsp;</strong>
                            <span className="description">{props.data.description}</span>
                        </li>
                        <li> 
                            <strong>Wind:&nbsp;</strong>
                            <span className="wind">{props.data.wind}&nbsp;km/h</span></li>
                        <li> 
                            <strong>Humidity:&nbsp;</strong>
                            <span className="humidity">{props.data.humidity}&nbsp;%</span></li>
                    </ul>    
                </div>
            </div>
        </div>
    </div>
    )
}