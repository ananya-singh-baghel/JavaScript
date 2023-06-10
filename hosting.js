// getName();
// console.log(x);

var x=7;

function getName(){
	console.log("Hello JS");
}

getName();
console.log(x);
console.log(getName);
// Hello JS
// VM640:8 7
// VM640:9 ƒ getName(){
// 	console.log("Hello JS");
// }
// undefined
getName();
console.log(x);

var x=7;

function getName(){
	console.log("Hello JS");
}
// Hello JS
// VM851:2 undefined
// undefined
