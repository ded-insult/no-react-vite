import { button } from "../../../components/button";
import { store } from "../../../root/store";
import { counterAction } from "../store";

export function counterIncrementButton() {
  const element = button(`Нажмите для увеличения счетчика`);
  element.style.background = "green";

  render(element, { type: counterAction.INCREMENT, payload: 10 });
  return element;
}

export function counterDecrementButton() {
  const element = button(`Нажмите для уменшения счетчика`);
  element.style.background = "red";

  render(element, { type: counterAction.DECREMENT });
  return element;
}

export function counterResetButton() {
  const element = button(`Нажмите для обнуления счетчика`);
  element.style.background = "gray";

  render(element, { type: counterAction.RESET });
  return element;
}

function render(element, action) {
  element.addEventListener("click", () => {
    store.dispatch({ ...action });
  });
}
