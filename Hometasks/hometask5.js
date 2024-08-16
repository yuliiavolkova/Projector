"use strict";

// 2 Задача про перетворення об'єкту
/*
    const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
    };
    //console.log (priceData);

    function optimizer(data) {
        const newObject = {};

        for (let key of Object.keys (data)) {
            console.log (key);
        }
        for (let value of Object.values (data)) {
            console.log (value);
        }

    //     Object.keys(obj).forEach(key); //forEach запускаається на кожній ітерації, Object.keys(obj), щоб витягнути всі ключі 
    //     newObject [key.toLowerCase()] = obj[key];

        return newObject;
    };
    // console.log (newObject);
    
    

    let updatedPriceData = optimizer(priceData);
    console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'} */

// 1 Задача про обчислення різниці часу

function calculateDifference(startDate, endDate) {
  console.log("Початкова дата", startDate);
  console.log("Кінцева дата", endDate);

  return endDate - startDate; // повертає часовий період між двoма датами, згідно розмірності
}

function formatDifference(startDate, endDate, dimension) {
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
const dimension = "seconds";
const result = formatDifference(startDate, endDate, dimension);

console.log(result);
