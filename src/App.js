import './App.css';
import Search from './Components/Search';
import WeatherNow from './Components/WeatherNow';
import Mostlycloudy from "./images/weather-icons/mostlycloudy.svg";
import Sunny from "./images/weather-icons/clear.svg";
import Weather24 from './Components/Weather24';
import FakeWeather from "./data/FakeWeather.json";

function App() {
  // const weather = [
  //   {
  //     hour:'03:00',
  //     image: Mostlycloudy,
  //     temperature:'8\u00b0 C'
  //   },
  //   {
  //     hour:'06:00',
  //     image: Mostlycloudy,
  //     temperature:'9\u00b0 C'
  //   },
  //   {
  //     hour:'09:00',
  //     image: Sunny,
  //     temperature:'14\u00b0 C'
  //   },
  //   {
  //     hour:'12:00',
  //     image: Sunny,
  //     temperature:'17\u00b0 C'
  //   },
  //   {
  //     hour:'15:00',
  //     image: Sunny,
  //     temperature:'18\u00b0 C'
  //   },
  //   {
  //     hour:'18:00',
  //     image: Sunny,
  //     temperature:'16\u00b0 C'
  //   },
  //   {
  //     hour:'21:00',
  //     image: Mostlycloudy,
  //     temperature:'13\u00b0 C'
  //   }
  // ]
  return (
      <div className='wrapper'>
        <Search/>
        <WeatherNow/>
        <div className='Weather24'>
           {
            FakeWeather.list.map( (item, index) => {
              return(
                <div className="box">
                      <Weather24 weather={item.weather[0].id} icon={item.weather[0].icon}/>
                </div>
              )
            })
           }


        </div>
        {/* <div className='weather24'>
        {weather.map((item, index)=>(
        <Weather24 hour={item.hour} image={item.image} temperature={item.temperature}/>
        ))}
        </div> */}
      </div>
  )
}

export default App;