"use strict";

// 2 Задача про перетворення об'єкту

const priceData = {
  Apples: "23.4",
  BANANAS: "48",
  oRAngGEs: "48.7584",
};

function changeToLowerCase(data) {
  const newObject = {};

  for (let key of Object.keys(data)) {
    console.log(key);
    const valueByKey = data[key];
    console.log(valueByKey);
    newObject[key.toLowerCase()] = Number(valueByKey).toFixed(2);
  }
  return newObject;
}

let updatedPriceData = changeToLowerCase(priceData);
console.log(updatedPriceData); // {apples: '23.40', bananas: '48.00', oranges: '48.76'}

// 1 Задача про обчислення різниці часу

function calculateDifference(startDate, endDate) {
  console.log("Початкова дата", startDate);
  console.log("Кінцева дата", endDate);

  return endDate - startDate; // повертає часовий період між двoма датами
}

function formatDifference(
  startDate,
  endDate = new Date(),
  dimension = "seconds"
) {
  const dateDifference = calculateDifference(startDate, endDate);

  let amount = 0;
  switch (dimension) {
    case "seconds":
      amount = Math.floor(dateDifference / 1000);
      break;

    case "minutes":
      amount = Math.floor(dateDifference / 60000);
      break;

    case "hours":
      amount = Math.floor(dateDifference / 3600000);
      break;

    case "days":
      amount = Math.floor(dateDifference / 3600000 / 24);
      break;
  }
  return amount + dimension;
}

const startDate = new Date("2024-01-01");
const endDate = new Date();
const dimension = "days"; // Вибрати розмірність і вказати її у цій стрічці (days, hours. minutes, seconds)
const result = formatDifference(startDate, endDate, dimension);

console.log(result);
