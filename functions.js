var x=1;
a();
b();
console.log(x);

function a(){
	var x=10;
	console.log(x);
}

function b(){
	var x=100;
	console.log(x);
}
// 10
// VM438:13 100
// VM438:4 1