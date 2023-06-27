<html>
<p id="demo"></p>

<script>
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some*some;
}
function err(some) {
  document.getElementById("demo").innerHTML = "You entered 0!";
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// some code (try to change x to 5)

  if (x == 0) {
    
    myReject(Err);
  } else {
    myResolve(x);
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {err(error);}
);
</script>
</html>