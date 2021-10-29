const INITIAL_STATE = {
  city: {cityName: "Tel Aviv", Key: 21584},
  autoComplete: [],
};

export function weatherReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_AUTO_COMPLETE":
      return {
        ...state,
        autoComplete: action.autoCompleteResult,
      };
    default:
      return state;
  }
}
