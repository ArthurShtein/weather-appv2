import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { utilService } from "../../utils/utils";
import "./FiveDaysForecast.css";

export const FiveDaysForecast = () => {
  const FiveDaysForecastFromState = useSelector(
    (state) => state.weatherModule.fiveDaysForecast
  );

  const currentTempState = useSelector(
    (state) => state.weatherModule.isCelcius
  );
  
  return (
    <div className="five-day-container">
      {FiveDaysForecastFromState.map((item, index) => {
        const { Temperature, Date, Day } = item;
        let CelciusMinTemp = utilService.cToF(Temperature.Minimum.Value);
        let CelciusMaxTemp = utilService.cToF(Temperature.Maximum.Value);
        return (
          <div key={index} className="each-day-container">
            <div>
              <h3> {utilService.changeDate(Date)}</h3>
              <img
                className="city-display-img"
                src={`https://developer.accuweather.com/sites/default/files/${utilService.padNum(
                  Day.Icon
                )}-s.png`}
                alt=""
              />
              <h4> {Day.IconPhrase}</h4>
            </div>

            {currentTempState ? (
              <p>
                {CelciusMinTemp}C° - {CelciusMaxTemp}C°
              </p>
            ) : (
              <p>
                {Temperature.Minimum.Value}F° - {Temperature.Maximum.Value}F°
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};
