import React from "react";
import "./FavouriteCity.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UpdateCity } from "../../store/actions/weatherAction"


export const FavouriteCity = ({ city }) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log(" HANDLING CLICK ... ");
    history.push({ pathname: "/" });
      dispatch(UpdateCity(city));
  };

  return (
    <div className="favourite-city-container" onClick={handleClick}>
      <h2> {city.cityName} </h2>
      <h2> {city.Key} </h2>
    </div>
  );
};
