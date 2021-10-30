import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  autoCompleteData,
  getCurrentCondition,
  getFiveDaysForecast,
  UpdateCity,
} from "../../store/actions/weatherAction";

import { FiveDaysForecast } from "../../Components/FiveDaysForecast/FiveDaysForecast";
import { CityDisplay } from "../../Components/CityDisplay/CityDisplay";

import "./Home.css";

// const checkLocal = () => {
//   let itemsFromLocal = JSON.parse(localStorage.getItem("favourites"));
//   console.log("itemsFromLocal >>>>", itemsFromLocal);
//   if (itemsFromLocal) {
//     localStorage.setItem("favourites", JSON.stringify(itemsFromLocal));
//   } else {
//     localStorage.setItem("favourites", JSON.stringify([]));
//   }
// };

// localStorage.setItem("favourites", JSON.stringify([]));

export const Home = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [dataSearch, setDataSearch] = useState([]);


  // DATA FROM STATE
  const dispatch = useDispatch();
  const completeDataFromState = useSelector(
    (state) => state.weatherModule.autoComplete
  );

  // dispatch(getCurrentCondition(21584));

  const handleClick = (item) => {
    const { LocalizedName, Key } = item;
    const newCityToSave = { cityName: LocalizedName, Key };
    dispatch(UpdateCity(newCityToSave));
    dispatch(getCurrentCondition(Key));
    dispatch(getFiveDaysForecast(Key));
    setInputSearch("");
  };

  const handleChange = (e) => {
    if (!e.target.value) {
      setInputSearch("");
      return;
    }
    setInputSearch(e.target.value);
    dispatch(autoCompleteData(e.target.value));
  };

  // useEffect(() => {
  //   // UPDATE FORECAST AFTER CLICKING ON CITY FROM FAVOURITES 
  //   setDataSearch(completeDataFromState);
  //     dispatch(getCurrentCondition(Key));
  //     dispatch(getFiveDaysForecast(Key));
  // }, [inputSearch]);

  return (
    <div className="home">
      <h1> Find The Weather In Any City </h1>
      <input type="text" placeholder="search city" onChange={handleChange} />
      {inputSearch &&
        completeDataFromState.map((item) => {
          const { LocalizedName, Key } = item;
          return (
            <div key={Key}>
              <button className="city-btn" onClick={() => handleClick(item)}>
                {LocalizedName}
              </button>
            </div>
          );
        })}
      <CityDisplay />
      <FiveDaysForecast />
    </div>
  );
};
