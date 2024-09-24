import { store } from "../../../root/store";
import {
  counterDecrementButton,
  counterIncrementButton,
  counterResetButton,
} from "./action-ui";

/**
 * Мы сохраняем ссылку на объект, тем самым если объект есть в памяти, то компонент не будет перерисован полностью
 */
let counterElem;

export function counterComponent() {
  if (!counterElem) {
    counterElem = document.createElement("div");
    counterElem.classList.add("counter-component");

    render(counterElem);
  }

  return counterElem;
}

function render(element) {
  const counterTitle = document.createElement("h2");
  counterTitle.textContent = "Заголовок счётчика. Активных кликов: ";

  const counterComponent = document.createElement("div");
  counterComponent.classList.add("btns");

  const btnIncrement = counterIncrementButton();
  const btnDecrement = counterDecrementButton();
  const btnReset = counterResetButton();

  store.subscribe(() => updateTitleLabel(counterTitle));

  counterComponent.append(counterTitle, btnIncrement, btnDecrement, btnReset);
  element.append(counterComponent);
}

const updateTitleLabel = (contentTitle) => {
  const selectValue = (state) => state.counter.value;

  const titleText = "Заголовок счётчика. Активных кликов:";
  const titleCount = selectValue(store.getState());

  contentTitle.innerHTML = `${titleText} ${titleCount}`;
};
