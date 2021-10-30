import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCityToFavourites } from "../../store/actions/weatherAction";
import "./CityDisplay.css";

// const checkFromLocal = () => {
//   const itemsFromLocal = localStorage.getItem("favourites");
//   if (itemsFromLocal) {
//     return JSON.parse(localStorage.getItem("favourites"));
//   } else {
//     return [];
//   }
// };

export const CityDisplay = () => {
  //   const [favList, setFavList] = useState(checkFromLocal());
  const cityFromState = useSelector((state) => state.weatherModule.city);
  const currentConditionFromState = useSelector(
    (state) => state.weatherModule.currentCondition
  );

  const dispatch = useDispatch();

  const handleClick = () => {
    // localStorage.setItem("favourites", JSON.stringify(cityFromState));
    dispatch(addCityToFavourites(cityFromState));
  };

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
        <button className="city-display-btn" onClick={handleClick}>
          Add To favourites
        </button>
      </div>
    </div>
  );
};
