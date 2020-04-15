
function displayText(){
    console.log("pressed")
    var x = document.getElementsByClassName("descriptions");
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
}