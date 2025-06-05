// Toggle menu
const toggleBtn = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

toggleBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});



 







  // Carousel logic
  const track = document.querySelector('.carousel-track');
  const carouselCards = document.querySelectorAll('.carousel-card');
  const carouselPrevBtn = document.getElementById('prevBtn');
  const carouselNextBtn = document.getElementById('nextBtn');

  let currentCarouselIndex = 0;

  function getVisibleCardCount() {
    const trackWidth = track.offsetWidth;
    const cardWidth = carouselCards[0].offsetWidth + 20; // card + margin
    return Math.floor(trackWidth / cardWidth);
  }

  function moveSlide(step) {
    const visibleCount = getVisibleCardCount();
    const maxIndex = carouselCards.length - visibleCount;

    currentCarouselIndex = Math.max(0, Math.min(currentCarouselIndex + step, maxIndex));
    const cardWidth = carouselCards[0].offsetWidth + 20;
    track.style.transform = `translateX(-${currentCarouselIndex * cardWidth}px)`;

    updateButtons(maxIndex);
  }

  function updateButtons(maxIndex) {
    carouselPrevBtn.disabled = currentCarouselIndex === 0;
    carouselNextBtn.disabled = currentCarouselIndex === maxIndex;

    carouselPrevBtn.style.opacity = carouselPrevBtn.disabled ? 0.5 : 1;
    carouselNextBtn.style.opacity = carouselNextBtn.disabled ? 0.5 : 1;
    carouselPrevBtn.style.cursor = carouselPrevBtn.disabled ? 'not-allowed' : 'pointer';
    carouselNextBtn.style.cursor = carouselNextBtn.disabled ? 'not-allowed' : 'pointer';
  }

  window.addEventListener('resize', () => {
    moveSlide(0); // Recalculate positions
  });

  // Initial check
  window.addEventListener('load', () => {
    moveSlide(0);
  });

  carouselPrevBtn.addEventListener('click', () => {
    moveSlide(-1);
  });

  carouselNextBtn.addEventListener('click', () => {
    moveSlide(1);
  });




  const quotes = [
    {
      text: "Creativity is intelligence having fun.",
      author: "Albert Einstein"
    },
    {
      text: "Design is not just what it looks like and feels like. Design is how it works.",
      author: "Steve Jobs"
    },
    {
      text: "The best way to predict the future is to create it.",
      author: "Peter Drucker"
    },
    {
      text: "Simplicity is the ultimate sophistication.",
      author: "Leonardo da Vinci"
    },
    {
      text: "Your brand is what other people say about you when you’re not in the room.",
      author: "Jeff Bezos"
    }
  ];

  let currentQuote = 0;

  function showNextQuote() {
    const quote = quotes[currentQuote];
    document.getElementById("quote-text").textContent = `"${quote.text}"`;
    document.getElementById("quote-author").textContent = `— ${quote.author}`;
  }
  // Testimonial slider logic
  const slider = document.querySelector('.testimonial-slider');
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  let testimonialIndex = 0;

  function showTestimonialSlide(i) {
    testimonialIndex = i;
    if (testimonialIndex < 0) testimonialIndex = testimonialSlides.length - 1;
    if (testimonialIndex >= testimonialSlides.length) testimonialIndex = 0;
    slider.style.transform = `translateX(-${testimonialIndex * 100}%)`;
  }

  // If you have separate buttons for testimonial slider, use their IDs here
  const testimonialPrevBtn = document.getElementById('testimonialPrevBtn');
  const testimonialNextBtn = document.getElementById('testimonialNextBtn');

  if (testimonialPrevBtn && testimonialNextBtn) {
    testimonialPrevBtn.addEventListener('click', () => {
      showTestimonialSlide(testimonialIndex - 1);
    });

    testimonialNextBtn.addEventListener('click', () => {
      showTestimonialSlide(testimonialIndex + 1);
    });
  }

  // Optional: auto-slide every 15s
  setInterval(() => {
    showTestimonialSlide(testimonialIndex + 1);
  }, 15000);

  nextBtn.addEventListener('click', () => {
    showSlide(index + 1);
  });

  // Optional: auto-slide every 15s
  setInterval(() => {
    showSlide(index + 1);
  }, 15000);



 

  document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('socialToggle');
    const icons = document.getElementById('socialIcons');

    toggle.addEventListener('click', () => {
      icons.classList.toggle('active');
    });
  });

