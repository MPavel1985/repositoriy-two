'use strict';
// const numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// // console.log(personalMovieDB);

// const a = prompt("Один из последних просмотренных фильмов?", "");
// const b = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;

// if (numberOfFilms === "25") {
//     alert("Иди на хуй!");
// } else if (b === "5") {
//     alert("Иди на хуй!");
// } else {
//     console.log(personalMovieDB);
// };

/*
Калькулятор
*/
// for (let i = 1; i < 10; i++) {
//     const a = +prompt("Введи число А", "");
//         if (a !== true) {
//             alert("В жопу!");
//             a = +prompt("Введи число А", "")
//         }
//     const b = +prompt("Введи число Б", "");
//     let sum;
//     sum = a + b;
//     let c = confirm(sum);
//     if (c === false) {
//         alert("В жопу!");
//     } else {
//         alert("Попробуй еще!");
//     }
// }

// let a = 5;
// for (let i = 1; i < 7; i++) {
//     console.log(a);
//     a++
// }

/*
Звездочка
*/
// let a = ``;
// const b = 7;
// for (i = 1; i <= b; i++) {
//     for (j = 0; j < i; j++) {
//         a += "*";
//     }
//     a += `\n`;
// }
// console.log(a);

/*
Вложенный цикл (цикл в цикле)
*/
// first: for (let i = 0; i < 6; i++) {
//     console.log(`Первый ряд: ${i}`);
//     for (let j = 0; j < 5; j++) {
//         console.log(`Второй ряд: ${j}`);
//         for (let k = 0; k < 5; k++) {
//             console.log(`Третий ряд: ${k}`)
//             if (k === 3) continue first;
//         }
//     }
// }

// let a = document.querySelector("input");
// let b = document.querySelector("button");
// b.onclick = function() {
//     console.log("Works!");
//     let c = a.value;
//     console.log(c);
//     a.value = "";
// }

// let c = document.querySelector(".text-in-start");
// c.innerHTML = "dfsfsdfsfd";

// let firstNumber = document.querySelector(".text-in-start");
// firstNumber.innerHTML = "Введіть перше число";

// value
// onclick
// let a = document.querySelector("input");
// let b = document.querySelector("button");
// b.onclick = function () {
//     let c = a.value;
//     console.log(c);
//     a.value = "";
// }

// oninput
// let a = document.querySelector("button");
// let b = document.querySelector("input");
// let c = document.querySelector(".value");
// b.oninput = () => {
//     console.log(b.value);
//     document.querySelector(".value").innerHTML = b.value;
// }
// a.onclick = () => {
//     c.innerHTML = "10";
//     b.value = "10";
//     console.log("stop");
// }

// // вибрати найбільше значення з масиву
// let arr = [12, 13, 54, 67, 45, 3, 46, 7, 89, 54, 6, 99];
// let b = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > b) {
//         b = arr[i];
//     }
// }
// let a = document.querySelector(".text-in-start");
// a.innerHTML = b;

// // додавання всіх елементів
// let arr = [12, 13, 54, 67, 45, 3, 46, 7, 89, 54, 6, 99,1];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }
// console.log(sum);

// //поміняти місцями значення масиву та додати нове
// let arr = [12, 13, 54, 67, 45, 3, 46, 7, 89, 54, 6, 99, 1];
// arr[13] = 50;
// let a = arr[0];
// arr[0] = arr[13];
// arr[13] = a;
// console.log(arr);

// // додати до масиву значення з input
// let arr = [];
// let a = document.querySelector("input");
// let b = document.querySelector("button");
// b.onclick = function () {
//     let c = a.value;
//     arr[arr.length] = c;
//     a.value = " ";
//     console.log(c);
//     console.log(arr);
// }

// // додати до масиву значення з input + push
// let arr = [];
// let a = document.querySelector("input");
// let b = document.querySelector("button");
// b.onclick = function () {
//     let c = a.value;
//     arr.push(c);
//     a.value = " ";
//     console.log(c);
//     console.log(arr);
// }

// let arr = [1, 0, 0, 0, 0];
// let a = document.querySelector(".text-in-start");
// let b = document.querySelector("button");
// a.innerHTML = arr;
// let i = 0;
// b.onclick = function () {
//     if (i < 4) {
//         arr[i] = 0;
//         arr[i + 1] = 1;
//         i++;
//     }
//     a.innerHTML = arr;
// }

// let arr = [1, 0, 0, 0, 0];
// let a = document.querySelector(".text-in-start");
// let b = document.querySelector("button");
// a.innerHTML = arr;
// let i = 0;
// b.onclick = function () {
//     if (i < 4) {
//         arr[i] = 0;
//         arr[i + 1] = 1;
//         i++;
//     }
//     a.innerHTML = arr;
// }

