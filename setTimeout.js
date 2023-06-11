function x(){
	var i=1;
	setTimeout(function (){
		console.log(i);
	}, 1000);
}
x();


function x(){
	for(var i=1;i<=5;i++){
		setTimeout(function (){
		console.log(i);
	    }, i*1000);
	}
	console.log("hello JS");
}

x();
// hello JS
// undefined
// 5VM1730:4 6 (5 times)

function x(){
	for(let i=1;i<=5;i++){
		setTimeout(function (){
		console.log(i);
	    }, i*1000);
	}
	console.log("hello JS");
}

x();
// VM1790:7 hello JS
// undefined
// VM1790:4 1
// VM1790:4 2
// VM1790:4 3
// VM1790:4 4
// VM1790:4 5

function x(){
	for(var i=1;i<=5;i++){
		function close(x){
			setTimeout(function (){
		    console.log(x);
	        }, x*1000);
		}
		close(i);
	}
	console.log("hello JS");
}
x();
// VM1790:7 hello JS
// undefined
// VM1790:4 1
// VM1790:4 2
// VM1790:4 3
// VM1790:4 4
// VM1790:4 5