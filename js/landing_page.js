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
document.getElementById('frame').style.display="block";
document.getElementById('papaya').style.display="none";
document.getElementById("h2").classList.remove("animate");
}

function page2(){
document.getElementById("text1").style.display="none";
document.getElementById("text2").style.display="inline-block";
}

function page1(){
document.getElementById("text1").style.display="inline-block";
document.getElementById("text2").style.display="none";
}

function next() { 
var first = document.getElementById("one");
first.scrollIntoView({block: "end", behavior: "smooth"});
}

function next2() { 
var second = document.getElementById("two");
second.scrollIntoView({block: "end", behavior: "smooth"});
}


function next3() { 
var third = document.getElementById("hands");
third.scrollIntoView({block: "start", behavior: "smooth"});
}

function next4() { 
var fourth = document.getElementById("four");
fourth.scrollIntoView({block: "end", behavior: "smooth"});
}

function one() {
window.location.href="‎⁨‎⁨/Users/orideangelis/Desktop/ima capstone/resources/web/html/content/html/page1.html";
// document.getElementById("clickclit").classList.remove("animate");
}

function two() {
window.location.href = "‎⁨‎⁨../html/content/html/page2.html";
}

function three() {
document.getElementById('content3').style.display="block";
document.getElementById('hands').style.display="none";
document.getElementById('three').style.display="none";
}

function four() {
document.getElementById('content4').style.display="block";
document.getElementById('orgasm').style.display="none";
document.getElementById('four').style.display="none";
}

function hide(){
location.reload();
}

function question1(){
document.getElementById('vajajay').style.display="none";
document.getElementById('one').style.display="none";
document.getElementById('clickclit').style.display="none";
document.getElementById('inputone').style.display="block";
}

function question2(){
document.getElementById('fruit').style.display="none";
document.getElementById('two').style.display="none";
document.getElementById('input2').style.display="block";
}

function question3(){
document.getElementById('hands').style.display="none";
document.getElementById('three').style.display="none";
document.getElementById('input3').style.display="block";
}

function question4(){
document.getElementById('orgasm').style.display="none";
document.getElementById('four').style.display="none";
document.getElementById('input4').style.display="block";
}

/**
useful functions for whori
- addEventListener
- getElementById
- .style(...)
*/

//onpress enter do console.log to save answers
