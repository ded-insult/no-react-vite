import { counterComponent } from "../modules/counter/ui/counter";
import { switchActions } from "../modules/switcher";
import { switchButton } from "../modules/switcher/ui/switch-button";
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
      const galleryComp = document.createElement("div");
      galleryComp.append("gallery element");

      element.append(galleryComp);
      break;

    case switchActions.SWITCH_TODO:
      const todoComponent = document.createElement("div");
      todoComponent.append("todo element");

      element.append(todoComponent);
      break;

    default:
      return;
  }
}
