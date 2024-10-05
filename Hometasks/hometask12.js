"use strict";

// 1 завдання
console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");
/*
1. Виводить в консоль 'start'
2. Створення промісу, який виведе відразу в консоль 1. Потім викликається resolve(2), але результат не виводить в консоль, 
бо не ще викликається then.
});
3. promise1.then - так як код всередині then виконується асинхронно, то спочатку JS закінчить послідовний код, 
а потім дойде до then, по черзі.
4. console.log("end"); - Так як ця стрічка коду синхронна є, тому далі виведе в консоль end.
5. Вже після попередньої команди дійшла черга до виконання асинхронного коду, тому в консолі виведе 2.
 
start
1
end
2
*/

// 2 завдання
Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => {
    throw new Error("My Error");
  })
  .catch(() => 1)
  .then((x) => x + 1)
  .then((x) => console.log(x))
  .catch(console.error);

/*
Promise.resolve(1) - створює проміс, що повертає 1. 
 .then((x) => x + 1) - замість x прийшла 1, тому отримаємо 2.
 .then((x) => { - прийшло значення 2 з попередньої ітерації, 
 але через throw new Error("My Error") проміс буде rejected і тому далі не
 будуть передаватися значення через then
 .catch(() => 1) - тепер спрацьовує catch, повертає 1 і це значення йде 
 в наступний then
.then((x) => x + 1) - - повертає 2.
.then((x) => console.log(x)) - в консоль виведе 2, значення що прийшло 
з попередньої строчки
.catch(console.error); - не виконається, бо не було помилок, тому цей не спрацює.
*/

// 3 завдання
const promise = new Promise((res) => res(2));
promise
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .finally((v) => {
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    console.log(v);
  });

/*
const promise = new Promise((res) => res(2)); - створення промісу з результатом 2
.then((v) => { - виводиться значення 2
    console.log(v); - виводимо 2 в консолі 
    return v * 2; - повертаємо нове значення 4 і 4 передається далі
.then((v) => { - передається 4
    console.log(v); - в консоль виводиться 4
    return v * 2; - повертає 8 і 8 передається далі
.finally((v) => { - finally не отримує попереднє then, бо так працює метод цей, він 
не отримує значення з попереднього ланцюга промісів.
    console.log(v); - тому тут буде undefined, бо немає нічого у finally
    return v * 2; - тут ігнорується і код йде далі
 .then((v) => { - тут прийшло 8 з попереднього then
    console.log(v); - 8 виводитьсґ у консолі

2
4
undefined
8
  */
