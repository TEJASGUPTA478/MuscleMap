let currentPage = 1;
const itemsPerPage = 12;

function applyFiltersAndSort(resetPage = true) {
  if (resetPage !== false) {
    currentPage = 1;
  }
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

  let totalItems = filteredExercises.length;
  let totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  let paginatedExercises = filteredExercises.slice(startIndex, endIndex);

  renderExercises(paginatedExercises);
  renderPaginationControls(totalPages);
}

function renderPaginationControls(totalPages) {
  let paginationEl = document.getElementById('pagination-controls');
  let prevBtn = document.getElementById('prevBtn');
  let nextBtn = document.getElementById('nextBtn');
  let pageInfo = document.getElementById('pageInfo');

  if (totalPages <= 1) {
    paginationEl.classList.add('hidden');
  } else {
    paginationEl.classList.remove('hidden');
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    
    if (currentPage === 1) {
      prevBtn.disabled = true;
      prevBtn.style.opacity = '0.5';
      prevBtn.style.cursor = 'not-allowed';
    } else {
      prevBtn.disabled = false;
      prevBtn.style.opacity = '1';
      prevBtn.style.cursor = 'pointer';
    }

    if (currentPage >= totalPages) {
      nextBtn.disabled = true;
      nextBtn.style.opacity = '0.5';
      nextBtn.style.cursor = 'not-allowed';
    } else {
      nextBtn.disabled = false;
      nextBtn.style.opacity = '1';
      nextBtn.style.cursor = 'pointer';
    }
  }
}

function changePage(delta) {
  currentPage += delta;
  applyFiltersAndSort(false);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleTheme() {
  let pageBody = document.body;
  if (pageBody.classList.contains('dark-mode')) {
    pageBody.classList.remove('dark-mode');
  } else {
    pageBody.classList.add('dark-mode');
  }
}
