/**
 * @param {string} content text content inside of button
 *
 */
export function button(content = "кнопка") {
  const element = document.createElement("button");

  render(element, content);

  return element;
}

function render(element, content) {
  return element.append(content);
}
