// variables to create our Etch a Sketch grid
const defaultSize = 500;
let rows = 16;
let columns = 16;


// Create the width and height of our divs in the container by determining the number of pixels
const gridSketch = document.querySelector('#gridContainer');
gridSketch.style.width = `${gridSketch}px`;
gridSketch.style.height = `${gridSketch}px`;


// This function will create the actual divs/cells inside the grid container, using the variables of the default grid size, rows, columns, width and height
function createCells() {
    for (let i = 0; i < (rows * columns); i++) {
        const cellCreation = document.createElement('div');
        cellCreation.style.width = `${(gridSketch / columns) - 2}px`;
        cellCreation.style.height = `${(gridSketch / rows) - 2}px`;
        
        cellCreation.classList.add('cells');
        gridSketch.appendChild(cellCreation);
    }
}