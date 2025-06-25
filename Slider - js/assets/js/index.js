// ====> HTML ELEMENTS
var model = document.querySelector(".model");
var allImages = Array.from(document.querySelectorAll("section .row img"));
var closeBtn = document.querySelector(".closeBtn");
var previousBtn = document.querySelector(".previousBtn");
var nextBtn = document.querySelector(".nextBtn");

// ====> APP VARIABLES

var currentIndex = 0;

// ====> FUNCTIONS

function showModel() {
  model.classList.remove("d-none");
}

function hideModel() {
  model.classList.add("d-none");
}

function getCurrrentImage(e) {
  var imgInfo = e.target;
  var imgSrc = e.target.getAttribute("src");
  model.querySelector("img").setAttribute("src", imgSrc);
  currentIndex = allImages.indexOf(imgInfo);
}

function getNextSlide() {
  currentIndex++;
  if (currentIndex >= allImages.length) currentIndex = 0;
  var nextImageSrc = allImages[currentIndex].getAttribute("src");
  model.querySelector("img").setAttribute("src", nextImageSrc);
}

function getPreviousSlide() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = allImages.length - 1;
  var previousImageSrc = allImages[currentIndex].getAttribute("src");
  model.querySelector("img").setAttribute("src", previousImageSrc);
}

// ====> EVENTS

for (var i = 0; i < allImages.length; i++) {
  allImages[i].addEventListener("click", function (e) {
    showModel();
    getCurrrentImage(e);
  });
}

closeBtn.addEventListener("click", hideModel);

nextBtn.addEventListener("click", getNextSlide);

previousBtn.addEventListener("click", getPreviousSlide);

model.addEventListener("click", function (e) {
  if (e.target == model) hideModel();
});

document.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "ArrowRight":
      getNextSlide();
      break;
    case "ArrowLeft":
      getPreviousSlide();
      break;
    case "Escape":
      hideModel();
      break;
  }
});
