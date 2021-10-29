import { weatherService } from "../../weatherService/weatherService";

export function autoCompleteData(inputValue) {
  return async (dispatch) => {
    const autoCompleteResult = await weatherService.getAutoComplete(inputValue);
    dispatch({ type: "SET_AUTO_COMPLETE", autoCompleteResult });
  };
}
