// function onload_selfdesigned(){
// 	document.getElementById("papaya").addEventListener("onclick", somefunction)
// 	document.getElementById("close").addEventListener("onclick", hide)
// 	document.getElementById("h1").addEventListener("onclick", main)
// 	document.getElementById("h2").addEventListener("onclick", intro)
// }

function main() {
var main = document.getElementById("papaya");
main.scrollIntoView({block: "end", behavior: "smooth"});
}

function intro(){ 
window.location.assign("intro.html");
var element = document.getElementById("h2");
element.classList.remove("animate");
}

function showText() {
  var disclaimer = document.getElementsByClassName("disclaimer");
  disclaimer.style.display="block"
}

function one() {
window.location.assign("./content/html/page2.html");
// window.location.href="‎⁨‎⁨./content/html/page1.html";
// document.getElementById("clickclit").classList.remove("animate");
}

function two() {
console.log(window.location.href);
window.location.assign("./content/html/page3.html");
// window.location.assign("‎⁨‎⁨./content/html/page1.html");
}

function three() {
window.location.assign("./content/html/page1.html");
  // window.location.assign("‎⁨‎⁨./content/html/page1.html");

// document.getElementById('content3').style.display="block";
// document.getElementById('hands').style.display="none";
// document.getElementById('three').style.display="none";
// window.location.assign("‎⁨‎⁨./content/html/page3.html");
}

function four() {
document.getElementById('content4').style.display="block";
document.getElementById('orgasm').style.display="none";
document.getElementById('four').style.display="none";
}

function hide(){
window.location.reload();
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  console.log(window.location.href);
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  // if(slides[slideIndex-1.style]===undefined){
  //   slides[slideIndex-1] = 
  // }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

