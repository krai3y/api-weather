import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import iconArray from "../data/icon"

function WeatherOfCity({ weatherData }) {

  function getSrc() {
    return(
      iconArray.filter(
        arr => arr.name === weatherData.weather[0].icon
      )[0].src
    )
  }

  function getTime(time) {
    const date = new Date(time * 1000);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Swiper 
        className='relative border border-violet-500 border-4 rounded-xl max-w-lg'
        modules={[Navigation, Scrollbar]}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="flex items-center flex-col justify-center p-5">
          <h1 class="text-center text-violet-500 text-5xl font-bold">{weatherData.name}</h1>
          <div>
            <DotLottieReact
              src={getSrc()}
              loop
              autoplay
            />
          </div>
          <h3 className="text-center text-violet-500 text-5xl font-bold">{Math.round(weatherData?.main.temp - 273.15)} °C</h3>
        </SwiperSlide>
        <SwiperSlide
         className="text-center p-5"
         style={{ height: "auto" }}
        >
          <div className="grid grid-cols-2 gap-4 items-center h-full text-violet-500 font-bold">
            <p>Состояние:</p>
            <p>{weatherData.weather[0].description}</p>
            <p>Скорость ветра:</p>
            <p>{weatherData.wind.speed} м/с</p>
            <p>Восход:</p>
            <p>{getTime(weatherData.sys.sunrise)}</p>
            <p>Закат:</p>
            <p>{getTime(weatherData.sys.sunset)}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default WeatherOfCity