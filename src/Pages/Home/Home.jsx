import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { autoCompleteData } from "../../store/actions/weatherAction";

import './Home.css'

export const Home = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [dataSearch, setDataSearch] = useState([]);

  // DATA FROM STATE
  const dispatch = useDispatch();
  const completeDataFromState = useSelector(
    (state) => state.weatherModule.autoComplete
  );


  const handleChange = (e) => {
    setInputSearch(e.target.value);
    dispatch(autoCompleteData(e.target.value));
  };

  useEffect(() => {
    setDataSearch(completeDataFromState);
  }, [inputSearch]);

  return (
    <div className="home">
      <h1> Find The Weather In Any City </h1>
      <input type="text" placeholder="search city" onChange={handleChange} />
      {completeDataFromState &&
        completeDataFromState.map((item) => {
          const { LocalizedName, Key } = item;
          return (
            <div key={Key}>
              <button > {LocalizedName} </button>
            </div>
          );
        })}
    </div>
  );
};
