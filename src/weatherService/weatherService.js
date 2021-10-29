import axios from "axios";

const API_KEY = "4aBBAPNL6URV8G56agI6OJks01WPFlSa";

async function getAutoComplete(searchValue) {
  try {
    let { data } = await axios.get(
      `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${autoComplete}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
