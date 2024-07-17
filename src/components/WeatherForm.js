// src/components/WeatherForm.js
import React, { useState } from 'react';
import './WeatherForm.css';

const WeatherForm = ({ fetchWeatherData }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(city);
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit} className="weather-form">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="input"
      />
      <br/>
      <button type="submit" className="button">Get Weather</button>
      <br/>
    </form>
  );
};

export default WeatherForm;
