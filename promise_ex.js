let myPromise = new Promise(function(myResolve, myReject) {
  let a = prompt("a:");
  let b = prompt("b:");

  setTimeout(function() { 

  if (a == 0 || b==0) {
   setTimeout(function() {myReject("ERROR")},5000);
  } else {
    setTimeout(function() {myResolve("the product is "+a*b)},5000);
  }
  },300);
});

myPromise.then(
  function(value) {console.log(value);},
  function(error) {console.log(error);}
);