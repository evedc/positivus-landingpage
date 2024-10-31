const slidesContainer = document.getElementById('slides-container');
let isDown = false;
let startX;
let scrollLeft;


function isMobileView() {
    return window.innerWidth < 1024;
}

slidesContainer.addEventListener('mousedown', (e) => {
    if (!isMobileView()) return;
    isDown = true;
    slidesContainer.classList.add('active');
    startX = e.pageX - slidesContainer.offsetLeft;
    scrollLeft = slidesContainer.scrollLeft;
});

slidesContainer.addEventListener('mouseleave', () => {
    isDown = false;
});

slidesContainer.addEventListener('mouseup', () => {
    isDown = false;
});

slidesContainer.addEventListener('mousemove', (e) => {
    if (!isDown || !isMobileView()) return;
    e.preventDefault();
    const x = e.pageX - slidesContainer.offsetLeft;
    const walk = (x - startX) * 2;
    slidesContainer.scrollLeft = scrollLeft - walk;
});


slidesContainer.addEventListener('touchstart', (e) => {
    if (!isMobileView()) return;
    startX = e.touches[0].pageX - slidesContainer.offsetLeft;
    scrollLeft = slidesContainer.scrollLeft;
});

slidesContainer.addEventListener('touchmove', (e) => {
    if (!isMobileView()) return;
    const x = e.touches[0].pageX - slidesContainer.offsetLeft;
    const walk = (x - startX) * 2;
    slidesContainer.scrollLeft = scrollLeft - walk;
});


const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;


        faqItem.classList.toggle('active');


        faqQuestions.forEach((item) => {
            if (item !== question) {
                item.parentElement.classList.remove('active');
            }
        });
    });
});


const wrapper = document.querySelector('.testimonial-wrapper');
const slides = document.querySelectorAll('.testimonial-slide');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;

function updateSlidePosition() {
    const offset = -currentIndex * 100;
    wrapper.style.transform = `translateX(${offset}%)`;

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

indicators.forEach((indicator) => {
    indicator.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.getAttribute('data-index'));
        updateSlidePosition();
    });
});

