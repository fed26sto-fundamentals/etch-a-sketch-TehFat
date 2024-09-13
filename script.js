
const container = document.getElementById('container');

// Function to create the grid
function createGrid(size) {

    // Clear the container
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
     container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    const squareSize = 960 / size;
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        // Add a class to style the div
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener('mouseover', function () {
            square.classList.add("hover-effect");
            // Change the background color when hovered
            square.style.backgroundColor = randomColor();  
        });

        function randomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        container.appendChild(square);
    }
}
function promptForGridSize() {
    let size = prompt("Enter the number of squares per side for the new grid (max 100):");


    gridSize = parseInt(size);
    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    createGrid(gridSize);
}

document.getElementById('button').addEventListener('click', promptForGridSize);


// Create the initial 16x16 grid
createGrid(16);



