import axios from "axios";
import { useDispatch } from "react-redux";
import { addLocationFromGeo } from "../store/actions/weatherAction";
export const weatherService = {
  checkDuplicates,
  autoComplete,
  currentCondition,
  fiveDaysForecast,
  // getPositionByGeo,
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

// async function getPositionByGeo() {
//   try {
//     const success = (position) => {
//       const latitude = position.coords.latitude;
//       const longitude = position.coords.longitude;
//     };

//     const error = () => {
//       console.log(" Unable to find location");
//     };

//     navigator.geolocation.getCurrentPosition(success, error);
//   } catch (error) {
//     console.log(error);
//   }
//   let data = await axios.get(
//     `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${latitude}%${longitude}`
//   );
//   console.log("data >>>> ", data);
// }

///////////////////////////////////////////////////////////////////////////////

// async function getPositionByGeo() {
//   const success = (position) => {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;

//     const data  = axios.get(
//       `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${latitude},${longitude}`
//     );

//     data.then((res) => console.log("res >>>>", res.data));

    //////////////////////////////////////////////////////////////

    // fetch(
    //   `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${latitude},${longitude}`
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("data >>>>", data);
    //     const newCity = { cityName: data.LocalizedName, Key: data.Key };
    //     const dispatch = useDispatch();
    //     dispatch(addLocationFromGeo(newCity));
    //   });
  // };

//   const error = () => {
//     console.log(" Unable to find location");
//   };

//   navigator.geolocation.getCurrentPosition(success, error);
// }

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
