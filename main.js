var btnWrite = document.querySelector(".btn-write");
var btnMakeAnother = document.querySelector(".btn-make-another");

var card = document.querySelector(".inner-card");
var noun1 =  document.querySelector("#noun1");
var place1 = document.querySelector("#place1");
var num1 = document.querySelector("#num1");
var noun2 = document.querySelector("#noun2");
var verb1 = document.querySelector("#verb1");
var clothing1 = document.querySelector("#clothing1");
var clothing2 = document.querySelector("#clothing2");
var beverage1 =  document.querySelector("#beverage1");
var food1 =  document.querySelector("#food1");

var noun1Text = document.querySelector("#noun1Text");
var place1Text = document.querySelector("#place1Text");
var num1Text = document.querySelector("#num1Text");
var noun2Text = document.querySelector("#noun2Text");
var verb1Text = document.querySelector("#verb1Text");
var clothing1Text = document.querySelector("#clothing1Text");
var clothing2Text = document.querySelector("#clothing2Text");
var beverage1Text = document.querySelector("#beverage1Text");
var food1Text = document.querySelector("#food1Text");

var userWords = [noun1, place1, num1, noun2, verb1, clothing1, clothing2, beverage1, food1];
var blanks = [noun1Text, place1Text, num1Text, noun2Text, verb1Text, clothing1Text, clothing2Text, beverage1Text, food1Text];

btnWrite.addEventListener("click", write);
btnMakeAnother.addEventListener("click", makeAnother);

function flipCard() {
  card.classList.toggle("flip")
}

function write() {
 for(var i = 0; i < 9; i++) {
   blanks[i].innerText = userWords[i].value
 }
 flipCard();
}

function makeAnother() {
  flipCard();
}
