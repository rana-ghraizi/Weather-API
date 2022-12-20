import './App.css';
import Search from './Components/Search';
import WeatherNow from './Components/WeatherNow';
import Mostlycloudy from "./images/weather-icons/mostlycloudy.svg";
import Sunny from "./images/weather-icons/clear.svg";
import Weather24 from './Components/Weather24';
import { api } from './api';

function App() {

  return (
      <div className='wrapper'>
        <Search/>
      </div>
  )
  }

export default App;