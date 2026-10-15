import { offset } from "./circle.mjs";
import { element } from "./element.mjs";
import { switchPage } from "./page.mjs";

// only homepage branch, this code will automatically open homepage menu
switchPage(element.enterBtn.dataset.target);

element.enterBtn.addEventListener("click", () => {
  switchPage(element.enterBtn.dataset.target);
});

const xpBar = element.expBar;
console.log(xpBar);
xpBar.style.strokeDashoffset = offset;
