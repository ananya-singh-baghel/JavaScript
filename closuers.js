function x(){
	var a=7;
	function y(){
		console.log(a);
	}
	y();
}
x();
//7

function x(){
	var a=7;
	function y(){
		console.log(a);
	}
	return y;
}
var z = x();
console.log(z);
//.....
z();

// ƒ y(){
// 		console.log(a);
// 	}
// VM1610:4 7

function x(){
	var a=7;
	function y(){
		console.log(a);
	}
	a=100;
	return y;
}
var z = x();
console.log(z);
//.....
z();

// ƒ y(){
// 		console.log(a);
// 	}
// VM1610:4 100

function z(){
	var b=900;
	function x(){
	var a=7;
	function y(){
		console.log(a,b);
	}
	y();
  }
  x();
}
z();
//7 900