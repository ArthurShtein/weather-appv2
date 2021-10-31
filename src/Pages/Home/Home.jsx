import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  autoCompleteData,
  getCurrentCondition,
  getFiveDaysForecast,
  toggleTemp,
  UpdateCity,
} from "../../store/actions/weatherAction";

import { FiveDaysForecast } from "../../Components/FiveDaysForecast/FiveDaysForecast";
import { CityDisplay } from "../../Components/CityDisplay/CityDisplay";
import { weatherService } from "../../services/weatherService";
import "./Home.css";

export const Home = () => {
  const [inputSearch, setInputSearch] = useState("");
  const refContainer = useRef(null);

  const dispatch = useDispatch();
  const completeDataFromState = useSelector(
    (state) => state.weatherModule.autoComplete
  );

  const currentCityFromState = useSelector((state) => state.weatherModule.city);
  const currentTempState = useSelector(
    (state) => state.weatherModule.isCelcius
  );

  // const cityFromGeoLocation = weatherService.getPositionByGeo();
  // console.log('cityFromGeoLocation >>>>',cityFromGeoLocation  )

  const handleClick = (item) => {
    const { LocalizedName, Key } = item;
    const newCityToSave = { cityName: LocalizedName, Key };
    dispatch(UpdateCity(newCityToSave));
    dispatch(getCurrentCondition(Key));
    dispatch(getFiveDaysForecast(Key));
    refContainer.current.value = "";
    setInputSearch("");
  };

  const handleClickTempToggle = () => {
    dispatch(toggleTemp(!currentTempState));
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
    dispatch(getCurrentCondition(currentCityFromState.Key));
    dispatch(getFiveDaysForecast(currentCityFromState.Key));
  }, []);

  return (
    <div className="home">
      <h1 className="home-header"> Find The Weather In Any City </h1>

      <input
        ref={refContainer}
        type="text"
        placeholder="search city"
        onChange={handleChange}
        className="home-input"
      />

      <button className="temp-btn" onClick={handleClickTempToggle}>
        {currentTempState ? "Change To Farenhight" : "Change To Celcius"}
      </button>
      <div className="btn-containers">
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
      </div>
      <CityDisplay />
      <FiveDaysForecast />
    </div>
  );
};
