const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/hand.jpg");
  } else {
    myImage.setAttribute("src", "images/woman.webp");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

window.addEventListener('load', () => {
  const img = document.querySelector('.slide-up');
  img.style.transform = 'rotate(-45deg) translateX(-450px) translateY(-450px)'; // final position
  img.style.opacity = '1';
});




