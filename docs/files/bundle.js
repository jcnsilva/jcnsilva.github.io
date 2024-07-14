function toggleSpotlight(galleryIndex) {
  const gallery = document.getElementById("portfolio-gallery");

  gallery
    .querySelectorAll(".gallery-item")
    .forEach((item) => item.classList.remove("gallery-spotlight"));

  gallery.children.item(galleryIndex - 1).classList.add("gallery-spotlight");
}

function toggleLights() {
  const root = document.querySelector("html");

  if (root.dataset.theme === "light") {
    root.dataset.theme = "dark";
  } else if (root.dataset.theme === "dark") {
    root.dataset.theme = "light";
  }
}

function toggleNavbar() {
  const navbar = document.querySelector(".nav-links");

  navbar.classList.toggle("md-navigation-closed");
}
