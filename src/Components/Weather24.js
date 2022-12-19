import React from 'react'
import '../App.css'

const Weather24 = ({hour, temperature, image}) => {
    return (
             <div className='weather'>
                <p>{hour}</p>
                <img src={image} className='image1'/>
                <p>{temperature}</p>
            </div>
   
  )
}

export default Weather24