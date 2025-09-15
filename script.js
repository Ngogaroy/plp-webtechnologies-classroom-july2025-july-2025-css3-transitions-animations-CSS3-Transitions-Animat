// Global variable
let box = document.querySelector('.box');
let cards = document.querySelectorAll('.card');

// Function with parameters & return
function changeBox(color, scale, animationClass = null) {
  box.style.background = color;
  box.style.transform = `scale(${scale})`;
  
  if (animationClass) {
    box.classList.add(animationClass);
  }
  return `Box changed to ${color}, scaled ${scale}, animation: ${animationClass || "none"}`;
}

// Reset function
function resetBox() {
  box.className = "box"; // remove all animations
  box.style.background = "tomato";
  box.style.transform = "scale(1)";
}

// Animate button
document.getElementById('animateBtn').addEventListener('click', () => {
  resetBox();
  console.log(changeBox('purple', 1.2, 'bouncing'));
});

// Reset button
document.getElementById('resetBtn').addEventListener('click', () => {
  resetBox();
  console.log("Box reset");
});

// Cards interaction (extra JS fun!)
cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    if (index === 2) { // third card triggers spin
      resetBox();
      console.log(changeBox('gold', 1.1, 'spinning'));
    }
  });
});

// Modal open/close
const modal = document.getElementById('modal');
document.getElementById('openModalBtn').addEventListener('click', () => {
  modal.style.display = 'flex';
  modal.classList.add('show');
});
document.getElementById('closeModalBtn').addEventListener('click', () => {
  modal.classList.remove('show');
  setTimeout(() => { modal.style.display = 'none'; }, 500);
});
