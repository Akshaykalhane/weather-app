import React, { useEffect, useState } from 'react';
import './app.css';
import WeatherComponent from './component/weatherComponent';

function App() {

  const [search,setSearch]=useState('')
    const [city,setCity]=useState('delhi');
    const [weatherData,setWeatherData]=useState({})

    useEffect(()=>{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=efb0fc86c241e968d94b20af3bf5b161`;
        fetch(url,{method:'GET'}).then((res)=>res.json()).then((data)=>setWeatherData(data))
    },[city])
    
    const handleCity=(e)=>{
      setSearch(e.target.value)
    }

    const handleSubmit=()=>{
      setCity(search);
      setSearch('')
    }
    console.log(search,'search')
    console.log(city,'city')
    
  return (
    <>
    <div className="container">
        <div className="search">
            <input type="text" placeholder="Type here..." value={search} onChange={(e)=>handleCity(e)} />
           <button className="btn" onClick={handleSubmit}>Search</button>
        </div>
    {weatherData && <WeatherComponent data={weatherData} /> }
    </div>
    </>
  )
}

export default App