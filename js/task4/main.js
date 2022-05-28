//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function square(a,b) {
// let result1 = a * b;
// return result1;
// }
// let answer = square(10,20);
// console.log(answer);

//- створити функцію яка обчислює та повертає площу кола з радіусом r
// function square(r) {
//     const PI = 3.14;
//     let s= PI*r*r;
//     return s;
// }
// let answer = square(12);
// console.log(answer);

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function square(r,h) {
//     const PI = 3.14;
//     let s=2*PI*r*h;
//     return s;
// }
// let answer = square(11,22);
// console.log(answer);

// - створити функцію яка приймає масив та виводить кожен його елемент
// function iterator(array) {
//     for (const item of array) {
//         console.log(item);
//     }
// }
// let users = [
//     {id: 'vasya', name: 31, age: false},
//     {id: 'petya', name: 30, age: true},
//     {id: 'kolya', name: 29, age: true},
//     {id: 'olya', name: 28, age: false},
// ];
// iterator(users);

// //- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function par(text){
//     document.write(`<p>${text}</p>`)
// }
// par('Hello');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function textul(text){
//
//     document.write('<ul>');
//
//         for (let i = 0; i < 3; i++) {
//             document.write(`<li>${text}</li>`)}
//
//             document.write('</ul>');
//
//         }
//
//         textul('Hello okten');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function liElem(text,num){
//     document.write(`<ul>`)
//     for (let i=0;i<num;i++){
//         document.write(`<li>${text}</li>`)
//     }
//         document.write(`</ul>`)
// }
// liElem('Hello',3);

// //- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array=[1,2,'hello',true];
// function data(arr){
//     document.write(`<ul>`)
//     for (const item of arr) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
// data(array);

// //- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arr = [
//     {
//         id:1,
//         name:'Vasa',
//         age : 22
//     },
//     {
//         id:2,
//         name:'Marusa',
//         age : 20
//     }
// ]
// function obj(array){
//     for (const item of array) {
//         document.write(`<div>${item.id} ${item.name} ${item.age} </div>`)
//     }
// }
// obj(arr);

// // - створити функцію яка повертає найменьше число з масиву
// let arr = [0,2,3,20,-5]
// function minNum(array){
//     let min=array[0];
//     for (const item of array) {
//         if (item<min){
//             min = item
//         }
//     }
//     return min;
// }
//
// console.log(minNum(arr));

// //- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let arr=[1,2,3];
// function foo(array){
//     let sum=0;
//     for (const item of array) {
//         sum += item;
//     }
//     return sum;
// }
//
// console.log(foo(arr));