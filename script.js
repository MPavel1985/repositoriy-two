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
