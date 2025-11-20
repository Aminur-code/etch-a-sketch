console.log("Etch-a-Sketch ready!");

// Function that creates a grid of N x N squares
function createGrid(size) {
  const container = document.querySelector('#container');

  container.innerHTML = ""; 
  // clear previous grid

  // Set up the grid structure
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // Create N*N squares
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square'); 
    container.appendChild(square);
  }
}

// Default grid (Odin uses 16x16)
createGrid(16);