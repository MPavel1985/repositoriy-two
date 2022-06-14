const numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?", "");
// console.log(numberOfFilms);
// console.log(typeof (numberOfFilms));
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

console.log(personalMovieDB);