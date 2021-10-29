import React from "react";
import { Link } from 'react-router-dom'

import "./Header.css"

export const Header = () => {
  return (
    <header>
      <div>Weather App 2.0</div>
      <div>
        <Link to="/"> Home </Link>
        <Link to="/favourites"> Favourites </Link>
      </div>
    </header>
  );
};
