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

for (let i = 1; i < 10; i++) {
    const a = +prompt("Введи число А", "");
        if (a !== true) {
            alert("В жопу!");
            a = +prompt("Введи число А", "")
        }
    const b = +prompt("Введи число Б", "");
    let sum;
    sum = a + b;
    let c = confirm(sum);
    if (c === false) {
        alert("В жопу!");
    } else {
        alert("Попробуй еще!");
    }
}