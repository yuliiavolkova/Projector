"use strict";

// 1 завдання

for ( let i = 1; i < 100; i ++) {

    if (i % 3 == 0 && i % 5 == 0) { //перевіряю умову чи є число кратне 3 і 5
        console.log ("LOLKEK"); 
    } else if (i % 3 == 0 ) { //перевіряю умову чи є число кратне 3 
        console.log ("LOL"); 
    } else if (i % 5 == 0) { //перевіряю умову чи є число кратне 5
        console.log ("KEK"); 
    } else  // виводить на екран всі інші числа, які не підходить умовам вище
    console.log (i);

} 


// 2 завдання

const value = 10;

//використовуючи цикл for
for ( let i = 1; i < value; i ++) { 
    if (i % 2 === 0) {
    console.log (i);
    }
}


//використовуючи цикл while
/*
let i = 1;
while (i < value ) {
    if (i % 2 === 0) {
    console.log (i);
    }
    i++;
}
*/

// перевірка чи значення змінної є числом.

if (typeof value === "number") {
    console.log ("Це тип number!");
} else 
    console.log ("Таке чуство шо бог десь наказує нас за  щось!"); 