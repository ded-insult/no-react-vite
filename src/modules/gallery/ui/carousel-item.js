export function carouselItem(item) {
  const element = document.createElement("div");
  const heading = document.createElement("h3");
  const content = document.createElement("p");

  heading.append(item.heading);
  content.append(item.body);

  element.append(heading, content);
  return element;
}

function render() {}
