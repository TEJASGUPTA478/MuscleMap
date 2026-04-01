const API_URL = "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json";
const IMG_BASE_URL = "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/";

// HTML Elements
const exerciseGrid = document.getElementById('exercise-grid');
const loader = document.getElementById('loader');
const noResults = document.getElementById('no-results');
const categoryFilters = document.getElementById('category-filters');
const equipmentFilters = document.getElementById('equipment-filters');

let exercisesData = [];

// Static Filter lists
const categories = ["Abs", "Arms", "Back", "Calves", "Cardio", "Chest", "Legs", "Shoulders"];
const equipmentList = ["Barbell", "Bench", "Dumbbell", "Gym mat", "Incline bench", "Kettlebell", "Pull up bar", "Resistance band", "SZ bar", "Swiss ball"];

// 1. Fetch data from the API using the simplest .then() syntax
function fetchExercises() {
  fetch(API_URL)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Network error");
      }
      return response.json();
    })
    .then(function (data) {
      exercisesData = data;

      // Hide loader and show grid
      loader.classList.add('hidden');
      exerciseGrid.classList.remove('hidden');

      // Render data onto the screen
      renderExercises(exercisesData);
    })
    .catch(function (error) {
      console.error("Error fetching exercises:", error);
      loader.innerHTML = '<p style="color:red">Failed to load exercises.</p>';
    });
}

// 2. Render sidebar toggles using easy array forEach
function renderSidebarFilters() {
  // Clear the containers first
  categoryFilters.innerHTML = "";
  equipmentFilters.innerHTML = "";

  categories.forEach(function (cat) {
    categoryFilters.innerHTML += `
      <label class="toggle-item">
        <input type="checkbox" class="toggle-checkbox" value="${cat.toLowerCase()}">
        <div class="toggle-switch"></div>
        <span>${cat}</span>
      </label>
    `;
  });

  equipmentList.forEach(function (eq) {
    equipmentFilters.innerHTML += `
      <label class="toggle-item">
        <input type="checkbox" class="toggle-checkbox" value="${eq.toLowerCase()}">
        <div class="toggle-switch"></div>
        <span>${eq}</span>
      </label>
    `;
  });
}

// 3. Render exercise cards matching the image
function renderExercises(exercises) {
  exerciseGrid.innerHTML = '';

  if (exercises.length === 0) {
    noResults.classList.remove('hidden');
    return;
  }

  noResults.classList.add('hidden');

  // Create HTML string variable
  let cardsHtml = '';

  // Use basic forEach (Higher Order Function) to loop through each exercise
  exercises.forEach(function (exercise) {
    // Basic if statments to check for missing info
    let muscleBadge = 'General';
    if (exercise.primaryMuscles && exercise.primaryMuscles.length > 0) {
      muscleBadge = exercise.primaryMuscles[0];
    }

    let eqStr = 'No equipment';
    if (exercise.equipment) {
      eqStr = exercise.equipment;
    }

    let imgUrl = 'placeholder.svg';
    if (exercise.images && exercise.images.length > 0) {
      imgUrl = IMG_BASE_URL + exercise.images[0];
    }

    // Add this card's HTML to the cardsHtml string using simple backticks
    cardsHtml += `
      <div class="card">
        <div class="card-image">
          <div class="badge">${muscleBadge}</div>
          <img src="${imgUrl}" alt="${exercise.name}" onerror="this.onerror=null; this.src='placeholder.svg';">
        </div>
        <div class="card-content">
          <div class="card-title">${exercise.name}</div>
          <div class="card-equipment">${eqStr}</div>
        </div>
      </div>
    `;
  });

  // Finally insert the large HTML string into the grid
  exerciseGrid.innerHTML = cardsHtml;
}

// Start the app when the file loads
renderSidebarFilters();
fetchExercises();
