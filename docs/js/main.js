window.onscroll = function() {
  scrollWin()
};

function scrollWin() {
  //window.scrollTo(500, 0);

//alert('window.pageXOffset= '+window.pageXOffset + '\nwindow.pageYOffset='+ window.pageYOffset);

var el= document.getElementById('header');
if(window.pageYOffset > 10){   
el.style.backgroundColor='#f5f5f5';
el.style.borderBottom="2px solid #2b2b2b"
} else {   
el.style.backgroundColor='transparent';
el.style.borderBottom="none";
}
}
function myFunction() {
  var x = document.getElementById("color-picker");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
function changeColorDark() {
  var x = document.getElementsByClassName("color");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#2b2b2b";
    x[i].style.color= "white";
  }
}
function changeColorPurple() {
  var x = document.getElementsByClassName("color");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#6C62FF";
    x[i].style.borderRightColor = "black";
  }
}
function changeColorYellow() {
  var x = document.getElementsByClassName("color");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#F3AF51";
    x[i].style.color= "black";
    x[i].style.borderRightColor = "black";
  }
}
function changeColorGreen() {
  var x = document.getElementsByClassName("color");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#CCE7E7";
  }
}