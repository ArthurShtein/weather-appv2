import axios from "axios";
import { useDispatch } from "react-redux";
import { addLocationFromGeo } from "../store/actions/weatherAction";
export const weatherService = {
  checkDuplicates,
  autoComplete,
  currentCondition,
  fiveDaysForecast,
  getPositionByGeo,
};

const API_KEY = "R7EE4rY68GtQSNEgKMFIBbUXfHnWUXbA";

async function getPositionByGeo(lat, lon) {
  try {
    const { data } = await axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${lat},${lon}`
    );
    const { LocalizedName, Key } = data;
    const newCity = { cityName: LocalizedName, Key };
    return newCity;
  } catch (error) {
    console.log(error);
  }
}

async function autoComplete(autoComplete) {
  try {
    let { data } = await axios.get(
      `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${autoComplete}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function currentCondition(locationKey) {
  try {
    const { data } = await axios.get(
      `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function fiveDaysForecast(locationKey) {
  try {
    let { data } = await axios.get(
      `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`
    );
    return data.DailyForecasts;
  } catch (error) {
    console.log(error);
  }
}

function checkDuplicates(city) {
  let favCitys = [];
  let favsFromLocal = JSON.parse(localStorage.getItem("favourites"));

  if (favsFromLocal) favCitys = favsFromLocal;

  let isCityAlreadyInside = favCitys.find(
    (item) => item.cityName === city.cityName
  );

  if (isCityAlreadyInside) {
    const noDuplications = favCitys.filter(
      (item) => item.cityName !== city.cityName
    );
    localStorage.setItem("favourites", JSON.stringify(noDuplications));
    return noDuplications;
  } else {
    favCitys.push(city);
    localStorage.setItem("favourites", JSON.stringify(favCitys));
    return favCitys;
  }
}
