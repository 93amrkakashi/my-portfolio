// let navBar = document.getElementById("navbar");
let switchs = document.getElementById("menu");
let link = document.getElementById("links");
let about = document.getElementById("about"); 
let navBar = document.getElementById("nav")
let navOffset = document.querySelector(".nav-bar").offsetTop;
let section = document.querySelector(".skills");
let spans = document.querySelectorAll(".progress span");


function hi (){
  if (window.scrollY >= navOffset+40) {
    console.log("hiiiiiiiii");
    navBar.classList.add("mini");
    navBar.classList.remove("glass");
  } else{
    navBar.classList.remove("mini")
    navBar.classList.add("glass");
  }
}
window.addEventListener("scroll",hi);



function switching(){
    link.classList.toggle("mobile");
}
switchs.addEventListener("click",switching);




window.onscroll = function () {
  if (window.scrollY >= section.offsetTop-120) {
    console.log("Reached Section Three");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  } else{
    spans.forEach((span) => {
      span.style.width = 0;
    })
  }
};











