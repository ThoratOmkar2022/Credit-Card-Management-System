import { combineReducers } from "redux";
import { cardsReducer } from "./cardsReducer";

const rootReducer = combineReducers({
  card: cardsReducer
});

export default rootReducer;


