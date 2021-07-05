const hamburger = document.getElementById(`hamburger`);
const theBody = document.body;
const sideNav = document.querySelector(`.side-nav`);
const sideNavList = document.getElementById(`nav`);

const navMediaQuery = window.matchMedia("(max-width: 1215px)");

mediaQueryOnLoad();

function mediaQueryOnLoad() {
  if (navMediaQuery.matches) {
    sideNavList.classList.remove(`show`);
  } else {
    sideNavList.classList.add(`show`);
  }
}

function mediaQuery() {
  if (navMediaQuery.matches && sideNavList.classList.contains(`show`)) {
    sideNavList.classList.remove(`show`);
    console.log(`removed navbar`);
  } else {
    sideNavList.classList.add(`show`);
    console.log(`added navbar`);
  }
}

function toggleSideBar() {
  console.log(`success`);

  if (sideNav.classList.contains(`hide`)) {
    sideNav.classList.remove(`hide`);
    mediaQuery();
  } else {
    sideNav.classList.add(`hide`);
    mediaQuery();
  }
}

hamburger.addEventListener(`click`, toggleSideBar);
