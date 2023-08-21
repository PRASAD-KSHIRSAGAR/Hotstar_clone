const carousel = document.querySelector('.carousel')
let sliders = []
let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // Creating DOM Elements
  let slide = document.createElement('div');
  let imgElement = document.createElement('img');
  let content = document.createElement('div');
  let h1 = document.createElement('h1');
  let p = document.createElement('p');

  // Attaching all elements
  imgElement.appendChild(document.createTextNode(''));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  p.textContent = (movies[slideIndex].des);
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);
  
  // Setting up the img
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // Setting element class name
  slide.className = 'slider';
  content.className = 'slide-content';
  h1.className = 'movie-title';
  p.className = 'movie-des';

  sliders.push(slide);

  // Adding slide effect
  if (sliders.length > 0) {
    let marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    sliders[0].style.marginLeft = marginLeft;
  }
};

// Create 3 initial slides
for (let i = 0; i < 3; i++) {
  createSlide();
}

// Create a new slide every 3 seconds
setInterval(() => {
 createSlide();
}, 3000);

//video cards
const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
});


//cards sliders
let cardContainers= document.querySelectorAll('.card-container');
let preBtns=document.querySelectorAll('.pre-btn');
let nxtBtns=documents.querySelectorAll('.nxt-btn');

cardContainers.forEach((item,i) =>{
  let containerDimension = item.getBoundingClientRect();
  let containerWidth = containerDimension.width;

  nxtBtns[i].addEventListener('clicks',() =>{
   item.scrollLeft+=containerWidth - 200;
  })
  preBtns[i].addEventListener('clicks',() =>{
   item.scrollLeft -=containerWidth + 200;
  })
})
