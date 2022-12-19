import React from 'react';
import Mostlycloudy from "../images/weather-icons/mostlycloudy.svg";
function WeatherNow(props) {
    return (
        <div className='weather-now'>
          <img src={Mostlycloudy} className='mostlycloudy' alt='mostly cloudy'/>
          <p className='caption1'>overcast clouds</p>
          <p className='caption2'><strong>Temperature</strong> 10&deg; to 11&deg; C</p>
          <p className='caption3'><strong>Humidity</strong> 78% <strong>Pressure</strong> 1008.48</p>
        </div>
    );
}

export default WeatherNow;