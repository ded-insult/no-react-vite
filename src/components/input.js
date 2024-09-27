export function textfield(content) {
  const element = document.createElement("input");

  render(element, content);

  return element;
}

function render(element, content) {
  element.placeholder = content;
}
