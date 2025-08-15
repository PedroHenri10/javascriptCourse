import people from './data.js';

const container = document.querySelector('.slide-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

// set slides
container.innerHTML = people.map((person, slideIndex) => {
    const {img, name, job , text} = person;
    //more logic later
    let position = 'next';
    if(slideIndex ===0){
        position = 'active';
    }
    if(slideIndex === people.length -1){
        position = 'last';
    }
    
    return `<article class="slide ${position}">
          <img
            src="${img}"
            class="img"
            alt="${name}"
          />
          <h4>${name}</h4>
          <p class="title">${job}</p>
          <p class="text">
          ${text}
          </p>
          <div class="quote-icon">
            <i class="fas fa-quote-right"></i>
          </div>
        </article>`;
})
.join('');

const startSlider = (type) => {
    const active = document.querySelector('.active');
    const last = document.querySelector('.last');
    let next;

    if (type === 'prev') {
        next = last.previousElementSibling;
        if (!next) {
            next = container.lastElementChild; // Wrap around to the last slide
        }
        active.classList.remove('active');
        active.classList.add('next');
        last.classList.remove('last');
        last.classList.add('active');
        next.classList.remove('next');
        next.classList.add('last');
    } else { // type === 'next' or undefined
        next = active.nextElementSibling;
        if (!next) {
            next = container.firstElementChild; // Wrap around to the first slide
        }
        active.classList.remove('active');
        active.classList.add('last');
        last.classList.remove('last');
        last.classList.add('next');
        next.classList.remove('next');
        next.classList.add('active');
    }
};
nextBtn.addEventListener('click', () => {
    startSlider();
});

prevBtn.addEventListener('click', () => {
    startSlider('prev');
});