//Burger list 
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    burgerMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });


// opacity of navbar
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("header nav");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        nav.classList.add("transparent-nav");
      } else {
        nav.classList.remove("transparent-nav");
      }
    });
  });

// animation code
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const slider = document.getElementById("heroSlider");
  
    let current = 0;
    let interval;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dots[i].classList.remove("active");
      });
  
      slides[index].classList.add("active");
      dots[index].classList.add("active");
      current = index;
    }
  
    function startSlider() {
      interval = setInterval(() => {
        let next = (current + 1) % slides.length;
        showSlide(next);
      }, 5000);
    }
  
    function stopSlider() {
      clearInterval(interval);
    }
  
    // تحكم بالنقاط
    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        let index = parseInt(dot.dataset.index);
        showSlide(index);
      });
    });
  
    // التوقف عند المرور (على الكمبيوتر فقط)
    if (window.innerWidth > 768) {
      slider.addEventListener("mouseenter", stopSlider);
      slider.addEventListener("mouseleave", startSlider);
    }
  
    // ابدأ
    showSlide(current);
    startSlider();
  });
  

// animation for about section 
const boxes = document.querySelectorAll(".about-box");
window.addEventListener("scroll", () => {
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < window.innerHeight - 100) {
      box.classList.add("show");
    }
  });
});

