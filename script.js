// variables to create our Etch a Sketch grid
const defaultSize = 500;
let eachCell = 16;


// Create the width and height of our divs in the container by determining the number of pixels
const gridSketch = document.querySelector("#gridContainer");
gridSketch.style.width = gridSketch.style.height = `${defaultSize}px`;


// Input range functionality for resizing the grid
const slideContainer = document.querySelector("#gridSlideContainer");
const slide = document.querySelector("#slide");
const rangeValue = document.querySelector("#valueSlide");
rangeValue.textContent = `${slide.value} x ${slide.value} (Grid)`;


// An eventlistener with the function draw created to draw over the gridSketch container
function draw() {
    this.style.backgroundColor = "black";
}


// This function will create the actual divs/cells inside the grid container, using the variables of the default grid size, rows, columns, width and height
function createCells(eachCell) {
    const numberOfCells = (eachCell * eachCell);
    const widthHeight = `${(defaultSize / eachCell) - 2}px`;

    for (let i = 0; i < numberOfCells; i++) {
        const cellCreation = document.createElement("div");
        cellCreation.style.width = cellCreation.style.height = widthHeight;

        cellCreation.classList.add("cells");
        gridSketch.appendChild(cellCreation);

        cellCreation.addEventListener("mouseover", draw);
    }
}


//This function will reset grid/remove cells every time we change the grid size resolution
function resetGrid() {
    while (gridSketch.firstChild) {
        gridSketch.removeChild(gridSketch.firstChild);
    }
}


// Eventlistener added for the functionality of the grid slide tab to reset the grid
slide.oninput = function () {
    let inputText = `${this.value} x ${this.value} (Grid)`;
    rangeValue.innerHTML = inputText;
    resetGrid();
    createCells(this.value);
}


createCells(16);