"use strict";

const num1 = 5; //оголошення зміних з типом number
const num2 = 15;

console.log(num1); //виведення на екран змінних тип number 
console.log(num2);

console.log (num1+num2); //1.1 додавання
console.log (num1-num2); //1.2 віднімання
console.log (num2-num1); //1.2 віднімання
console.log (num1*num2); //1.3 множення
console.log (num1/num2); //1.4 ділення
console.log (num2/num1); //1.4 ділення

//1.5 зведення в ступінь 
const num1Degree = num1**5;
console.log(num1Degree);

//1.6 квадратний корінь
const num2Square = num2 ** 0.5;
console.log(num2Square);

//2 Створення змінної довільного типу

const text = "56"; //перетворення типу string в тип number
console.log (typeof text);
const num3 = Number (text); 
console.log (typeof num3);
console.log (num3);

//перетворення типу number в тип string 
const num4 = 65; 
console.log (typeof num4);
const text4 = num4.toString();
console.log(num4.toString());
console.log (typeof text4);

//перетворення типу number в boolean
const num5 = 176; 
console.log (num5);
console.log (typeof num5);

const convert = Boolean(num5);
console.log(convert);
console.log (typeof convert);