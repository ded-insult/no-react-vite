import { button } from "../../../components/button";
import { textfield } from "../../../components/input";
import { store } from "../../../root/store";
import { todoActions } from "../store";

export function searchPanel() {
  const wrapper = document.createElement("div");
  const input = textfield("Введите символы для поиска");
  const resetBtn = button("Очистить фильтры");
  const btn = button("найти");

  wrapper.append(input, btn, resetBtn);
  render(input, btn, resetBtn);
  return wrapper;
}

function render(input, btn, resetBtn) {
  let inputValue;
  input.addEventListener("input", () => (inputValue = input.value));

  btn.addEventListener("click", () => {
    store.dispatch({
      type: todoActions.FIND_BY_NAME,
      payload: inputValue,
    });
  });

  resetBtn.addEventListener("click", () => {
    store.dispatch({
      type: todoActions.RESET_FILTERS,
    });
  });
}
