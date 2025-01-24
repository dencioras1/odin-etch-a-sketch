// Variables for the grid, and related stuff
const grid = document.getElementById(`grid`);
const gridSize = document.getElementById(`gridSize`);
const gridSizeValue = document.getElementById(`gridSizeValue`);
const cells = document.getElementsByClassName(`cell`);
const defaultSize = 16;
let currentSize = 16;

// Variables for the RGB values of the pencil
const redPencil = document.getElementById(`redPencil`);
const redPencilValue = document.getElementById(`redPencilValue`);
const greenPencil = document.getElementById(`greenPencil`);
const greenPencilValue = document.getElementById(`greenPencilValue`);
const bluePencil = document.getElementById(`bluePencil`);
const bluePencilValue = document.getElementById(`bluePencilValue`);
const alphaPencil = document.getElementById(`alphaPencil`);
const alphaPencilValue = document.getElementById(`alphaPencilValue`);

// Variables for the background color

const clearButton = document.getElementById(`clear`);

let isDrawing = false;

generateGrid(defaultSize);

gridSizeValue.textContent = `Size: ` + defaultSize + `x` + defaultSize;
redPencilValue.textContent = `Red: ` + 0;
greenPencilValue.textContent = `Green: ` + 0;
bluePencilValue.textContent = `Blue: ` + 0;
alphaPencilValue.textContent = `Alpha: ` + 1;

function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function generateGrid(size) {
    clearGrid();

    for (let i = 0; i < size; i++) {
        let row = document.createElement(`div`);
        row.className = `row`;
        row.id = i;
        for (let j = 0; j < size; j++) {
            let cell = document.createElement(`div`);
            cell.className = `cell`;
            cell.id = j;
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

function colorCell(target, red, green, blue, alpha) {
    let newColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    target.style.backgroundColor = newColor;
}

gridSize.addEventListener(`mousedown`, (e) => {
    gridSize.addEventListener(`mousemove`, () => {
        console.log(e.target.value);
        gridSizeValue.textContent = `Size: ` + e.target.value + `x` + e.target.value;
    });
});

gridSize.addEventListener(`mouseup`, (e) => {
    generateGrid(e.target.value);
    currentSize = e.target.value;
});

redPencil.addEventListener(`mousedown`, (e) => {
    redPencil.addEventListener(`mousemove`, () => {
        console.log(e.target.value);
        redPencilValue.textContent = `Red: ` + e.target.value;
    });
});

greenPencil.addEventListener(`mousedown`, (e) => {
    greenPencil.addEventListener(`mousemove`, () => {
        console.log(e.target.value);
        greenPencilValue.textContent = `Green: ` + e.target.value;
    });
});

bluePencil.addEventListener(`mousedown`, (e) => {
    bluePencil.addEventListener(`mousemove`, () => {
        console.log(e.target.value);
        bluePencilValue.textContent = `Blue: ` + e.target.value;
    });
});

alphaPencil.addEventListener(`mousedown`, (e) => {
    alphaPencil.addEventListener(`mousemove`, () => {
        console.log(e.target.value);
        alphaPencilValue.textContent = `Alpha: ` + e.target.value;
    });
});

grid.addEventListener(`mousedown`, (e) => {
    isDrawing = true;
    console.log(e.target);
    colorCell(e.target, redPencil.value, greenPencil.value, bluePencil.value, alphaPencil.value);
});

grid.addEventListener(`mouseup`, () => {
    isDrawing = false;
});

grid.addEventListener(`mouseover`, (e) => {
    if (isDrawing) {
        colorCell(e.target, redPencil.value, greenPencil.value, bluePencil.value, alphaPencil.value);
    }
});

clearButton.addEventListener(`click`, () => {
    generateGrid(currentSize);
});