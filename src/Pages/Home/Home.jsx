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

export const Home = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [dataSearch, setDataSearch] = useState([]);

  // DATA FROM STATE
  const dispatch = useDispatch();
  const completeDataFromState = useSelector(
    (state) => state.weatherModule.autoComplete
  );
  const currentCityFromState = useSelector(
    (state) => state.weatherModule.city
  );

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

  useEffect(() => {
    setDataSearch(completeDataFromState);
    dispatch(getCurrentCondition(currentCityFromState.Key));
    dispatch(getFiveDaysForecast(currentCityFromState.Key));
  }, [inputSearch]);

  return (
    <div className="home">
      <h1 className="home-header"> Find The Weather In Any City </h1>
      <input type="text" placeholder="search city" onChange={handleChange} className="home-input"/>
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
