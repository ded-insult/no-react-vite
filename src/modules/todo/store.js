import { createReducer } from "../../utils/create-reducer";

/**
 * @typedef {Object} Todo
 * @property {string} name - Название задачи
 * @property {'progress' | 'complete'} status - Статус завершенности задачи
 */

/**
 * @typedef {Object} InitialState
 * @property {Todo[]} todos - Список задач
 */

/**
 * @type {InitialState}
 */
const initialState = {
  todos: [],
};

export const todoActions = {
  REMOVE: "remove",
  ADD: "add",
  RENAME: "rename",
  COMPLETE: "complete",
  UNCOMPLETE: "non complete",
};

const actions = {
  // [todoActions.ADD]: (state, payload) => [
  //   ...(state.length ? [...state] : []),
  //   {
  //     name: payload,
  //     status: "progress",
  //   },
  // ],
  [todoActions.ADD]: (state, payload) => ({
    todos: [
      ...state.todos,
      {
        name: payload,
        status: "progress",
      },
    ],
  }),
  [todoActions.REMOVE]: (state, payload) => {
    return;
  },
  [todoActions.RENAME]: (state, payload) => {},
  [todoActions.COMPLETE]: (state, payload) => {
    return {
      todos: state.todos.map((todo) => {
        return todo?.name === payload ? { ...todo, status: "complete" } : todo;
      }),
    };
  },

  [todoActions.UNCOMPLETE]: (state, payload) => {
    return {
      todos: state.todos.map((todo) => {
        return todo?.name === payload ? { ...todo, status: "progress" } : todo;
      }),
    };
  },
};

export const todoReducer = createReducer(initialState, actions);
