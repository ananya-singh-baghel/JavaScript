console.log("start");

setTimeout(function cb(){
	console.log("callback");
}, 5000);

console.log("end");

// start
// VM2030:7 end

//....
let startDate= new Date().getTime();
let endDate = startDate;
while(endDate< startDate + 10000){
	endDate = new Date().getTime();
}

console.log("while expires");

// start
// VM2090:7 end
// VM2090:19 while expires
// undefined
// VM2090:4 callback

//new

console.log("start");

function cb(){
	console.log("callback");
}

setTimeout(cb, 0);

console.log("end");

// start
// VM2150:9 end
// undefined
// VM2150:4 callback