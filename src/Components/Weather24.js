import React from 'react'
import '../App.css'

// const Weather24 = ({hour, temperature, image}) => {
//     return (
//              <div className='weather'>
//                 <p>{hour}</p>
//                 <img src={image} className='image1'/>
//                 <p>{temperature}</p>
//             </div>
   
//   )
// }

const Weather24 = ({weather, icon}) => {
      return (
               <div className='weather'>
                  <p>{weather}</p>
                  <img src={`http://openweathermap.org/img/wn/${icon}.png`} />
                 
              </div>
     
    )
  } 
export default Weather24