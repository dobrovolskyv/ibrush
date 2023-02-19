document.addEventListener('DOMContentLoaded', (e)=>{
    e.preventDefault()
    const element = document.querySelector('.js-choice');

const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: "",
    allowHTML: true
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-pagination',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
  
  });
})
