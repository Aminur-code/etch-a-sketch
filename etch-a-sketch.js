console.log("Etch-a-Sketch ready!");

// Function to create a grid
function createGrid(size) {
  const container = document.querySelector('#container');
  container.innerHTML = ""; // Clear old grid

  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');

    // Hover effect
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'black';
    });

    container.appendChild(square);
  }
}

// Default 16x16 grid
createGrid(16);

// Reset button
const resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', () => {
  let newSize = prompt("Enter new grid size (max 100):");
  newSize = parseInt(newSize);
  if (newSize && newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Invalid size");
  }
});