import React from "react";
import "./Favourites.css";

import { FavouriteCity } from "../../Components/FavouritesCity/FavouriteCity";

export const Favourites = () => {
  const favouritesFromLocal = JSON.parse(localStorage.getItem("favourites"));
  if (!favouritesFromLocal)
    return (
      <div className="no-fav">
        <h1>No Favourites Yet </h1>{" "}
      </div>
    );
  return (
    <div className="favourites-container">
      {favouritesFromLocal.map((city, index) => {
        return <FavouriteCity key={index} city={city} />;
      })}
    </div>
  );
};
