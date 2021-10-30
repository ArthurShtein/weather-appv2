import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCityToFavourites } from "../../store/actions/weatherAction";
import "./CityDisplay.css";

import { utilService } from "../../utils/utils.js";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const CityDisplay = () => {
  const [inFavourite, setInFavourite] = useState(false);

  const cityFromState = useSelector((state) => state.weatherModule.city);
  const favouritesFromLocal = useSelector(
    (state) => state.weatherModule.favourites
  );
  const currentConditionFromState = useSelector(
    (state) => state.weatherModule.currentCondition
  );

  const isCityDisplayInFavourites = () => {
    const isInFavourites = favouritesFromLocal.find((item) => {
      return item.cityName === cityFromState.cityName;
    });
    if (isInFavourites) {
      setInFavourite(true);
    } else {
      setInFavourite(false);
    }
  };

  useEffect(() => {
    isCityDisplayInFavourites();
  }, [cityFromState, favouritesFromLocal]);

  const dispatch = useDispatch();

  const handleClick = () => {
    isCityDisplayInFavourites();
    let newCityToFavourites = {
      ...cityFromState,
      temp: currentConditionFromState[0].Temperature.Imperial.Value,
      icon: currentConditionFromState[0].WeatherIcon,
    };
    console.log(" newCityToFavourites >>>> ", newCityToFavourites);
    dispatch(addCityToFavourites(newCityToFavourites));
  };

  if (!currentConditionFromState.length) return <div> Loading ... </div>;
  return (
    <div className="city-display-container">
      <div className="city-display-left">
        <img
          className="city-display-img"
          src={`https://developer.accuweather.com/sites/default/files/${utilService.padNum(
            currentConditionFromState[0].WeatherIcon
          )}-s.png`}
          alt=""
        />
        <div className="city-content">
          <h3> {cityFromState.cityName}</h3>
          <h4>{currentConditionFromState[0].Temperature.Imperial.Value}F°</h4>
        </div>
      </div>
      <div className="city-display-right">
        {inFavourite ? (
          <FavoriteIcon className="full-icon" />
        ) : (
          <FavoriteBorderIcon className="icon" />
        )}
        <button className="city-display-btn" onClick={handleClick}>
          Add To Favourites
        </button>
      </div>
    </div>
  );
};
