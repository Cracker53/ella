// Get elements
const btn = document.getElementById('surpriseBtn');
const surprise = document.getElementById('surpriseMsg');

// Create audio object
const roarSound = new Audio('tiger-roar-loudly-193229.mp3'); // adjust path if needed

btn.addEventListener('click', () => {
  // Play roar sound
  roarSound.currentTime = 0; // rewind to start
  roarSound.play();

  // Toggle message and button text
  if (surprise.classList.contains('show')) {
    surprise.classList.remove('show');
    btn.textContent = 'Do some roar 🐯';
  } else {
    surprise.classList.add('show');
    btn.textContent = 'Quiet now 🙈';
  }
});
