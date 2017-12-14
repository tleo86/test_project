import { combineReducers } from "redux";
import things from "./info";

const rootReducer = combineReducers({
  things:things
});

export default rootReducer;
