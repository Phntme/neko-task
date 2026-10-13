import { element } from "./element.js";

// function buat pindah page
function switchPage(target) {
  element.page.forEach((p) => {
    p.classList.add("hidden");
  });

  console.log(target);
  const page = document.getElementById(target);
  page.classList.remove("hidden");
}

export { reloadPage, switchPage };
