const container = document.querySelector('#container');

function createGrid(size) {
  // total squares = size * size
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square'); 
    // optional class
    square.style.border = '1px solid #ddd'; 
    // to see the squares
    container.appendChild(square);
  }

  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

createGrid(16);