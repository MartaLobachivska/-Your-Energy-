const currentPath = window.location.pathname;
const homePage = document.querySelector('#Home');
const favoritesPage = document.querySelector('#Favorites');

document.addEventListener('DOMContentLoaded', pageSwitch);

function pageSwitch() {
  homePage.classList.remove('HeaderNavLinkActive');
  favoritesPage.classList.remove('HeaderNavLinkActive');

  if (!currentPath.includes('favorites.html')) {
    homePage.classList.add('HeaderNavLinkActive');
  } else {
    favoritesPage.classList.add('HeaderNavLinkActive');
  }
}