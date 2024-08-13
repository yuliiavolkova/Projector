"use strict";

// 1 Повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку

const userNames1 = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
//console.log(userNames);

userNames1.sort(); // сортування елементів масиву по алфавіту
console.log(userNames1); 

const arrayTypeString = []; // створюю окремий масив типу string для кожного ПІП
const result = userNames1.map ((currentUserName) => { 
   //console.log(currentUserName);
   const splits = currentUserName.split(" "); // розбиття рядку на масиви окремо для прізвища, ім'я і по-батькові
   //console.log(splits);
    let initials = splits.map((item) => item[0]); // створюю новий масив через map, в який записую елемент з індексом 0 
    //console.log (initials.join('.')); // додаю до записаного елемента крапку через join
   return initials.join('.');
});
console.log(result); 

// 2 Задача на фільтрування масиву

const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
const vowelLetters = ['А', 'Е', 'О', 'У', 'І', 'Я', 'Ї', 'И', 'Ю' ];

//через вбудований метод масивів
const filteredNames = userNames.filter((currentName) => {
    const firstLetter = currentName.charAt(0); 
    //console.log (firstLetter);
    return vowelLetters.includes(firstLetter);
})
console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

/*
// через умовну конструкцію
const filteredNames = []; //створення пустого масиву в якій потім запишуться імена

for (let i = 0; i < userNames.length; i++ ) {
    const currentName = userNames[i];
    //console.log(currentName);

    const firstLetter = currentName.charAt(0);
    if (vowelLetters.includes(firstLetter)) {
        filteredNames.push(currentName);
    }  
}
console.log (filteredNames); 
*/

// 3 Задача на розворот числа

const currentMaxValue = 4589;
//console.log (typeof currentMaxValue);

const convertedToString = currentMaxValue.toString(); //переведення тип number у string
console.log (typeof convertedToString);

const reverseMaxValue = convertedToString.split (''); // створила масив із чисел з типом string
console.log (reverseMaxValue);
reverseMaxValue.reverse(); 
console.log (reverseMaxValue);

const reversedToNumber = reverseMaxValue.join(''); // об'єднання масиву у рядок
console.log (reversedToNumber); 

const reversedNumber = parseInt (reversedToNumber, 10); // перетворення рядка у число
console.log(reversedNumber); 
console.log (typeof reversedNumber);

// 4 Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності

const resultsArray = [1, 2, [3, [4]]];
console.log(resultsArray);

let productOfArray = resultsArray.flat(Infinity);
console.log(productOfArray);

const result1 = productOfArray.reduce (function(acc, currentValue) {
return acc * currentValue;
})
console.log (result1);
