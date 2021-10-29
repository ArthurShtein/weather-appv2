import { weatherService } from "../../weatherService/weatherService";

export function autoCompleteData(inputValue) {
  return async (dispatch) => {
    const autoCompleteResult = await weatherService.autoComplete(inputValue);
    dispatch({ type: "SET_AUTO_COMPLETE", autoCompleteResult });
  };
}

export function UpdateCity(city) {
  return (dispatch) => {
    dispatch({ type: "SET_CITY", city });
  };
}

export function getCurrentCondition(key) {
  return async (dispatch) => {
    const currentCondition = await weatherService.currentCondition(key);
    console.log("currentCondition >>> ", currentCondition);
    dispatch({ type: "SET_CURRENT_CONDITION", currentCondition });
  };
}
