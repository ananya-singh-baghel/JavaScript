console.log(a);
console.log(b);
console.log(x);

let a=10;
var b=100;

// undefined
// VM1155:3 Uncaught ReferenceError: x is not defined
//     at <anonymous>:3:13
console.log(b);

let a=10;
console.log(a);
var b=100;
// VM1171:1 undefined
// VM1171:3 10

this.a;
this.b;
//100

let a;
const b;

b=1000;
a=10;
connsole.log(a);
//VM1305:2 Uncaught SyntaxError: Missing initializer in const declaration

