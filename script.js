const grid = document.getElementById(`grid`);
const gridSize = document.getElementById(`gridSize`);
const gridSizeValue = document.getElementById(`gridSizeValue`);
const cells = document.getElementsByClassName(`cell`);

const red = document.getElementById(`red`);
const redValue = document.getElementById(`redValue`);
const green = document.getElementById(`green`);
const greenValue = document.getElementById(`greenValue`);
const blue = document.getElementById(`blue`);
const blueValue = document.getElementById(`blueValue`);
const alpha = document.getElementById(`alpha`);
const alphaValue = document.getElementById(`alphaValue`);

const clearButton = document.getElementById(`clear`);

const defaultSize = 16;
let currentSize = 16;

let isDrawing = false;

generateGrid(defaultSize);

gridSizeValue.textContent = `Size: ` + defaultSize + `x` + defaultSize;
redValue.textContent = `Red: ` + 0;
greenValue.textContent = `Green: ` + 0;
blueValue.textContent = `Blue: ` + 0;
alphaValue.textContent = `Alpha: ` + 1;

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

red.addEventListener(`mousedown`, (e) => {
    red.addEventListener(`mousemove`, () => {
        console.log(e.target.value);
        redValue.textContent = `Red: ` + e.target.value;
    });
});

green.addEventListener(`mousedown`, (e) => {
    green.addEventListener(`mousemove`, () => {
        console.log(e.target.value);
        greenValue.textContent = `Green: ` + e.target.value;
    });
});

blue.addEventListener(`mousedown`, (e) => {
    blue.addEventListener(`mousemove`, () => {
        console.log(e.target.value);
        blueValue.textContent = `Blue: ` + e.target.value;
    });
});

alpha.addEventListener(`mousedown`, (e) => {
    alpha.addEventListener(`mousemove`, () => {
        console.log(e.target.value);
        alphaValue.textContent = `Alpha: ` + e.target.value;
    });
});

grid.addEventListener(`mousedown`, (e) => {
    isDrawing = true;
    console.log(e.target);
    colorCell(e.target, red.value, green.value, blue.value, alpha.value);
});

grid.addEventListener(`mouseup`, () => {
    isDrawing = false;
});

grid.addEventListener(`mouseover`, (e) => {
    if (isDrawing) {
        colorCell(e.target, red.value, green.value, blue.value, alpha.value);
    }
});

clearButton.addEventListener(`click`, () => {
    generateGrid(currentSize);
});