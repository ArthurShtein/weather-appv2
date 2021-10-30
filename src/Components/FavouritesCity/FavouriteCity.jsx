import React from "react";
import "./FavouriteCity.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentCondition,
  getFiveDaysForecast,
  UpdateCity,
} from "../../store/actions/weatherAction";

export const FavouriteCity = ({ city }) => {
  let history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    history.push({ pathname: "/" });
    let newCityToShow = { cityName: city.cityName, Key: city.Key };
    dispatch(UpdateCity(newCityToShow));
    dispatch(getCurrentCondition(newCityToShow.Key));
    dispatch(getFiveDaysForecast(newCityToShow.Key));
  };

  return (
    <div className="favourite-city-container" onClick={handleClick}>
      <h2> {city.cityName} </h2>
      <h2> {city.Key} </h2>
    </div>
  );
};
