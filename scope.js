function a(){
	var b=10;
	c();
	function c(){
		function d(){
			
		}
		console.log(b);
	}
}
a();
// 10
console.log(b);
// 10
// VM1018:8 Uncaught ReferenceError: b is not defined
//     at <anonymous>:8:17