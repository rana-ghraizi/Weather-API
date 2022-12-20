import React, {useEffect, useState } from 'react';
import { api } from '../api';
import WeatherNow from './WeatherNow';

function Search(props) {
  const [search, setSearch] = useState("london");
  const [weather, setWeather] = useState({});

  const handleOnChange = () => {
    console.log('searched')
    fetch(`${api.base}weather?q=${search}&appid=${api.key}`)
    .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setWeather(result);
      });
  }
    return (
        <div className='wrapper'>
          <header className='header'>
           <input type="text" placeholder="Type in a city name" className='cityInput' value={search}
            onChange={(e) => setSearch(e.target.value)}/>
            <button className='button' onClick={handleOnChange}>Find Weather</button>
          </header>
                {weather ?
                <WeatherNow 
                description={weather.weather[0].description}
                temp={weather.main.temp}
                humidity={weather.main.humidity}
                pressure={weather.main.pressure}
                icon={weather.weather[0].icon}
                /> :  <p>Loading weather data...</p>
                }
        </div>
    );
}

export default Search;