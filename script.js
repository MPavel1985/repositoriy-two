const numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// console.log(personalMovieDB);

const a = prompt("Один из последних просмотренных фильмов?", "");
const b = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;

if (numberOfFilms === "25") {
    alert("Иди на хуй!");
} else if (b === "5") {
    alert("Иди на хуй!");
} else {
    console.log(personalMovieDB);
};

