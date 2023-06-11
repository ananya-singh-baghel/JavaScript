var a;

console.log(a);
a=10;
if(a===undefined){
	console.log("a is undefined");
}else{
	console.log("a is not undefined");
}

// undefined
// VM62:8 a is not undefined

var a;
console.log(a);
a=10;
console.log(a);
a="hello world";
console.log(a);

// undefined
// VM87:4 10
// VM87:6 hello world