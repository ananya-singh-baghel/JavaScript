{
	var a=10;
	let b=20;
	const c=30;
	console.log(a);
	console.log(b);
	console.log(c);
}
// 10
// VM1370:6 20
// VM1370:7 30

//SHADOWING
var a=100;
{
	var a=10;
	let b=20;
	const c=30;
	console.log(a);
	console.log(b);
	console.log(c);
}
console.log(a);

// 10
// VM1430:7 20
// VM1430:8 30
// VM1430:10 10

//ILLEGAL SHADOWING- this is not possible
let a=20;
{
	var a=20;
}

//Lexical block
const a=20;
{
	const a=100;
	{
		const a =200;
		console.log(a);
	}
}
//200