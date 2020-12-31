var btnWrite = document.querySelector(".btn-write");
var btnMakeAnother = document.querySelector(".btn-make-another");
var card = document.querySelector(".inner-card");

btnWrite.addEventListener("click", flipCard);

function flipCard() {
  card.classList.add("flip")
}

function makeAnother() {

}
