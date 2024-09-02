"use strict";

// 1

function detonatorTimer(delay) {
  const intervalId = setInterval(() => {
    if (delay > 0) {
      console.log(delay);
      delay--;
    } else {
      console.log("BOOM!");
      clearInterval(intervalId);
    }
  }, 2000);
}
detonatorTimer(3);
// 3
// 2
// 1
// BOOM!

// 2

function detonatorTimer(delay) {
  function startTimer(current) {
    // функція для виклику та перевіряє на умову
    if (current > 0) {
      console.log(current);
      setTimeout(() => startTimer(current - 1), 2000);
    } else {
      console.log("BOOM!");
    }
  }
  startTimer(delay);
}
detonatorTimer(3);
// 3
// 2
// 1
// BOOM!

// 5

function someFunction(...args) {
  console.log("Результат функції:", ...args);
}

function slower(func, seconds) {
  return function (...args) {
    console.log("Chill out, you will get you result in 5 seconds");
    setTimeout(() => {
      func(...args);
    }, 5000);
  };
}

let slowedSomeFunction = slower(someFunction, 5);

slowedSomeFunction("This task is done!");

// 3

let me = {
  name: "Yuliia",
  residency: "Warsaw",
  gender: "female",
  age: 30,
  family: "husband and daughter",
  pets: "a cat",
  desires: "a dog",
  work: "motherhood, 24/7",
  hobby: "cycling",
  defaultMood: "sleepy",
  currentMood: "studying",
  introduce() {
    console.log(`My name is ${this.name} and I live in ${this.residency}`);
  },
  myFamily() {
    console.log(`I have ${this.family}`);
  },
  prognose() {
    console.log(`Next year I'm gonna be ${this.age + 1}`);
  },
  describeMyMood() {
    console.log(
      `Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`
    );
  },
  freeTime() {
    console.log(
      `In my free time I'm usually ${this.hobby}, sometimes ${this.currentMood}, but always I'm working ${this.work}`
    );
  },
  animalsInMyLife() {
    console.log(
      `I had a dog, but now I have ${this.pets}, and one day i will have ${this.desires}`
    );
  },
};

me.introduce();
me.myFamily();
me.prognose();
me.describeMyMood();
me.freeTime();
me.animalsInMyLife();

// 4

let securedSelfIntroduce = me.introduce.bind(me);
let securedSelfMyFamily = me.myFamily.bind(me);
let securedSelfPrognose = me.prognose.bind(me);
let securedSelfDescribeMyMood = me.describeMyMood.bind(me);
let securedSelfFreeTime = me.freeTime.bind(me);
let securedSelfAnimalsImMyLife = me.animalsInMyLife.bind(me);

setTimeout(securedSelfIntroduce, 1000);
setTimeout(securedSelfMyFamily, 2000);
setTimeout(securedSelfPrognose, 3000);
setTimeout(securedSelfDescribeMyMood, 4000);
setTimeout(securedSelfFreeTime, 5000);
setTimeout(securedSelfAnimalsImMyLife, 6000);
