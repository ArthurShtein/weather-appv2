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
  console.log("city >>>> ", city);
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
      <img
        className="fav-display-img"
        src={`https://developer.accuweather.com/sites/default/files/${utilService.padNum(
          city.icon
          )}-s.png`}
          alt=""
          />
          <h2> {city.cityName} </h2>
      <h2> {city.temp}F° </h2>
    </div>
  );
};
