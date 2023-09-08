/* Define the slides list */
let slides = [
  {
    image: '01.webp'
  }, //0
  {
    image: '02.webp'
  }, //1
  {
    image: '03.webp'
  }, //etc
  {
    image: '04.webp'
  },
  {
    image: '05.webp'
  },
]

  //transform array of strings in array of objects
  
  let activeSlide = 0;
  
  // select the dom elements
  const sliderImagesEl = document.querySelector('.slider .images')
  const prevEl = document.querySelector('.prev')
  const nextEl = document.querySelector('.next')
  
  
  //console.log(sliderImagesEl);

  slides.forEach((slide, index) =>{
    
    //find the path of the image
    const slidePath = slide.image;

    //create markup for slide
    const slideMarkup = `<img class="${activeSlide === index ? 'active' : ''}" src="./assets/img/${slidePath}" alt="">`;

    //insert Markup in DOM
    sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup);
  })
  
  /* Print all images into the dom */
  // loop over the slides 
 
 /*for (let i = 0; i < slides.length; i++) {
    const slideObj = slides[i];
    console.log(slideObj);
    
    / for each slide we create the markup
    const slideMarkup = generateSlideMarkup(activeSlide, slideObj, i)
    //console.log(slideMarkup);
  
    sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup)
  
  }*/
  /* 
  
  if(condition) {
    // code to run
  } else {
    // code to run
  }
  
  // terary operator
  
  condition ? 'code to run' : 'code to run' 
  
  MILESTONE 3
  Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
  
  */
  
  const slidesImages = document.querySelectorAll('.slider .images > img')
  console.log(slidesImages);

  
  
  const thumbsElement = document.querySelector('.thumbnails')
  
  slides.forEach((slide , index) =>{
    const thumbMarkup = `<img class="thumb ${activeSlide === i ? 'active' : ''}" src="${slidePath}" alt="">`
    //console.log(thumbMarkup);
  
    thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup)
    
  })
  
  
  
  
  
  // intercept click on the next icon 
  nextEl.addEventListener('click', function(){
    console.log('cliccato su next');
  
    // select the current slide
    const currentSlide = slidesImages[activeSlide]
    console.log(currentSlide);
    // remove the active class from the current slide
    currentSlide.classList.remove('active')
  
    // select the active thumb
    const currentThumb = document.querySelector('.thumbnails > img.active')
    console.log(currentThumb);
    // remove the active class from the active thumb
    currentThumb.classList.remove('active')
  
    
    // activeSlide = 4
  
    if (activeSlide === slidesImages.length - 1) {
      activeSlide = 0
      // activeSlide = 5
    } else {
      // increment the activeSlide of 1
      activeSlide++
    }
  
  
    // select the next slide
    const nextSlide = slidesImages[activeSlide]
    console.log(nextSlide);
    // add the active class to the next slide
    nextSlide.classList.add('active')
  
  
    /* TODO */
  
  
    // select the next thumb
    const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
    console.log(nextThumb);
    // add to the next thumb the active class
    nextThumb.classList.add('active')
  
  
  })
  
  // intercept click on the prev icon
  
  
  // activeSlide = 0
  prevEl.addEventListener('click', function () {
    console.log('cliccato su prev');
  
  
    // select the current slide
    const currentSlide = slidesImages[activeSlide]
    console.log(currentSlide);
    // remove the active class from the current slide
    currentSlide.classList.remove('active')
  
    if (activeSlide === 0) {
      activeSlide = slidesImages.length - 1
      // activeSlide = 5
    } else {
        // decrement the activeSlide of 1
        activeSlide--
    }
    
    
    console.log(activeSlide);
  
  
    // select the next slide
    const nextSlide = slidesImages[activeSlide]
    console.log(nextSlide);
    // add the active class to the next slide
    nextSlide.classList.add('active')
  })