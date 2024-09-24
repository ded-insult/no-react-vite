import { combineReducers, createStore } from "redux";
import { counterReducer } from "../modules/counter/store";
import { switcherReducer } from "../modules/switcher";

const root = combineReducers({
  counter: counterReducer,
  switcher: switcherReducer,
});

export const store = createStore(root);
