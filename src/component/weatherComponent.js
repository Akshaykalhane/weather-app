import { type } from '@testing-library/user-event/dist/type'
import React, { useEffect, useState } from 'react'

function WeatherComponent({data}) {

  return (<>
  <div className="weather-info">
            <div className="city">
            {/* {!data.main && <span>city not found</span>} */}
                {data.weather && <h2>{data.weather[0].main}</h2>}
                <p>Today in {data.name} , {data.sys && <span>{data.sys.country}</span>}</p>
            </div>
            <div className="weather-img">
                <img src='images/icon.png'  alt='weather-icon'/>
            </div>
            <div className="temp">
                {data.main && <h1>{data.main.temp.toFixed()}°F</h1>}
                <p>feels like {data.main && <span>{data.main.feels_like.toFixed()}</span>}°F</p>
            </div>
        </div>
        <h2 className='heading-sub'>Weather Detail</h2>
        <div className='weather-detail'>
            <div className='box'>
                <p>Min Temp</p>
                {data.main && <h2>{data.main.temp_min} <i className='fas fa-temperature-low'></i></h2>}
            </div>
            <div className='box'>
                <p>Max Temp</p>
                {data.main && <h2>{data.main.temp_max} <i className='fas fa-temperature-high'></i></h2>}
            </div>
            <div className='box'>
                <p>Pressure</p>
                {data.main && <h2>{data.main.pressure} <i className='fas fa-wind'></i></h2>}
            </div>
            <div className='box'>
                <p>Humidity</p>
                {data.main && <h2>{data.main.humidity} <i className="fas fa-smog"></i></h2>}
            </div>
        </div>
  </>
  )
}

export default WeatherComponent;