import React from "react";
import { useSelector } from "react-redux";
import './Favourites.css'

import { FavouriteCity } from "../../Components/FavouritesCity/FavouriteCity";

export const Favourites = () => {
  const favouritesFromLocal = JSON.parse(localStorage.getItem("favourites"));

  if (!favouritesFromLocal.length) return <div> No Favourites Yet </div>;
  return (
    <div className="favourites-container">
      {favouritesFromLocal.map((city) => {
        return <FavouriteCity city={city} />;
      })}
    </div>
  );
};
