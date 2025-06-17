// Smooth Scroll for Navigation Links (if added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Typing Effect (for headline)
const texts = ["Web Developer", "Tech Enthusiast", "Future ML Scientist"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function typeEffect() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector("h1").textContent = `Hi, I'm Subh — ${letter}`;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(typeEffect, 2000); // Pause before next word
  } else {
    setTimeout(typeEffect, 100);
  }
})();
