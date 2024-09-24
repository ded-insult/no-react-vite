import { combineReducers, createStore } from "redux";
import { counterReducer } from "../modules/counter/store";
import { switcherReducer } from "../modules/switcher";
import { todoReducer } from "../modules/todo/store";

const root = combineReducers({
  counter: counterReducer,
  switcher: switcherReducer,
  todo: todoReducer,
});

export const store = createStore(root);
