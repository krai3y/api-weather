import citiesData from "../csvjson.json"

export default function formatCitiesData() {
      return citiesData.map((city, index) => ({
      id: index,
      name: city.city,
      region: city.region_type === "Респ" 
        ? `${city.region_type} ${city.region}` 
        : `${city.region} ${city.region_type}`,
      lat: city.geo_lat,
      lon: city.geo_lon,
      prio: city.population > 1000000 ? 1 : 0,
    }));
}
