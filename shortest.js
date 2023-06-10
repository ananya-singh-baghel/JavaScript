//stortest js program is a empty program

//global space
var a=10;
function b(){
	//local space
	var x=10;
}
console.log(window.a);
console.log(a);
//at global level this=window
console.log(this.a);
// 10
// VM1307:9 10
// VM1307:11 10
console.log(x);
// VM1382:1 Uncaught ReferenceError: x is not defined
//     at <anonymous>:1:13
// (anonymous) @ VM1382:1