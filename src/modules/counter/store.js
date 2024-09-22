import { createReducer } from "../../utils/create-reducer";

export const counterAction = {
  INCREMENT: "increment",
  DECREMENT: "decremented",
  RESET: "reset",
};

const initialState = {
  value: 0,
};

const actions = {
  [counterAction.INCREMENT]: (state, payload) => ({
    ...state,
    value: state.value + (payload || 1),
  }),
  [counterAction.DECREMENT]: (state, payload) => ({
    ...state,
    value: state.value - (payload || 1),
  }),
  [counterAction.RESET]: () => initialState,
};

export const counterReducer = createReducer(initialState, actions);
