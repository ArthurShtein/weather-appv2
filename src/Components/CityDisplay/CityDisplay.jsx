import React from "react";
import { useSelector } from "react-redux";
import "./CityDisplay.css";

export const CityDisplay = () => {
  const cityFromState = useSelector((state) => state.weatherModule.city);
  const currentConditionFromState = useSelector(
    (state) => state.weatherModule.currentCondition
  );

  return (
    <div className="city-display-container">
      <div>
        <h3> {cityFromState.cityName}</h3>
        {currentConditionFromState.length && (
          <div>
            <h4> {currentConditionFromState[0].WeatherText}</h4>
            <h4> {currentConditionFromState[0].Temperature.Imperial.Value}F</h4>
          </div>
        )}
      </div>
      <div className="city-right">
        <button className="city-display-btn"> Add To favourites</button>
      </div>
    </div>
  );
};
