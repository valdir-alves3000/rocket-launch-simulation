import { state } from "./state.js";

export function stars() {
  for (let i = 0; i < state.values.countStars; i++) {
    const star = document.createElement("i");
    const width = Math.floor(Math.random() * window.innerWidth);
    const duration = Math.random() * 1;
    const height = Math.random() * 50;

    star.style.left = width + "px";
    star.style.width = "1px";
    star.style.height = height + "px";
    star.style.animationDuration = duration + "s";

    state.view.scene.appendChild(star);
  }
}
