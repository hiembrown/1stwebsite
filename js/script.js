// Select the specific buttons for "Work," "School," and "Fun"
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    // Check if the clicked button is one of the target buttons (Work, School, Fun)
    if (this.textContent === "Work" || this.textContent === "School" || this.textContent === "Fun") {
      // Add animation class on click
      this.classList.add('animate');

      // Remove the animation class after the animation ends
      setTimeout(() => {
        this.classList.remove('animate');
      }, 300); // Duration of the animation (300ms)
    }
  });
});

// Optional: Add a page transition animation if needed
document.body.classList.add('page-transition'); // This adds the page zoom effect
document.addEventListener('DOMContentLoaded', function() {
  // Add the zoom-out animation class when returning to index.html
  if (window.location.pathname === "/index.html") {
    document.body.classList.add('page-transition-zoom-out');
  }
});
document.addEventListener('DOMContentLoaded', function() {
  // Apply fade-in animation when loading a new page (for work, school, fun pages)
  document.body.classList.add('page-transition-fade-in');

  // Detect if the current page is index.html (for when going back)
  if (window.location.pathname === "/index.html") {
    // Apply fade-out effect if coming back to index.html
    document.body.classList.add('page-transition-fade-out');
  }

  // Remove the class after the animation is complete to allow it to be applied again next time
  setTimeout(() => {
    document.body.classList.remove('page-transition-fade-in', 'page-transition-fade-out');
  }, 750); // Duration of the animation (0.5s)
});
