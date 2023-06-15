//SETTIMEOUT

console.log("start");

setTimeout(function cb(){
	console.log("Callback");
}, 5000);
console.log("End");

//DOM
console.log("start");
document.getElementById("btn")
.addEventListener("click", function cb() {
	console.log("Callback");
});
console.log("End");

//FETCH
console.log("start");

setTimeout(function cbT(){
	console.log("CB setTimeout");
}, 5000);

fetch("http://api.netflix.com").then(function cbF(){
	console.log("CB NETFLIX");
});
console.log("End");