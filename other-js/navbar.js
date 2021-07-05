const hamburger = document.getElementById(`hamburger`);
const theBody = document.body;
const sideNav = document.querySelector(`.side-nav`);
const sideNavList = document.getElementById(`nav`);
const navMediaQuery = window.matchMedia("(max-width: 1215px)");
const navMediaQuery2 = window.matchMedia("(min-width: 1215px)");

function hideSideBarOnScreenResize(e) {
  console.log(e);
  if (navMediaQuery2.matches) {
    sideNav.classList.add(`hide`);
    sideNavList.classList.remove(`show`);
  }
}

window.addEventListener("resize", hideSideBarOnScreenResize);

hideSideBarOnScreenResize();

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
  if (sideNav.classList.contains(`hide`)) {
    sideNav.classList.remove(`hide`);
    mediaQuery();
  } else {
    sideNav.classList.add(`hide`);
    mediaQuery();
  }
}

mediaQueryOnLoad();

hamburger.addEventListener(`click`, toggleSideBar);
