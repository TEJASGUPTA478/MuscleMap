function applyFiltersAndSort() {
  let searchWord = document.getElementById('searchInput').value.toLowerCase();

  let selectedCategories = Array.from(document.querySelectorAll('.category-checkbox:checked')).map(function (categoryCheckbox) {
    return categoryCheckbox.value;
  });

  let selectedEquipmentList = Array.from(document.querySelectorAll('.equipment-checkbox:checked')).map(function (equipmentCheckbox) {
    return equipmentCheckbox.value;
  });

  let sortValue = document.getElementById('sortSelect').value;

  let filteredExercises = allExercises.filter(function (exercise) {
    let matchesSearch = exercise.name.toLowerCase().includes(searchWord);

    let matchesCategory = true;
    if (selectedCategories.length > 0) {
      if (exercise.primaryMuscles && exercise.primaryMuscles.length > 0) {
        matchesCategory = selectedCategories.includes(exercise.primaryMuscles[0].toLowerCase());
      } else {
        matchesCategory = false;
      }
    }

    let matchesEquipment = true;
    if (selectedEquipmentList.length > 0) {
      if (exercise.equipment) {
        matchesEquipment = selectedEquipmentList.includes(exercise.equipment.toLowerCase());
      } else {
        matchesEquipment = false;
      }
    }

    return matchesSearch && matchesCategory && matchesEquipment;
  });

  if (sortValue === "asc") {
    filteredExercises.sort(function (exerciseA, exerciseB) {
      if (exerciseA.name.toLowerCase() < exerciseB.name.toLowerCase()) return -1;
      if (exerciseA.name.toLowerCase() > exerciseB.name.toLowerCase()) return 1;
      return 0;
    });
  } else if (sortValue === "desc") {
    filteredExercises.sort(function (exerciseA, exerciseB) {
      if (exerciseA.name.toLowerCase() > exerciseB.name.toLowerCase()) return -1;
      if (exerciseA.name.toLowerCase() < exerciseB.name.toLowerCase()) return 1;
      return 0;
    });
  }

  renderExercises(filteredExercises);
}

function toggleTheme() {
  let pageBody = document.body;
  if (pageBody.classList.contains('dark-mode')) {
    pageBody.classList.remove('dark-mode');
  } else {
    pageBody.classList.add('dark-mode');
  }
}
