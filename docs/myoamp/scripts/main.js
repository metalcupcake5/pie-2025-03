

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

window.addEventListener('load', () => {
  const img = document.querySelector('.slide-up');
  img.style.transform = 'rotate(-45deg) translateX(-450px) translateY(-450px)'; // final position
  img.style.opacity = '1';
});


  document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".flow-img");
  if (!img) return;

  img.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent background click fancy shmancy way
    img.classList.toggle("enlarged");
  });

  document.addEventListener("click", () => {
    img.classList.remove("enlarged");
  });
});


  const slides = [
    {
      img: "Images/tada2.png",
      text: "This is the first image description."
    },
    {
      img: "Images/wifi.png",
      text: "This text appears with the second image."
    },
    {
      img: "Images/reach.jpg",
      text: "Here is some context for the third image."
    }
  ];

  let index = 0;
  const slideImg = document.getElementById("slide");
  const caption = document.getElementById("caption");

  function update() {
    slideImg.src = slides[index].img;
    caption.textContent = slides[index].text;
  }

  function next() {
    index = (index + 1) % slides.length;
    update();
  }

  function prev() {
    index = (index - 1 + slides.length) % slides.length;
    update();
  }

  update();