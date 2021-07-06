const hamburger = document.getElementById(`hamburger`);
const theBody = document.body;
const sideNav = document.querySelector(`.side-nav`);
const navCon = document.querySelector(`.nav-con`);
const sideNavList = document.getElementById(`side-nav`);
const navMediaQuery = window.matchMedia("(max-width: 1215px)");
const navMediaQuery2 = window.matchMedia("(min-width: 1215px)");
const carouselInterval = document.getElementById(`newsAlerts`);

function hideSideBarOnScreenResize(e) {
  if (navMediaQuery2.matches) {
    sideNav.classList.add(`hide`);
    navCon.classList.add(`hide`);
    sideNavList.classList.remove(`show`);
  }
}

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
  } else {
    sideNavList.classList.add(`show`);
  }
}

function toggleSideBar() {
  if (sideNav.classList.contains(`hide`) && navCon.classList.contains(`hide`)) {
    sideNav.classList.remove(`hide`);
    navCon.classList.remove(`hide`);
    mediaQuery();
  } else {
    sideNav.classList.add(`hide`);
    navCon.classList.add(`hide`);
    mediaQuery();
  }
}

hamburger.addEventListener(`click`, toggleSideBar);
window.addEventListener("resize", hideSideBarOnScreenResize);

hideSideBarOnScreenResize();
mediaQueryOnLoad();
