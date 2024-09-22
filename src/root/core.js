import { counterComponent } from "../modules/counter/ui/counter";
import { DYNAMIC_MODULES } from "../utils/constants";

export function coreComponent() {
  console.log("core render");
  const element = document.createElement("div");

  render(element, DYNAMIC_MODULES.COUTNER_MODULE);

  return element;
}

function render(element, module) {
  switch (module) {
    case DYNAMIC_MODULES.COUTNER_MODULE:
      const counter = counterComponent();
      element.append(counter);
      break;

    case DYNAMIC_MODULES.GALLERY_MODULE:
      break;

    case DYNAMIC_MODULES.TODO_LIST_MODULE:
      const todoComponent = document.createElement("div");
      todoComponent.append("todo element");

      break;

    default:
      return;
  }
}
