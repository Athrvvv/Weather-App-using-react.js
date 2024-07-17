// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (city) => {
    const apiKey = '752412cd45d34f32a37112132241707'; // Replace with your actual API key
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
      console.log(response.data);
      setError(null);
    } catch (err) {
      setWeatherData(null);
      setError('City not found');
    }
  };

  return (
    <div className="App">
    <div className="container">
      <h1 className="title">Weather App</h1>
      <WeatherForm fetchWeatherData={fetchWeatherData} />
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  </div>
  );
};

export default App;
