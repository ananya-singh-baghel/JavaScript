const radius =[3,1,2,4];
const calcarea = function (radius){
	const output =[];
	for(let i=0;i<radius.length; i++){
		output.push(Math.PI*radius[i]*radius[i]);
	}
	return output;
};

console.log(calcarea(radius));

const calcCircum = function (radius) {
	const output =[];
	for(let i=0; i<radius.length; i++){
		output.push(2*Math.PI*radius[i]);
	}
	return output;
};
console.log(calcCircum (radius));

