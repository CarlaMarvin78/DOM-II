// Your code goes here

let logo_heading = document.querySelector(".logo-heading");
logo_heading.addEventListener("mouseover", function(event) {
    logo_heading.setAttribute("style","font-size: 7rem; color: hotpink");
});

logo_heading.addEventListener("mouseout", function(event) {
    logo_heading.removeAttribute("style");
});

let btn = document.querySelectorAll(".btn");
btn[0].addEventListener("click", function (event){
    btn[0].setAttribute("style", "background-color: ");
});

btn[1].addEventListener("mouseover", function (event){
    btn[1].setAttribute("style", "border-radius:80px; width:160px; background-color:hotpink");
});

btn[2].addEventListener("dblclick", function (event) {
    btn[2].setAttribute("style", "border: 2px solid red")
  });

  let nav = document.querySelector(".nav");
  nav.addEventListener("mouseover", function (event){
      nav.setAttribute("style", "border: 2px dotted blue");
  });
  let navchildren = nav.children;
  for(let i=0; i<navchildren.length;++i) {
    navchildren[i].addEventListener("click", function (event) {
    return event.preventDefault ();
});
};


let audio = document.createElement("audio");
audio.setAttribute("src", "Bus_horn.mp3");

let img = document.querySelector(".intro img");
img.addEventListener("click", function (event){
    audio.play();
});

let img_content = document.querySelector(".img-content img");
img_content.addEventListener("mouseover", function (event){
 img_content.setAttribute("src", "img/Spain-Map.jpg") ;  
});

img_content.addEventListener("mouseout", function (event){
    img_content.setAttribute("src", "img/adventure.jpg");
});


