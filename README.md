# MuscleMap - Exercise Database Web App


<!-- Project Overview -->
MuscleMap is a modern, responsive web application designed to help users discover and filter exercises based on categories and equipment. The goal of this project is to build an interactive frontend application featuring robust UI integration, active data fetching from public APIs, and complex logic handling using pure HTML, CSS, and Vanilla JavaScript.

<!-- Technologies Involved -->
* **HTML5**: For crafting the structural layout and semantic elements.
* **CSS3**: For advanced styling, implementing CSS Grid and Flexbox for responsiveness, custom toggles, component hover effects, and strict replication of design mock-ups without relying on external libraries like Tailwind or Bootstrap.
* **Vanilla JavaScript (ES6)**: For dynamic DOM manipulation, state management, and asynchronous operations (API interactions).

<!-- The API -->
This application dynamically fetches data from the open-source **Free Exercise DB API** dataset (`free-exercise-db`).
* **Endpoint Used:** `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json`
* **Data points integrated:** Exercise Name, Required Equipment, Primary Muscles, and accurate instructional Images.


<!-- Current Progress & Milestones Achieved -->

<!-- Milestone 1: Project Setup and Basic Structure -->
* Established the core project idea (A Comprehensive Gym Exercise Directory).
* Selected an appropriate public API for reliable and fast fetching.
* Created the repository structure and this comprehensive `README.md` file detailing the build plan.

<!--  Milestone 2: API Integration & UI Implementation -->
* **Dynamic Fetching**: Implemented basic JavaScript `fetch()` logic leveraging `.then()` and `.catch()` blocks to retrieve data dynamically.
* **Perfected UI Clone**: Hand-crafted CSS to accurately replicate the provided visual mock-up, including the top navigation bar, complex sidebar toggles, and CSS Grid layout for the exercise cards.
* **Authentication Pages**: Built standalone `login.html` and `signup.html` registration and login views utilizing a rigorously modular separate styling & logic scope (`auth.css`, `login.js`, `signup.js`). Hand-coded Vanilla JavaScript input verification specifically enforces `@` symbol validations for user inputs.
* **Loading States**: Developed an active visual loading spinner layout that effectively communicates to the user that API operations are in progress.
* **Responsive Design**: Designed Mobile-first breakpoints utilizing `@media` queries so the sidebar, search bar, and grid neatly wrap and adapt strictly across desktop, tablet, and mobile displays.


<!-- Milestone 3: Advanced Logic & Code Modularity -->
* **Search & Sorting**: Added dynamic frontend search using the `.filter()` array method to find exercises rapidly by name. Implemented dynamic A-Z and Z-A sorting utilizing the `.sort()` array function.
* **Code Modularity**: Refactored the monolithic script (`app.js`) into strict, logically separated modules: `data.js` (API and state), `ui.js` (DOM rendering), `features.js` (search, sort logic), and `main.js` (event listeners & initialization).
* **Dark Mode**, Upgraded the UI with a scalable Dark Mode toggle utilizing CSS variables and DOM manipulation.
