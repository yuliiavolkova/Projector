"use strict";

// для елементу з текстом 'Навігація по DOM дереву'

const navigationHeader = document.getElementById("headerTwo");
console.log(navigationHeader);

// для першого елементу <section>

const firstElementSection = document.querySelector("section");
console.log(firstElementSection);

// для елементу списку з текстом 'Пункт 5'

const listItems = Array.from(document.querySelectorAll("ul li")); // вибрало всі пунки і записало в новостворений масив
const listItem = listItems.find((item) => item.textContent === "Пункт 5");
console.log(listItem);

// для елементу з класом 'hatredLevelBlock'

const hatredLevelBlock = document.getElementsByClassName("hatredLevelBlock")[0]; // не можу використати querySelector, а треба лише перший елемент
console.log(hatredLevelBlock);
