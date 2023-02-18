import Axios from 'axios'
import React, { useState, useEffect } from 'react';

function App() {
  const [weatherForecast, setWeatherForecast] = useState([])
  useEffect(() => {
    fetchweatherForecast();
  }, [])

  useEffect(() => {
    console.log(weatherForecast)
  }, [weatherForecast])

  const fetchweatherForecast = async () => {
    const url = 'https://localhost:7109/WeatherForecast';
    const response = await Axios(url);
    setWeatherForecast(response.data);
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setWeatherForecast(data)
    // });
  }
  return (
    <div className="App">
      {
        weatherForecast && weatherForecast.map((weather, index) => {
          return (
            <div key={index} style={{ alignItems: 'center', margin: '20px 60px' }}>
              <p>Forecast of the day: <span>{new Date(weather.date).toLocaleDateString('en-Gb')}</span></p>
              <h4>{weather.temperatureC} C° | {weather.temperatureF} F° which means it's {weather.summary} outside.</h4>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;