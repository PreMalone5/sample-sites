document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector('.industry-grid');
    const btnPrev = document.querySelector('.slider-btn.prev');
    const btnNext = document.querySelector('.slider-btn.next');
  
    // Get one slider item to determine the scroll amount
    const sliderItem = document.querySelector('.slider');
    // Include gap (here, assumed 16px, adjust if needed)
    let scrollAmount = sliderItem ? sliderItem.clientWidth + 16 : 320;
  
    btnPrev.addEventListener('click', function () {
      sliderContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });
  
    btnNext.addEventListener('click', function () {
      sliderContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
  });
  