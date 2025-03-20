const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let totalSlides = slides.length;

// plotting all images from left to right
slides.forEach(
  (slide,index) => {
slide.style.left = `${index*100}%`
})

function goNext(){
  currentIndex++;
  if(currentIndex == totalSlides){
    currentIndex = 0;
   }
  slideImg()
}

function goPrev(){
  currentIndex--;
   if(currentIndex == 0){
    currentIndex = totalSlides-1;
   }
  slideImg()
};


function slideImg(){
  slides.forEach(
    (slide) => {
         slide.style.transform = `translateX(-${currentIndex*100}%)`
    }
  )
}

// Auto-sliding mechanism: calls goNext() every 3 seconds

setInterval(goNext, 5000);  // 3000 ms = 3 seconds
