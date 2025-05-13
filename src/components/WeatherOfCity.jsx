import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import iconArray from "../data/icon"
import arrow from "../assets/arrow.png"

function WeatherOfCity({ setParametres, setFoundedCities, setCitySelected, weatherData }) {

  function getSrc() {
    return iconArray.filter(
      arr => arr.name === weatherData.weather[0].icon
    )[0].src
  }

  function getTime(time) {
    const date = new Date(time * 1000);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  
  return (
    <div>
        <div>
          {/* <img 
            src={arrow}
            onClick={() => {
              setParametres();
              setFoundedCities([]);
              setCitySelected(false);
            }}
          /> */}
        </div>
        <div className='relative border border-violet-500 border-4 rounded-xl m-40'>
          <img 
            src={arrow}
            onClick={() => {
              setParametres();
              setFoundedCities([]);
              setCitySelected(false);
            }}
            className='absolute top-0 left-0'
          />
          <div className="flex items-center flex-col justify-center">
            <h1 class="text-center text-violet-500 text-5xl font-bold">{weatherData.name}</h1>
            <div  >
              <DotLottieReact
                src={getSrc()}
                loop
                autoplay
              />
            </div>
            <h3 className="text-center text-violet-500 text-5xl font-bold">{Math.round(weatherData?.main.temp - 273.15)} °C</h3>
            <h3>Состояние: {weatherData.weather[0].description}</h3>
            <h3>Скорость ветра: {weatherData.wind.speed} м/с</h3>
            <h3>Восход: {getTime(weatherData.sys.sunrise)}</h3>
            <h3>Закат: {getTime(weatherData.sys.sunset)}</h3>
          </div>
        </div>
    </div>
  )
}

export default WeatherOfCity