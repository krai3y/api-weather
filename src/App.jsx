import "./index.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import InputSelectCity from "./components/InputSelectCity";
import WeatherOfCity from "./components/WeatherOfCity";
import { useSelector } from 'react-redux';

function App() {

  const { weatherInfo, loading, error } = useSelector(state => state.weather)

  if (!weatherInfo) {return (<main class="w-full h-dvh"><InputSelectCity/></main>)};
  
  return (
    <main class="w-full h-dvh">
          <WeatherOfCity/>
    </main>
  );
}

export default App;
