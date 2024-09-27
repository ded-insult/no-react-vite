import { createReducer } from "../../utils/create-reducer";

export const switchActions = {
  SWITCH_TODO: "switch todo",
  SWITCH_GALLERY: "switch gallery",
  SWITCH_COUNTER: "switch counter",
};

const initialState = {
  activeModule: switchActions.SWITCH_GALLERY,
};

const actions = {
  [switchActions.SWITCH_COUNTER]: (state, payload) => ({
    ...state,
    activeModule: switchActions.SWITCH_COUNTER,
  }),
  [switchActions.SWITCH_GALLERY]: (state, payload) => ({
    ...state,
    activeModule: switchActions.SWITCH_GALLERY,
  }),
  [switchActions.SWITCH_TODO]: (state, payload) => ({
    ...state,
    activeModule: switchActions.SWITCH_TODO,
  }),
};

export const switcherReducer = createReducer(initialState, actions);
