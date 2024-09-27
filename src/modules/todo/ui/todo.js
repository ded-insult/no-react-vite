import { addTodo } from "./action-ui";
import { searchPanel } from "./search-ui";
import { todoList } from "./todo-list";

let elementRef;

export function todoComponent() {
  if (!elementRef) {
    elementRef = document.createElement("div");

    render(elementRef);
  }

  return elementRef;
}

function render(element) {
  const add = addTodo();
  const list = todoList();
  const search = searchPanel();

  element.append(add.input, add.element, search, list);
}
