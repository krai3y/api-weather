import React from "react";

function SelectCity({ setCitySelected, setParametres, setFoundedCities, foundedCities, searchHandler }) {

  return (
    <div class="flex items-center flex-col justify-center min-h-screen">
        <div class="flex items-end">
          <input 
            type="text"
            onChange={(e) => searchHandler(e)}
            class={`border-3 border-violet-500 hover:bg-violet-100 focus:outline-0 font-bold text-violet-500 text-lg w-200  ${foundedCities.length ? "rounded-t-[25px]" : "rounded-[25px]"} p-6`}  
          />
        </div>
        <div class="flex flex-col items-center divide-y-3">
          {foundedCities.map(city => {
            return(
              <button
                class={`border-x-3 border-violet-500 hover:bg-violet-100 text-violet-500 font-bold text-lg cursor-pointer w-200 ${city.name == foundedCities[foundedCities.length - 1].name ? 'border-b-3 rounded-b-[25px]' : ''} p-6`}
                key={city.id}
                onClick={() => {
                  setParametres({
                    "name": city.name,
                    "lat": city.lat,
                    "lon": city.lon,
                  }); 
                  setFoundedCities([]);
                  setCitySelected(true);
                }}>
                {city.name} <span>({city.region})</span>
              </button>
            );
          })}
        </div>
    </div>
  )
}

export default SelectCity