import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import iconObj from "../data/icon"
import { useSelector } from 'react-redux';
import InputSelectCity from "./InputSelectCity"
import LoadingWeatherOfCity from './LoadingWeatherOfCity';


function WeatherOfCity() {
  const { weatherInfo, loading } = useSelector(state => state.weather)

  function getTime(time) {
    const date = new Date(time * 1000);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  if (loading) {return (<LoadingWeatherOfCity />)};
  
  return (
    <div className='flex items-center justify-center min-h-screen flex-col'>
      <div className="relative">
        <InputSelectCity />
      </div>
      <Swiper 
        className='relative border border-violet-500 border-3 rounded-2xl w-xs md:w-xl'
        modules={[Navigation, Scrollbar]}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="flex items-center flex-col justify-center p-5">
          <h1 class="text-center text-violet-500 text-5xl font-bold">{weatherInfo.name}</h1>
            <DotLottieReact
              src={iconObj[`${weatherInfo.weather[0].icon}`]}
              loop
              autoplay
            />
          <h3 className="text-center text-violet-500 text-5xl font-bold">{Math.round(weatherInfo?.main.temp - 273.15)} °C</h3>
        </SwiperSlide>
        <SwiperSlide
         className="text-center p-5"
         style={{ height: "auto" }}
        >
          <div className="grid grid-cols-2 gap-4 items-center h-full text-violet-500 font-bold">
            <div className="flex flex-col">
              <DotLottieReact
                src={iconObj[`${weatherInfo.weather[0].icon}`]}
                loop
                autoplay
              />
              <p>{weatherInfo.weather[0].description}</p>
            </div>
            <div className="flex flex-col">
              <DotLottieReact
                src={iconObj["wind"]}
                loop
                autoplay
              />
              <p>{weatherInfo.wind.speed} м/с</p>
            </div>
            <div className="flex flex-col">
              <DotLottieReact
                src={iconObj["sunrise"]}
                loop
                autoplay
              />
              <p>{getTime(weatherInfo.sys.sunrise)}</p>
            </div>
            <div className="flex flex-col">
              <DotLottieReact
                src={iconObj["sunset"]}
                loop
                autoplay
              />
              <p>{getTime(weatherInfo.sys.sunset)}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default WeatherOfCity