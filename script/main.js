import { element } from "./element.mjs";
import { reloadPage, switchPage } from "./page.js";

element.enterBtn.addEventListener("click", () => {
  switchPage(element.enterBtn.dataset.target);
});
