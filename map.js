const arr=[5,1,3,2,6];

function binary(x){
	return x.toString(2);
}
const output = arr.map(binary);

console.log(output);

// (5) ['101', '1', '11', '10', '110']

const arr=[5,1,3,2,6];

const output= arr.map((x) => x.toString(2));
console.log(output);

//(5) ['101', '1', '11', '10', '110']

const arr=[5,1,3,2,6];

const output= arr.filter((x) => x>4);
console.log(output);

//(2) [5, 6]

const arr=[5,1,3,2,6];

//sum or max

function findSum(arr){
	let sum=0;
	for(let i=0;i<arr.length; i++){
		sum =sum +arr[i];
	}
	return sum;
}
console.log(findSum(arr));
const output=arr.reduce(function(acc,curr){
    acc=acc+curr;
    return acc;
},0);
console.log(output);

// 17
// VM2396:17 17

