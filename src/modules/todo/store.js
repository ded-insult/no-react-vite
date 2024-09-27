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
  filteredTodos: [],
  isFiltered: false,
};

export const todoActions = {
  REMOVE: "remove",
  ADD: "add",
  FIND_BY_NAME: "find by name",
  RESET_FILTERS: "reset filters",
  COMPLETE: "complete",
  UNCOMPLETE: "non complete",
};

const actions = {
  [todoActions.ADD]: (state, payload) => ({
    ...state,
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
  [todoActions.FIND_BY_NAME]: (state, payload) => {
    const filtered = state.todos.filter((todo) =>
      todo.name.includes(payload.toLowerCase())
    );

    return {
      ...state,
      isFiltered: true,
      filteredTodos: filtered,
    };
  },
  [todoActions.RESET_FILTERS]: (state) => {
    return {
      ...state,
      isFiltered: false,
      filteredTodos: state.todos,
    };
  },
  [todoActions.COMPLETE]: (state, payload) => {
    return {
      ...state,
      todos: state.todos.map((todo) =>
        todo?.name === payload ? { ...todo, status: "complete" } : todo
      ),
    };
  },

  [todoActions.UNCOMPLETE]: (state, payload) => {
    return {
      ...state,
      todos: state.todos.map((todo) => {
        return todo?.name === payload ? { ...todo, status: "progress" } : todo;
      }),
    };
  },
};

export const todoReducer = createReducer(initialState, actions);
