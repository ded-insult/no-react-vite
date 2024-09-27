import { carouselItem } from "./carousel-item";
import { _galleryConfig, galleryData } from "../constants";
import { slideLeft, slideRight } from "./action";

let ref;

export function carouselList() {
  let config = _galleryConfig;
  if (!ref) {
    const ref = document.createElement("div");

    render(ref, config);
    return ref;
  }
}

function render(element, config) {
  element.innerHTML = "";
  const left = slideLeft();
  const right = slideRight();

  const borders = {
    left: 0,
    right: config.settings.slidesToShow - 1,
  };

  showGallery({ borders, element, left, right });
  goRight(right, { borders, element, left, rightBtn: right });
  goLeft(left, {
    borders,
    element,
    leftBtn: left,
    right,
  });

  showGallery({ borders, element, left, right });

  element.append(left, right);
}

function showGallery({ borders, element, left, right }) {
  element.innerHTML = "";

  const galleryElements = galleryData
    .slice(borders.left, borders.right)
    .map((galleryItem) => carouselItem(galleryItem));

  galleryElements.forEach((item) => {
    element.append(item, left, right);
  });
}

function goLeft(left, { borders, element, leftBtn, right }) {
  left.addEventListener("click", () => {
    if (borders.left !== 0) {
      borders.left--;
      borders.right--;
    }

    showGallery({ borders, element, left: leftBtn, right });
  });
}
function goRight(right, { borders, element, left, rightBtn }) {
  right.addEventListener("click", () => {
    if (borders.right !== galleryData.length) {
      borders.left++;
      borders.right++;
    }

    showGallery({ borders, element, left, right: rightBtn });
  });
}
