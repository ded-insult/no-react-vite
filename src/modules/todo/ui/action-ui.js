import { button } from "../../../components/button";
import { textfield } from "../../../components/input";
import { store } from "../../../root/store";
import { todoActions } from "../store";

export function addTodo() {
  const element = button("Добавить задание");
  const input = textfield("Мой поле");

  render(element, input);

  return { element, input };
}

function render(button, field) {
  let fieldValue;

  const addFn = () =>
    button.addEventListener("click", () => {
      store.dispatch({
        type: todoActions.ADD,
        payload: fieldValue,
      });
    });

  field.addEventListener("input", () => {
    fieldValue = field.value;
  });

  addFn();
}

export function changeTodoStatus(name) {
  const complete = button("Выполнено");
  const nonComplete = button("Не выполнено");

  renderStatus(complete, nonComplete, name);

  return {
    complete,
    nonComplete,
  };
}

function renderStatus(complete, progress, name) {
  complete.addEventListener("click", () => {
    store.dispatch({
      type: todoActions.COMPLETE,
      payload: name,
    });
  });

  progress.addEventListener("click", () => {
    store.dispatch({
      type: todoActions.UNCOMPLETE,
      payload: name,
    });
  });
}
