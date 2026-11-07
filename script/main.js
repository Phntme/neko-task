import { element } from "./element.js";
import { switchPage } from "./page.js";

element.enterBtn.addEventListener("click", () => {
  console.log("hello world")
  switchPage(element.enterBtn.dataset.target);
});
