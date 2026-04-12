function renderSidebarFilters() {
  let categoryList = allExercises
    .map(function (exercise) {
      return exercise.primaryMuscles && exercise.primaryMuscles.length > 0 ? exercise.primaryMuscles[0].toLowerCase() : null;
    })
    .filter(function (category, index, self) {
      return category !== null && self.indexOf(category) === index;
    })
    .sort();

  let equipmentList = allExercises
    .map(function (exercise) {
      return exercise.equipment ? exercise.equipment.toLowerCase() : null;
    })
    .filter(function (equipment, index, self) {
      return equipment !== null && self.indexOf(equipment) === index;
    })
    .sort();

  let categoryHtmlString = "";
  categoryList.forEach(function (category) {
    let display = category.charAt(0).toUpperCase() + category.slice(1);
    categoryHtmlString += '<label style="display:block; margin-bottom:5px;"><input type="checkbox" class="category-checkbox" value="' + category + '"> ' + display + '</label>';
  });
  document.getElementById('category-filters').innerHTML = categoryHtmlString;

  let equipmentHtmlString = "";
  equipmentList.forEach(function (equipment) {
    let display = equipment.charAt(0).toUpperCase() + equipment.slice(1);
    equipmentHtmlString += '<label style="display:block; margin-bottom:5px;"><input type="checkbox" class="equipment-checkbox" value="' + equipment + '"> ' + display + '</label>';
  });
  document.getElementById('equipment-filters').innerHTML = equipmentHtmlString;
}

function renderExercises(exerciseArray) {
  let gridElement = document.getElementById('exercise-grid');
  gridElement.innerHTML = "";

  if (exerciseArray.length === 0) {
    document.getElementById('no-results').classList.remove('hidden');
    return;
  }

  document.getElementById('no-results').classList.add('hidden');

  let cardsHtmlString = "";
  exerciseArray.forEach(function (exercise) {
    let muscleGroup = "General";
    if (exercise.primaryMuscles && exercise.primaryMuscles.length > 0) {
      muscleGroup = exercise.primaryMuscles[0];
    }

    let equipmentUsed = "None";
    if (exercise.equipment) {
      equipmentUsed = exercise.equipment;
    }

    let imageUrl = "placeholder.svg";
    if (exercise.images && exercise.images.length > 0) {
      imageUrl = IMG_BASE_URL + exercise.images[0];
    }

    cardsHtmlString += `
      <div class="card">
        <div class="card-image">
          <div class="badge">${muscleGroup}</div>
          <img src="${imageUrl}" alt="exercise">
        </div>
        <div class="card-content">
          <h3 class="card-title">${exercise.name}</h3>
          <p class="card-equipment">Equipment: ${equipmentUsed}</p>
        </div>
      </div>
    `;
  });

  gridElement.innerHTML = cardsHtmlString;
}
