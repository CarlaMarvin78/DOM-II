// Your code goes here

let btn = document.querySelectorAll(".btn");
btn[0].addEventListener("click", function (event){
    btn[0].setAttribute("style", "background-color:orange");
});

btn[1].addEventListener("mouseover", function (event){
    btn[1].setAttribute("style", "border-radius:80px; width:160px; background-color:pink");
});

btn[2].addEventListener("dblclick", function (event) {
    btn[2].setAttribute("style", "border: 2px solid red")
  });

  let nav = document.querySelector(".nav");
  nav.addEventListener("mouseover", function (event){
      nav.setAttribute("style", "border: 2px dotted blue");
  });

let audio = document.createElement("audio");
audio.setAttribute("src", "Bus_horn.mp3");

let img = document.querySelector(".intro img");
img.addEventListener("click", function (event){
    audio.play();
});