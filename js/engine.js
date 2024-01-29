import { acordeon } from "./acordeon.js";
import { stars } from "./createStars.js";
import { rocketRange } from "./rocketRange.js";
import { state } from "./state.js";

const sidebarPadding = `${window.innerHeight / 2}px 0`;
state.view.sibebar.style.padding = sidebarPadding;

state.view.takeOff.addEventListener("click", init);
state.view.start.addEventListener("click", () => {
  state.view.startModal.style.display = "none";
});

function init() {
  if (!state.view.answer.value)
    return alert(
      "Selecione um número entre 600 e 4000 para estimar a altitude que o foguete alcançará."
    );

  state.view.action.style.display = "none";
  state.view.rocket.classList.remove("active");
  stars();
  rocketRange();
}

acordeon();
