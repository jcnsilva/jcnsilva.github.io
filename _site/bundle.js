let options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

let callback = (entries) => {
  entries.forEach((entry) => {});
};

let observer = new IntersectionObserver(callback, options);

let target = document.querySelectorAll(".section");
target.forEach((t) => observer.observe(t));

// Handle show navbar
function handleShowNavbar() {
  let myNav = document.getElementById("main-nav");
  if (myNav.classList.contains("navbar-responsive")) {
    myNav.classList.remove("navbar-responsive");
  } else {
    myNav.classList.add("navbar-responsive");
  }
}
