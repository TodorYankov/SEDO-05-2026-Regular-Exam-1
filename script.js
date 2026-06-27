// Helper to apply color to box with error handling
function applyColor(color) {
  try {
    const box = document.getElementById('box');
    if (box) {
      box.style.backgroundColor = color;
    } else {
      console.warn('Box element not found');
    }
  } catch (e) {
    console.warn('Invalid color:', color, e);
  }
}

// Apply text input color with validation
document.getElementById('apply-btn').addEventListener('click', function() {
  const color = document.getElementById('color-input').value.trim();
  if (color) {
    applyColor(color);
  } else {
    console.warn('Empty color input ignored');
  }
});

// Generate a random hex color (always 6 digits)
function generateRandomHex() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

// Apply random color on button click
document.getElementById('random-btn').addEventListener('click', function() {
  const color = generateRandomHex();
  applyColor(color);
});

