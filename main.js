var button = document.querySelector("button");
var card = document.querySelector(".inner-card");

button.addEventListener("click", flipCard);

function flipCard() {
  card.classList.add("flip")
}
