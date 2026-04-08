function renderSidebarFilters() {
  let categoryList = ["Abs", "Arms", "Back", "Calves", "Cardio", "Chest", "Legs", "Shoulders"];
  let equipmentList = ["Barbell", "Bench", "Dumbbell", "Gym mat", "Incline bench", "Kettlebell", "Pull up bar", "Resistance band", "SZ bar", "Swiss ball"];
  
  let categoryHtmlString = "";
  categoryList.forEach(function(category) {
    categoryHtmlString += '<label style="display:block; margin-bottom:5px;"><input type="checkbox" class="category-checkbox" value="' + category.toLowerCase() + '"> ' + category + '</label>';
  });
  document.getElementById('category-filters').innerHTML = categoryHtmlString;
  
  let equipmentHtmlString = "";
  equipmentList.forEach(function(equipment) {
    equipmentHtmlString += '<label style="display:block; margin-bottom:5px;"><input type="checkbox" class="equipment-checkbox" value="' + equipment.toLowerCase() + '"> ' + equipment + '</label>';
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
  exerciseArray.forEach(function(exercise) {
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
