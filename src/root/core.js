import { counterComponent } from "../modules/counter/ui/counter";
import { carouselList } from "../modules/gallery";
import { switchActions } from "../modules/switcher";
import { switchButton } from "../modules/switcher/ui/switch-button";
import { todoComponent } from "../modules/todo";
import { store } from "./store";

const showModule = (state) => state.switcher.activeModule;

export function coreComponent() {
  console.log("core render");
  const element = document.createElement("div");

  render(element, showModule(store.getState()));

  store.subscribe(() => {
    render(element, showModule(store.getState()));
  });

  return element;
}

function render(element, module) {
  // Очистка содержимого перед новым рендером
  element.textContent = "";

  const switcher = switchButton();
  element.append(switcher.counter, switcher.todo, switcher.gallery);

  switch (module) {
    case switchActions.SWITCH_COUNTER:
      const counter = counterComponent();
      element.append(counter);
      break;

    case switchActions.SWITCH_GALLERY:
      const gallery = carouselList();

      element.append(gallery);
      break;

    case switchActions.SWITCH_TODO:
      const component = todoComponent();

      element.append(component);
      break;

    default:
      return;
  }
}
