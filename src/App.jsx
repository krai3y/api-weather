import "./index.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import InputSelectCity from "./components/InputSelectCity";
import WeatherOfCity from "./components/WeatherOfCity";
import { useSelector } from 'react-redux';
import LoadingWeatherOfCity from "./components/LoadingWeatherOfCity";

function App() {

  const { weatherInfo } = useSelector(state => state.weather)

  if (!weatherInfo) {return (<main class="w-full h-dvh"><InputSelectCity/></main>)};
  
  return (
    <main class="w-full h-dvh min-h-screen">
      <WeatherOfCity/>
    </main>
  );
}

export default App;
