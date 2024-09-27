import { store } from "../../../root/store";
import { changeTodoStatus } from "./action-ui";

let ref;

export function todoList() {
  if (!ref) {
    ref = document.createElement("ul");

    store.subscribe(() => {
      render(ref);
    });

    render(ref);
  }

  return ref;
}

function render(element) {
  element.innerHTML = "";

  const noElementsComponent = document.createElement("h2");
  noElementsComponent.textContent = "Нет задач";

  const todosSelector = store.getState().todo.todos;
  const filteredTodosSelector = store.getState().todo.filteredTodos;
  const isFiltered = store.getState().todo.isFiltered;

  const resultTodoList = isFiltered ? filteredTodosSelector : todosSelector;

  if (!resultTodoList.length) element.append(noElementsComponent);

  resultTodoList.forEach((el) => {
    const li = document.createElement("li");
    let todoStatus = el.status === "progress" ? "В прогрессе" : "Выполнено";

    const status = changeTodoStatus(el.name);

    li.textContent = el?.name + todoStatus ?? "";
    element.append(li, status.complete, status.nonComplete);
  });
}
