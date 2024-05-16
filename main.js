// const slider = document.getElementById('cardSlider');
// const cards = slider.querySelectorAll('.slider-card');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');

// let currentSlide = 0;

// function showSlide(n) {
//     cards.forEach((card, index) => {
//         if (index === n) {
//             card.style.display = 'block';
//         }else{
//             card.style.display = 'none';
//         }
//     });

//     currentSlide = n;
// }

// showSlide(currentSlide);

// nextBtn.addEventListener('click', ()=> {
//     currentSlide++;
//     if(currentSlide>= cards.length){
//         currentSlide = 0;
//     }
//     showSlide(currentSlide);
// });

// prevBtn.addEventListener('click', ()=> {
//     currentSlide--;
//     if(currentSlide < 0){
//         currentSlide = cards.length -1;
//     }
//     showSlide(currentSlide);
// });




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var appendNumber = 4;
  var prependNumber = 1;
  document
