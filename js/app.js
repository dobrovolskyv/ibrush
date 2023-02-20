document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    const element = document.querySelector('.js-choice');

    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: "",
        allowHTML: true
    })


    const swiper = new Swiper('.swiper', {
  
        direction: 'horizontal',
        loop: true,

        pagination: {
            el: '.swiper-pagination',
        },

        navigation: {
            nextEl: '.swiper-pagination',
        },


    });
})
