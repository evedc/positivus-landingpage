const slidesContainer = document.getElementById('slides-container');
let isDown = false;
let startX;
let scrollLeft;

slidesContainer.addEventListener('mousedown', (e) => {
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
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slidesContainer.offsetLeft;
    const walk = (x - startX) * 2;
    slidesContainer.scrollLeft = scrollLeft - walk;
});


slidesContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - slidesContainer.offsetLeft;
    scrollLeft = slidesContainer.scrollLeft;
});

slidesContainer.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX - slidesContainer.offsetLeft;
    const walk = (x - startX) * 2;
    slidesContainer.scrollLeft = scrollLeft - walk;
});