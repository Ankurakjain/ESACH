function myFunction() {
    var x = document.getElementById("color-picker");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function changeColorPurple() {
    var x = document.getElementByClassName("purple");
    x.style.backgroundColor = "black";
  }
