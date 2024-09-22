import { store } from "../../../root/store";
import {
  counterDecrementButton,
  counterIncrementButton,
  counterResetButton,
} from "./action-ui";
import { counterTitle } from "./title-ui";

const selectValue = (state) => state.counter.value;

export function counterComponent() {
  const element = document.createElement("div");
  element.classList.add("counter-component");
  console.log("counter render");

  render(element);
  return element;
}

function render(element) {
  const counterComponent = document.createElement("div");
  counterComponent.classList.add("btns");
  const titleText = "Заголовок счётчика. Активных кликов:";

  const title = counterTitle(`${titleText} `);
  const btnIncrement = counterIncrementButton();
  const btnDecrement = counterDecrementButton();
  const btnReset = counterResetButton();

  const updateTitleLabel = () => {
    const titleCount = selectValue(store.getState());
    title.textContent = `${titleText} ${titleCount}`;
  };

  store.subscribe(() => updateTitleLabel());

  counterComponent.append(title, btnIncrement, btnDecrement, btnReset);
  return element.append(counterComponent);
}
