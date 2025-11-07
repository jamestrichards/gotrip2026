// ====== MANUAL DONATION SETTINGS ======
// Update these numbers anytime you receive new donations
const goalAmount = 1800;
const currentAmount = 0; // <-- change this number as donations come in
// ======================================

const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');

// Calculate percentage of goal reached
const progressPercent = Math.min((currentAmount / goalAmount) * 100, 100);

// Update the bar and text
progressBar.style.width = progressPercent + '%';
progressText.textContent = `$${currentAmount.toLocaleString()} / $${goalAmount.toLocaleString()} raised`;
