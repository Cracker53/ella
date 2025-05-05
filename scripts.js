// Get the button and surprise message elements
const btn = document.getElementById('surpriseBtn');
const surprise = document.getElementById('surpriseMsg');

// Event listener to toggle surprise message visibility
btn.addEventListener('click', () => {
  if (surprise.classList.contains('show')) {
    surprise.classList.remove('show');
    btn.textContent = 'Do some roar 🐯';
  } else {
    surprise.classList.add('show');
    btn.textContent = 'Hide surprise 🙈';
  }
});

// Particle effect creation and animation
const colors = ['#ffffff', '#f0e68c', '#ffd700', '#ff69b4'];
const maxParticles = 40;

// Create particles
for (let i = 0; i < maxParticles; i++) {
  let p = document.createElement('div');
  p.classList.add('particle');
  p.style.width = p.style.height = Math.floor(Math.random() * 6 + 4) + 'px';
  p.style.background = colors[Math.floor(Math.random() * colors.length)];
  p.style.top = Math.random() * 100 + 'vh';
  p.style.left = Math.random() * 100 + 'vw';
  p.style.animationDuration = (Math.random() * 15 + 20) + 's';
  p.style.animationName = 'floatUp';
  p.style.opacity = Math.random() * 0.5 + 0.1;
  document.body.appendChild(p);
}

// Add the animation for the particle effect
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`@keyframes floatUp {
  0% { transform: translateY(0); }
  100% { transform: translateY(-120vh); }
}`, styleSheet.cssRules.length);
