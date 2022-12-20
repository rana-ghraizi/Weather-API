import React from 'react';
import Mostlycloudy from "../images/weather-icons/mostlycloudy.svg";

function WeatherNow({description, temp, humidity, pressure, icon}) {
    return (
        <div className='weather-now'>
          <img src={`http://openweathermap.org/img/wn/${icon}.png`} className='mostlycloudy' alt='mostly cloudy'/>
          <p className='caption1'>{description }</p>
          <p className='caption2'><strong>Temperature</strong>{temp.toFixed(0)} °C</p>
          <p className='caption3'><strong>Humidity</strong> {humidity} % <strong>Pressure</strong> {pressure}</p>
        </div>
    );
}

export default WeatherNow;