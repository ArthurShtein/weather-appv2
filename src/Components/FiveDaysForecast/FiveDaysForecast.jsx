import React from "react";
import { useSelector } from "react-redux";
import "./FiveDaysForecast.css";

export const FiveDaysForecast = () => {
  const FiveDaysForecastFromState = useSelector(
    (state) => state.weatherModule.fiveDaysForecast
  );

  return (
    <div className="five-day-container">
      {FiveDaysForecastFromState.map((item, index) => {
        const { Temperature, Date, Day } = item;
        return (
          <div key={index} className="each-day-container">
            <div>
              <h3> {Day.IconPhrase}</h3>
              <h4> {Date}</h4>
            </div>
            <p>
              {Temperature.Minimum.Value}F - {Temperature.Maximum.Value}F
            </p>
          </div>
        );
      })}
    </div>
  );
};
