import { offset } from "./circle.mjs";
import { element } from "./element.mjs";
import { switchPage } from "./page.mjs";

// only homepage branch, this code will automatically open homepage menu
switchPage(element.enterBtn.dataset.target);

element.enterBtn.addEventListener("click", () => {
  console.log("hello world");
  switchPage(element.enterBtn.dataset.target);
});

// circular exp bar
element.expBar.style.strokeDashoffset = offset;
