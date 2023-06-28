let timeout;

function myFunction() {
  timeout = setTimeout((function fun() {
  alert("Hello!");
}), 3000);}

myFunction();

////////

let timeout;

function myFunction() {
  timeout = setTimeout(alertFunc, 3000);
}

function alertFunc() {
  alert("Hello!");
}

myFunction();


