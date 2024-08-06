"use strict";

// 2 задача про ітерацію

function iterativeOddSumTo(number) {
   let result = 0;

    for (let i = 0; i <= number; i++) {
       if (i % 2 !== 0) {   //перевірка на непарність
        //console.log (i); 
        result = result + i; // сумування непарних чисел
       }
    }
    return result; 
};

console.log (iterativeOddSumTo(10));

// 1 задача про рекурсію


