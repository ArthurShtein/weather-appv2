const INITIAL_STATE = {
  city: { cityName: "Tel Aviv", Key: 21584 },
  fiveDaysForecast: [],
  currentCondition: {},
  autoComplete: [],
  favourites: [],
  isCelcius: false,
  cityFromGeo: false,
};

export function weatherReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_AUTO_COMPLETE":
      return {
        ...state,
        autoComplete: action.autoCompleteResult,
      };
    case "SET_CITY":
      return {
        ...state,
        city: action.city,
      };
    case "SET_CITY_FROM_GEO":
      return {
        ...state,
        city: action.city,
      };
    case "SET_CURRENT_CONDITION":
      return {
        ...state,
        currentCondition: action.currentCondition,
      };
    case "SET_FIVE_DAYS_FORECAST":
      return {
        ...state,
        fiveDaysForecast: action.fiveDaysForecast,
      };
    case "SET_FAVOURITES":
      return {
        ...state,
        favourites: action.finalFavourites,
      };
    case "SET_CITY_FROM_GEO":
      return {
        ...state,
        city: action.city,
      };
    case "TOGGLE_TEMP":
      return {
        ...state,
        isCelcius: action.toggleTemp,
      };
    case "SET_GEO_TRUE":
      return {
        ...state,
        cityFromGeo: action.toggleGeo,
      };
    default:
      return state;
  }
}
