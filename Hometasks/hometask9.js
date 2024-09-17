"use strict";

const buttonOff = document.getElementById("button-Turnoff");
const timeFormat = document.getElementById("timeFormat");

let state = localStorage.getItem("state");
let lastSwitchTime = localStorage.getItem("lastSwitchTime"); // Зберігає останній час при переключені
renderContent();

buttonOff.addEventListener("click", function () {
  lastSwitchTime = getCurrentTime(); // оновлення часу при натискані кнопки
  state = state === "turnOn" ? "turnOff" : "turnOn";
  localStorage.setItem("lastSwitchTime", lastSwitchTime);
  localStorage.setItem("state", state);
  renderContent();
});

function renderContent() {
  const isTurnedOnState = state === "turnOn";

  if (isTurnedOnState) {
    document.body.style.backgroundColor = "#333"; // Темний фон
    buttonOff.textContent = "Turn on"; // Зміна на кнопки на Turn on
    if (lastSwitchTime) {
      timeFormat.textContent = `Last turn off: ${lastSwitchTime}`;
    }
    timeFormat.style.display = "block";
  } else {
    document.body.style.backgroundColor = "#f0f0f0"; // Світлий фон
    buttonOff.textContent = "Turn off"; // Зміна на кнопки на Turn off

    if (lastSwitchTime) {
      timeFormat.textContent = `Last turn on: ${lastSwitchTime}`;
    }
    timeFormat.style.display = "block";
  }
}

function getCurrentTime() {
  const now = new Date();

  return now.toLocaleString();
}
