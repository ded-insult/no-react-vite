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
  const todosSelector = store.getState().todo;
  element.innerHTML = "";

  todosSelector.todos?.forEach((el) => {
    const li = document.createElement("li");
    let todoStatus = el.status === "progress" ? "В прогрессе" : "Выполнено";

    const status = changeTodoStatus(el.name);

    li.textContent = el?.name + todoStatus ?? "";
    element.append(li, status.complete, status.nonComplete);
  });
}
