import { state } from "./state.js";

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

export function rocketRange() {
  // state.values.rocketRange = getRandom(600, 4000);
  state.view.sibebar.innerHTML = "";
  for (let i = 0; i < state.values.rocketRange; i += 100)
    state.view.sibebar.appendChild(createHeightLevel(i));

  const finalStep = createHeightLevel(state.values.rocketRange.toFixed(0));
  finalStep.style.color = "#007bff";
  finalStep.style.fontWeight = "bold";
  finalStep.style.fontSize = "2rem";
  state.view.sibebar.appendChild(finalStep);

  animateSibebar();
}

function createHeightLevel(level) {
  const span = document.createElement("span");
  span.textContent = level;

  return span;
}

function animateSibebar() {
  const time = setInterval(() => {
    updateSidebar();
    state.values.range++;
    document.querySelector("#altitude").textContent =
      (state.values.range / 2.2).toFixed(0) + " Km";
    if (state.values.range >= state.values.rocketRange * 2.2) {
      clearInterval(time);
      finalStep();
    }
  }, 5);
}

function updateSidebar() {
  state.view.sibebar.style.bottom = -state.values.range + "px";
}

function finalStep() {
  state.view.rocket.classList.add("active");
  const stars = document.querySelectorAll(".scene i");

  stars.forEach((star) => {
    star.style.animationDuration = getRandom(5, 10) + "s";
    star.style.height = getRandom(1, 40) + "px";
  });
  updateFinalStepModal();
  state.view.finalStepModal.classList.add("visible");
}

function updateFinalStepModal() {
  const rocketAltitude = document.querySelector("#rocketAltitude");
  const userEstimation = document.querySelector("#userEstimation");

  rocketAltitude.textContent = state.values.rocketRange;
  userEstimation.textContent = state.view.answer.value;
  checkResult();
}

function checkResult() {
  const resultMessage = document.querySelector("#resultMessage");
  let message =
    "Você brilhou de forma espetacular! Seu palpite foi uma façanha, prevendo com maestria o alcance da nave. Você é um verdadeiro astronauta destemido e visionário.<br/><br/> <strong>Parabéns pela sua conquista cósmica!</strong>";

  if (state.values.rocketRange === Number(state.view.answer.value)) {
    resultMessage.innerHTML = message;
  }
}
