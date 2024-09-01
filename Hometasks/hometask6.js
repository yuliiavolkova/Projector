"use strict";

// 1

function addThemAll(...args) {
  const array = Array.from(args);
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(addThemAll(2, 4)); // 6
console.log(addThemAll(1, 2, 3, 4)); // 10
console.log(addThemAll(5, 5, 10)); // 20

// 2

function multiply(a) {
  return function (b) {
    return a * b;
  };
}

console.log(multiply(5)(5)); // 25
console.log(multiply(2)(-2)); // -4
console.log(multiply(4)(3)); // 12

// 3

const movies = [
  {
    movieName: "The Thing",
    releaseYear: 1982,
    directedBy: "Carpenter",
    runningTimeInMinutes: 109,
  },
  {
    movieName: "Aliens",
    releaseYear: 1986,
    directedBy: "Cameron",
    runningTimeInMinutes: 137,
  },
  {
    movieName: "Men in Black",
    releaseYear: 1997,
    directedBy: "Sonnenfeld",
    runningTimeInMinutes: 98,
  },
  {
    movieName: "Predator",
    releaseYear: 1987,
    directedBy: "McTiernan",
    runningTimeInMinutes: 107,
  },
];

function byProperty(key, direction) {
  return function (a, b) {
    const propA = typeof a[key] === "string" ? a[key].toLowerCase() : a[key];
    const propB = typeof b[key] === "string" ? b[key].toLowerCase() : b[key];

    if (direction === "<") {
      return propA > propB ? -1 : propA < propB ? 1 : 0;
    } else if (direction === ">") {
      return propA < propB ? -1 : propA > propB ? 1 : 0;
    }
  };
}

console.log(movies.sort(byProperty("releaseYear", ">")));
// виведе масив фільмів посортованих по року випуску, від старішого до новішого
console.log(movies.sort(byProperty("runningTimeInMinutes", "<")));
// виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
console.log(movies.sort(byProperty("movieName", ">")));
// виведе масив фільмів посортованих по назві, в алфавітному порядку

// 4

const userNames = [
  "Петро",
  "Емма",
  "Петро",
  "Емма",
  "Марта",
  "Яна",
  "Василь",
  "Антон",
  "Олена",
  "Емма",
];

function filterUnique(array) {
  return [...new Set(array)];
}

console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
