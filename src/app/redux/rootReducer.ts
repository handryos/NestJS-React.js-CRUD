import { combineReducers } from "redux";
import Theme from "./slices/Theme";
import CountrieSlice from "./slices/CountrieSlice";

const rootReducer = combineReducers({
  theme: Theme,
  countrieSlice: CountrieSlice,
});

export { rootReducer };
