const INITIAL_STATE = {
  city: { cityName: "Tel Aviv", Key: 21584 },
  ficeDaysForecast: [],
  currentCondition: {},
  autoComplete: [],
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
    case "SET_CURRENT_CONDITION":
      return {
        ...state,
        currentCondition: action.currentCondition,
      };
    default:
      return state;
  }
}
