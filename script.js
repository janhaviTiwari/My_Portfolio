// Project filtering logic
const filterButtons = document.querySelectorAll('.filter-buttons button');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      card.style.display = 
        category === 'all' || card.classList.contains(category)
        ? 'block' : 'none';
    });
  });
});

// ScrollReveal animations
ScrollReveal().reveal('section', {
  delay: 200,
  distance: '50px',
  duration: 800,
  easing: 'ease-in-out',
  origin: 'bottom',
  reset: false
});
ScrollReveal().reveal('.project-card', {
  origin: 'bottom',
  distance: '30px',
  duration: 800,
  delay: 200,
  interval: 150
});
ScrollReveal().reveal('.skills-list li', {
  delay: 100,
  distance: '20px',
  duration: 500,
  origin: 'top',
  interval: 100
});

// Show/hide back-to-top button
const backToTopBtn = document.getElementById("backToTop");
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Typing text animation
const typingText = document.querySelector(".typing-text");
const texts = ["Full Stack Developer", "MERN Enthusiast", "Problem Solver"];
let i = 0, j = 0, isDeleting = false;

function type() {
  if (i < texts.length) {
    typingText.textContent = texts[i].substring(0, j);
    if (!isDeleting) {
      j++;
      if (j === texts[i].length + 1) {
        isDeleting = true;
        setTimeout(type, 1000); // pause before deleting
        return;
      }
    } else {
      j--;
      if (j === 0) {
        isDeleting = false;
        i = (i + 1) % texts.length;
      }
    }
    setTimeout(type, isDeleting ? 50 : 100);
  }
}
type();

ScrollReveal().reveal('.timeline-item', { origin: 'left', distance: '50px', duration: 800, easing: 'ease-in-out' });
ScrollReveal().reveal('.cert-card', { origin: 'bottom', distance: '40px', duration: 800, easing: 'ease-in-out', interval: 100 });
