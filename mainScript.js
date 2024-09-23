// Your existing JavaScript code

// Mouse Trail Effect

const trailCount = 12;
const trails = [];

for (let i = 0; i < trailCount; i++) {
  const trail = document.createElement('div');
  trail.className = 'trail';
  document.body.appendChild(trail);
  trails.push(trail);
}

let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateTrails() {
  trails.forEach((trail, index) => {
    const delay = index * 0.05;
    trail.style.left = mouseX + 'px';
    trail.style.top = mouseY + 'px';
    trail.style.transition = `left 0.1s ease-out ${delay}s, top 0.1s ease-out ${delay}s`;
  });
  requestAnimationFrame(animateTrails);
}

animateTrails();
