import './App.css';
import Mostlycloudy from "./images/weather-icons/mostlycloudy.svg";
import Sunny from "./images/weather-icons/clear.svg";

function App() {
  return (
      <div className='wrapper'>
        <div>
          <header className='header'>
            <input type="text" placeholder="Type in a city name" className='cityInput'/>
            <button className='button'>Find Weather</button>
          </header>
        </div>
        <div className='weather-now'>
          <img src={Mostlycloudy} className='mostlycloudy' alt='mostly cloudy'/>
          <p className='caption1'>overcast clouds</p>
          <p className='caption2'><strong>Temperature</strong> 10&deg; to 11&deg; C</p>
          <p className='caption3'><strong>Humidity</strong> 78% <strong>Pressure</strong> 1008.48</p>
        </div>
        <div className='weather24'>
            <div className='weather'>
              <p>03:00</p>
              <img src={Mostlycloudy} alt='mostly cloudy' className='image1'/>
              <p>8&deg; C</p>
            </div>
            <div className='weather'>
              <p>06:00</p>
              <img src={Mostlycloudy} alt='mostly cloudy' className='image1'/>
              <p>9&deg; C</p>
            </div>
              <div className='weather'>
              <p>09:00</p>
              <img src={Sunny} alt='mostly cloudy' className='image1'/>
              <p>14&deg; C</p>
            </div>
            <div className='weather'>
              <p>12:00</p>
              <img src={Sunny} alt='mostly cloudy' className='image1'/>
              <p>17&deg; C</p>
            </div>
            <div className='weather'>
              <p>15:00</p>
              <img src={Sunny} alt='mostly cloudy' className='image1'/>
              <p>18&deg; C</p>
            </div>
            <div className='weather'>
              <p>18:00</p>
              <img src={Sunny} alt='mostly cloudy' className='image1'/>
              <p>16&deg; C</p>
            </div>
            <div className='weather'>
              <p>21:00</p>
              <img src={Mostlycloudy} alt='mostly cloudy' className='image1'/>
              <p>13&deg; C</p>
            </div>
          </div>
      </div>
  )
}

export default App;
