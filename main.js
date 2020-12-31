var btnWrite = document.querySelector(".btn-write");
var btnMakeAnother = document.querySelector(".btn-make-another");
var card = document.querySelector(".inner-card");

btnWrite.addEventListener("click", flipCard);
btnMakeAnother.addEventListener("click", makeAnother);

function flipCard() {
  card.classList.toggle("flip")
}

function makeAnother() {
  flipCard();
}
