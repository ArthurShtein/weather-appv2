import React from "react";
import "./FavouriteCity.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentCondition,
  getFiveDaysForecast,
  UpdateCity,
} from "../../store/actions/weatherAction";
import { utilService } from "../../utils/utils";

export const FavouriteCity = ({ city }) => {
  let history = useHistory();
  const dispatch = useDispatch();

  const currentTempState = useSelector(
    (state) => state.weatherModule.isCelcius
  );
  const handleClick = () => {
    history.push({ pathname: "/" });
    let newCityToShow = { cityName: city.cityName, Key: city.Key };
    dispatch(UpdateCity(newCityToShow));
    dispatch(getCurrentCondition(newCityToShow.Key));
    dispatch(getFiveDaysForecast(newCityToShow.Key));
  };

  let cTemp = utilService.cToF(city.temp);

  return (
    <div className="favourite-city-container" onClick={handleClick}>
      <img
        className="fav-display-img"
        src={`https://developer.accuweather.com/sites/default/files/${utilService.padNum(
          city.icon
        )}-s.png`}
        alt=""
      />
      <h2> {city.cityName} </h2>
      <h3>{currentTempState ? `${cTemp}C°` : `${city.temp}F°`} </h3>
    </div>
  );
};
