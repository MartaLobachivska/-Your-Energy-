# Your Energy — Digital Fitness Companion

**Your Energy** is a modern web application designed for discovering exercises and maintaining a healthy lifestyle. Built as a graduation project, it showcases advanced Vanilla JavaScript skills, complex API integrations, and a fully responsive interface tailored for all devices.

## Project Goal
To provide users with an intuitive, fast, and feature-rich catalog of exercises, searchable by muscle groups, body parts, and available equipment.

## Key Features
* **Motivation Engine**: Fetches a dynamic "Quote of the Day" directly from an API upon every visit.
* **Advanced Filtering**: Seamlessly switch between categories like *Muscles*, *Body parts*, and *Equipment*.
* **Interactive Exercise Catalog**: High-performance exercise cards displaying ratings, calorie burn, and duration.
* **Deep Dive Modals**: Comprehensive exercise details including technical descriptions, video tutorials (where available), and a rating system.
* **Smart Search**: Instant keyword-based filtering to find specific workouts in seconds.
* **Feedback System**: Users can rate exercises via PATCH requests and subscribe to updates through an integrated email form.
* **Optimized Navigation**: Smooth pagination for browsing through extensive data sets efficiently.

## 🛠 Technical Stack
The project is built on **Vanilla JS** principles, ensuring high performance without heavy frameworks:
* **Logic**: JavaScript (ES6+).
* **Bundler**: [Vite](https://vite.dev/) — for rapid development and asset optimization.
* **Styling**: CSS3 (Flexbox, Grid) with a Mobile-First adaptive approach.
* **Data Source**: [YourEnergy Swagger API](https://your-energy.b.goit.study/api-docs/#/).
* **Architecture**: Modular HTML structure using Partials for better maintainability.

## Project Structure
* `src/index.html` — Main application dashboard.
* `src/favorites.html` — Personalized list of saved exercises.
* `src/partials/` — Modular UI components (Header, Hero, Footer, etc.).
* `src/css/` — Project stylesheets.
* `src/main.js` — Core JavaScript entry point.
* `public/` — Static assets, including icons and favicons.
