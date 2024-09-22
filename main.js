import { coreComponent } from "./src/root/core";
import "./style.css";

const rootElement = document.getElementById("app");
const rootComponent = coreComponent();
rootElement.append(rootComponent);
