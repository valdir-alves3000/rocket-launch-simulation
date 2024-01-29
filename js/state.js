export const state = {
  view: {
    sibebar: document.querySelector(".sidebar"),
    takeOff: document.querySelector("#takeOff"),
    scene: document.querySelector(".scene"),
    action: document.querySelector(".action"),
    rocket: document.querySelector(".rocket"),
    answer: document.querySelector(".action input"),
    startModal: document.querySelector("#start-modal"),
    start: document.querySelector("#start"),
    finalStepModal: document.querySelector("#final-step-modal"),
  },
  values: {
    countStars: 50,
    rocketRange: 748,
    range: 0,
  },
};
