const grid = document.getElementById(`grid`);
const gridSize = document.getElementById(`gridSize`);
const gridSizeValue = document.getElementById(`gridSizeValue`);
const cells = document.getElementsByClassName(`cell`);

const defaultValue = 16;

let isDrawing = false;

generateGrid(defaultValue);
gridSizeValue.textContent = `Size: ` + defaultValue + `x` + defaultValue;

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
    let targetColor = window.getComputedStyle(target).backgroundColor;
    let newColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    console.log(`Target color: ` + targetColor);
    console.log(`New color: ` + newColor);
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
});

grid.addEventListener(`mousedown`, (e) => {
    isDrawing = true;
    console.log(e.target);
    colorCell(e.target, 50, 100, 220, 1);
});

grid.addEventListener(`mouseup`, () => {
    isDrawing = false;
});

grid.addEventListener(`mouseover`, (e) => {
    if (isDrawing) {
        console.log(e.target);
    }
});