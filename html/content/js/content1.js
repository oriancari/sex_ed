// content.js

function main() {
window.location.href = "../../indexcopy.html"
}

function sources() {
	window.location.href = "../sources/index.html"
}

function question() {
document.getElementById('frame').style.display="none";
document.getElementById('sources').style.display="none";
document.getElementById('question').style.display="none";
document.getElementById('header').style.display="none";
document.getElementById('title').style.display="none";
document.getElementById('input').style.display="inline-block";
document.getElementById('answer').style.display="inline-block";
document.getElementById('save').style.display="inline-block";
document.getElementById('back').style.display="inline-block";
}

function refresh() {
document.getElementById('frame').style.display="inline-block";
document.getElementById('sources').style.display="inline-block";
document.getElementById('question').style.display="inline-block";
document.getElementById('header').style.display="inline-block";
document.getElementById('title').style.display="inline-block";
document.getElementById('input').style.display="none";
document.getElementById('answer').style.display="none";
document.getElementById('save').style.display="none";
document.getElementById('back').style.display="none";
}

function playVideo() { 
	var vm = document.getElementById("video"); 
  vm.play(); 
} 

function pauseVideo() { 
	var vm = document.getElementById("video"); 
  vm.pause(); 
}

function playVideo2() { 
	var omgyes = document.getElementById("omgyesvid"); 
  omgyes.play(); 
} 

function pauseVideo2() { 
	var omgyes = document.getElementById("omgyesvid"); 
  omgyes.pause(); 
}

function sConsole(event) {
  event.preventDefault();
  var data = document.getElementById("answer");
  console.log(data.value);
}