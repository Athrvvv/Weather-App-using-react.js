// src/components/WeatherDisplay.js
import React from 'react';
import './WeatherDisplay.css';

const WeatherDisplay = ({ data }) => {
  return (
    <center>
    <div className="weather-display">
    <center>

      <h2>Weather in {data.location.name}</h2>
      <p><strong>Latitude:</strong> {data.location.lat}</p>
      <p><strong>Longitude:</strong> {data.location.lon}</p>
      <p><strong>Temperature:</strong> {data.current.temp_c}°C</p>
      <p><strong>Condition:</strong> {data.current.condition.text}</p>
      <img src={data.current.condition.icon} alt={data.current.condition.text} />
      </center>

    </div>
    </center>
    
  );
};

export default WeatherDisplay;
