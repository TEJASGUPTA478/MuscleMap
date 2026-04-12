function initApp() {
  document.getElementById('loader').classList.add('hidden');
  document.getElementById('exercise-grid').classList.remove('hidden');

  renderSidebarFilters();
  applyFiltersAndSort();

  document.getElementById('searchInput').addEventListener('input', applyFiltersAndSort);
  document.getElementById('sortSelect').addEventListener('change', applyFiltersAndSort);
  document.getElementById('sidebar').addEventListener('change', applyFiltersAndSort);
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  document.getElementById('prevBtn').addEventListener('click', function() {
    changePage(-1);
  });

  document.getElementById('nextBtn').addEventListener('click', function() {
    changePage(1);
  });
}

fetchExercises();
