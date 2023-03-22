window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementsByClassName("navbar")[0].style.padding = "0.1vh 10px";
    document.getElementById("logo").style.fontSize = "30px";
    document.getElementsByTagName("li").style.fontSize = "8px";
  } else {
    document.getElementsByClassName("navbar")[0].style.padding = "1vh 10px";
    document.getElementById("logo").style.fontSize = "30px";
    document.getElementsByTagName("li").style.fontSize = "10px";
  }
}

console.log("Hello World");