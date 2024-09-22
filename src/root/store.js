import { combineReducers, createStore } from "redux";
import { counterReducer } from "../modules/counter/store";

const root = combineReducers({
  counter: counterReducer,
});

export const store = createStore(root);
