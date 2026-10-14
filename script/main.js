import { element } from "./element.mjs";
import { switchPage } from "./page.mjs";

switchPage(element.loginMenu.dataset.target);

element.enterBtn.addEventListener("click", () => {
  switchPage(element.enterBtn.dataset.target);
});
