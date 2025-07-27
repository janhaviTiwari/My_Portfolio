document.addEventListener("DOMContentLoaded", () => {
  // Loader animation
  const loader = document.getElementById("loader");
  window.addEventListener("load", () => {
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 500);
  });

  // Animate skill bars
  const skillProgress = document.querySelectorAll(".skill-progress");
  const animateSkills = () => {
    skillProgress.forEach(bar => {
      const width = bar.getAttribute("data-width");
      bar.style.width = width;
    });
  };
  animateSkills();

  // Skill category filter
  const skillButtons = document.querySelectorAll(".category-btn");
  const skillCategories = document.querySelectorAll(".skill-category");

  skillButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");

      // Toggle active class
      skillButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // Show matching skills
      skillCategories.forEach(categoryBlock => {
        if (category === "all" || categoryBlock.classList.contains(category)) {
          categoryBlock.classList.add("active");
        } else {
          categoryBlock.classList.remove("active");
        }
      });
    });
  });

  
  // Scroll reveal animation (fade-up)
  const fadeElements = document.querySelectorAll(".fade-up");
  const fadeInOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    fadeElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerBottom) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll(); // Initial call

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        status.textContent = "Thanks! Your message has been sent.";
        status.style.color = "green";
        form.reset();
      } else {
        status.textContent = "Oops! Something went wrong.";
        status.style.color = "red";
      }
    } catch (error) {
      status.textContent = "Network error. Please try again.";
      status.style.color = "red";
    }
  });
});
