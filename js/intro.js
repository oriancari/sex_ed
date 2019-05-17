// function onload_selfdesigned(){
// 	document.getElementById("papaya").addEventListener("onclick", somefunction)
// 	document.getElementById("close").addEventListener("onclick", hide)
// 	document.getElementById("h1").addEventListener("onclick", main)
// 	document.getElementById("h2").addEventListener("onclick", intro)
// }

function main() {
window.location.href = "indexcopy.html";
}

function page2(){
document.getElementById('text1').style.display="none";
document.getElementById('text2').style.display="inline-block";
}

function page1() {
document.getElementById('text2').style.display="none";
document.getElementById('text1').style.display="inline-block";
}


function hide(){
window.location.href = "indexcopy.html";
}

window.onload = (event) => {
var element = document.getElementById("h2");
element.classList.remove("animate");
}