// Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("open");
});

// Fix Nav
const navigation = document.querySelector(".navigation");
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 200) {
    navigation.classList.add("fix");
    header.style.zIndex = "1000";
  } else {
    navigation.classList.remove("fix");
  }
});

