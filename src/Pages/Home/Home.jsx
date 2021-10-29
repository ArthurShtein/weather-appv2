import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  const [autoComplete, setAutoComplete] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setAutoComplete(e.target.value);
    console.log("autoComplete>>>>", autoComplete);
  };
  
  return (
    <div>
      <p> Home Page</p>
      <input type="text" placeholder="search city" onChange={handleChange} />
    </div>
  );
};
