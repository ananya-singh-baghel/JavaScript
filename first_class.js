a();
b();
//fun statement aka fun declaration
function a() {
	console.log("a called");
}
a();
//fun expression
var b = function(){
	console.log("b called");
}
// a called
// VM1850:2 Uncaught TypeError: b is not a function
//     at <anonymous>:2:1

//anonymous fun
function () {
}

//named function exp
var b = function xyz(){
	console.log("b called");
}

//diff b/w parameters n arg
var b = function (param1, param2){
	console.log("b called");
}
b(1,2); //these are arguments

//first class fun-ability to be used like values
var b = function (param1){
	return function(){

	}
}
console.log(b());
// ƒ (){

// 	}

