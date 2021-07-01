const body = document.querySelector("body");
const social_card = document.querySelectorAll(".social-card");
const header = document.querySelector(".header");
const slider = document.querySelector(".slider");
const followers_count = document.querySelectorAll(".followers-count");
const overview_card = document.querySelectorAll(".overview-card");
const data = document.querySelectorAll(".data");


function darkMode() {
  body.classList.toggle("dark-mode-body");
  header.classList.toggle("dark-mode-header");
  slider.classList.toggle("dark-mode-slider");

  for (i = 0; i < social_card.length; ++i) {
    social_card[i].classList.toggle("dark-mode-card");
  }
  for (i = 0; i < followers_count.length; ++i) {
    followers_count[i].classList.toggle("dark-mode-followers-count");
  }
  for (i = 0; i < overview_card.length; ++i) {
    overview_card[i].classList.toggle("dark-mode-overview-card");
  }
  for (i = 0; i < data.length; ++i) {
    data[i].classList.toggle("dark-mode-data");
  }
}
