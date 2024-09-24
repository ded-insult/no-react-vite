import { button } from "../../../components/button";
import { store } from "../../../root/store";
import { switchActions } from "../store";

const showModule = (state) => state.switcher.activeModule;

export function switchButton() {
  const counter = button("Смотреть счетчик");
  counter.classList.add("switcher");
  counter.dataset.switcher = switchActions.SWITCH_COUNTER;

  const todo = button("Смотреть список задач");
  todo.classList.add("switcher");
  todo.dataset.switcher = switchActions.SWITCH_TODO;

  const gallery = button("Смотреть список задач");
  gallery.classList.add("switcher");
  gallery.dataset.switcher = switchActions.SWITCH_GALLERY;

  render([counter, todo, gallery]);

  return { counter, todo, gallery };
}

function render(switchersList) {
  const updateSwitcherStatus = (module) => {
    // console.log("re", module.dataset.switcher);
    store.dispatch({
      type: module.dataset.switcher,
    });
  };

  switchersList.forEach((switcher) => {
    switcher.addEventListener("click", () => {
      return updateSwitcherStatus(switcher);
      // console.log(switcher.dataset.switcher, "fasfasfasf");
      // console.log(showModule(store.getState()), "fasfasfasf");
    });
  });

  // store.subscribe(() => updateSwitcherStatus(upd));
}
