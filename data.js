const API_URL = "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json";
const IMG_BASE_URL = "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/";

let allExercises = [];

function fetchExercises() {
  fetch(API_URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(exerciseData) {
      allExercises = exerciseData;
      initApp();
    })
    .catch(function(error) {
      console.log(error);
    });
}
