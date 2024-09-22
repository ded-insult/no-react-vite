/**
 *
 * @param {string} title заголовок для счетчика
 * @returns
 */
export function counterTitle(title) {
  const element = document.createElement("h1");
  element.classList.add("counter-title");

  render(element, title);

  return element;
}

function render(element, count) {
  return element.append(count);
}
