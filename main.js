import Splide from "@splidejs/splide";
import "@splidejs/splide/css";

new Splide(".splide", {
  rewind: true,
}).mount();

const timerDiv = document.querySelector(".timer");

let endTime = new Date(2023, 11, 20, 0, 0);

const timer = () => {
  let todayDate = new Date();
  let todayTime = todayDate.getTime();
  let remainingTime = endTime - todayTime;
  let oneMin = 60 * 1000;
  let oneHr = 60 * oneMin;
  let oneDay = 24 * oneHr;

  let addZeros = (num) => (num < 10 ? `0${num}` : num);

  if (endTime < todayTime) {
    clearInterval(i);
    timerDiv.innerHTML = `<h3>Offer time has expired</h3>`;
  } else {
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

    // console.log(daysLeft, hrsLeft, minsLeft, secsLeft);
    timerDiv.innerHTML = `${addZeros(daysLeft)} Days : ${addZeros(
      hrsLeft
    )} Hours : ${addZeros(minsLeft)} mins : ${addZeros(secsLeft)} seconds`;
  }
};

let i = setInterval(timer, 1000);

timer();

// product carousel JS

const carouselNavButtons = document.querySelectorAll(
  ".carousel-nav-button span"
);

const carouselBodys = document.querySelectorAll(".carousel-body");

carouselNavButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    carouselNavButtons.forEach((button) => button.classList.remove("active"));
    button.classList.add("active");
    carouselBodys.forEach((carousel) => carousel.classList.remove("active"));
    carouselBodys[index].classList.add("active");
  });
});

new Splide(".splide.collections-slider", {
  perPage: 4,
  type: "loop",
  // rewind: true,
}).mount();

// console.log(document.querySelector(".collections-slider"));
