import axios from "axios";

export const weatherService = {
  autoComplete,
  currentCondition,
  fiveDaysForecast,
};

const API_KEY = "4aBBAPNL6URV8G56agI6OJks01WPFlSa";

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