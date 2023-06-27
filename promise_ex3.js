function myDisplayer(some) {
  console.log(some*some);
}
function err(some) {
  var e= "You entered 0!";
  console.log(e);
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 10;

// some code (try to change x to 5)

  if (x == 0) {
    
    myReject();
  } else {
    myResolve(x);
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {err();}
);