import React, {useState} from "react";

export default function WeatherTemperature(props) {
const [unit, setUnit] = useState("celsius")
function convertToF(event){
  event.preventDefault();
  setUnit("fahrenheit");
}

function convertToC(event){
  event.preventDefault();
  setUnit("celsius");
}
if( unit === `celsius`) {
  return (
    <span>
      <span className="current-temperature">{props.celsius}</span>
      <span className="units">°C|<a href="/" onClick={convertToF}>°F</a></span> 
    </span>
  );
  } else {
    let F = (props.celsius * 9/5) + 32 
    return (
    <span>
      <span className="current-temperature">{F}</span>
      <span className="units"><a href="/" onClick={convertToC}>°C</a>|°F</span> 
    </span>
  );
  }
}