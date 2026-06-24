// Nav shadow on scroll
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

// Hamburger toggle
function toggleMenu() {
  const links = document.getElementById('navLinks');
  const burger = document.getElementById('hamburger');
  links.classList.toggle('open');
  burger.classList.toggle('open');
}

// Close menu when a nav link is clicked
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
  });
});
