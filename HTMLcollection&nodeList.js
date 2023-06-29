<p>Hello World!</p>

<p>Hello india!</p>

<p id="lol"></p>

<script>

//document.getElementById("lol").innerHTML = "The innerHTML of the second paragraph is: " + myCollection[2].innerHTML;

const myCollection = document.getElementsByTagName("p");
for (let i = 0; i < myCollection.length; i++) {
  if(i==0) myCollection[i].style.color = "red";
  else myCollection[i].style.color = "green";
}

const myNodelist = document.querySelectorAll("p");

document.getElementById("lol").innerHTML = "The innerHTML of the second paragraph is: " + myNodelist[0].innerHTML;
</script>