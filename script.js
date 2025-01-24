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
const redBackground = document.getElementById(`redBackground`);
const redBackgroundValue = document.getElementById(`redBackgroundValue`);
const greenBackground = document.getElementById(`greenBackground`);
const greenBackgroundValue = document.getElementById(`greenBackgroundValue`);
const blueBackground = document.getElementById(`blueBackground`);
const blueBackgroundValue = document.getElementById(`blueBackgroundValue`);
const alphaBackground = document.getElementById(`alphaBackground`);
const alphaBackgroundValue = document.getElementById(`alphaBackgroundValue`);

// Variable for the selected tools
const pencil = document.getElementById(`pencil`);
const brush = document.getElementById(`brush`);
const eraser = document.getElementById(`eraser`);

const clearButton = document.getElementById(`clear`);

let isDrawing = false;

generateGrid(defaultSize);

// Initialize displayed values on the webpage
gridSizeValue.textContent = defaultSize + `x` + defaultSize;
redPencilValue.textContent = `Red: ` + 0;
greenPencilValue.textContent = `Green: ` + 0;
bluePencilValue.textContent = `Blue: ` + 0;
alphaPencilValue.textContent = `Alpha: ` + 1;
redBackgroundValue.textContent = `Red: ` + 255;
greenBackgroundValue.textContent = `Green: ` + 255;
blueBackgroundValue.textContent = `Blue: ` + 255;
alphaBackgroundValue.textContent = `Alpha: ` + 1;

console.log(pencil.checked);
console.log(brush.checked);
console.log(eraser.checked);

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
    currentSize = size;
    colorCells(redBackground.value, greenBackground.value, blueBackground.value, alphaBackground.value);
}

function colorCell(target, red, green, blue, alpha) {
    let newColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    target.style.backgroundColor = newColor;
}

function colorCells(red, green, blue, alpha) {
    for (let i = 0; i < currentSize; i++) {
        for (let j = 0; j < currentSize; j++) {
            colorCell(cells[i * currentSize + j], red, green, blue, alpha);
        }
    }
}

gridSize.addEventListener(`mousedown`, (e) => {
    gridSize.addEventListener(`mousemove`, () => {
        gridSizeValue.textContent = e.target.value + `x` + e.target.value;
    });
});

gridSize.addEventListener(`mouseup`, (e) => {
    generateGrid(e.target.value);
    currentSize = e.target.value;
});

redPencil.addEventListener(`mousedown`, (e) => {
    redPencil.addEventListener(`mousemove`, () => {
        redPencilValue.textContent = `Red: ` + e.target.value;
    });
});

greenPencil.addEventListener(`mousedown`, (e) => {
    greenPencil.addEventListener(`mousemove`, () => {
        greenPencilValue.textContent = `Green: ` + e.target.value;
    });
});

bluePencil.addEventListener(`mousedown`, (e) => {
    bluePencil.addEventListener(`mousemove`, () => {
        bluePencilValue.textContent = `Blue: ` + e.target.value;
    });
});

alphaPencil.addEventListener(`mousedown`, (e) => {
    alphaPencil.addEventListener(`mousemove`, () => {
        alphaPencilValue.textContent = `Alpha: ` + e.target.value;
    });
});

redBackground.addEventListener(`mousedown`, (e) => {
    redBackground.addEventListener(`mousemove`, () => {
        redBackgroundValue.textContent = `Red: ` + e.target.value;
    });
});

greenBackground.addEventListener(`mousedown`, (e) => {
    greenBackground.addEventListener(`mousemove`, () => {
        greenBackgroundValue.textContent = `Green: ` + e.target.value;
    });
});

blueBackground.addEventListener(`mousedown`, (e) => {
    blueBackground.addEventListener(`mousemove`, () => {
        blueBackgroundValue.textContent = `Blue: ` + e.target.value;
    });
});

alphaBackground.addEventListener(`mousedown`, (e) => {
    alphaBackground.addEventListener(`mousemove`, () => {
        alphaBackgroundValue.textContent = `Alpha: ` + e.target.value;
    });
});

redBackground.addEventListener(`mouseup`, () => {
    colorCells(redBackground.value, greenBackground.value, blueBackground.value, alphaBackground.value);
});

greenBackground.addEventListener(`mouseup`, () => {
    colorCells(redBackground.value, greenBackground.value, blueBackground.value, alphaBackground.value);
});

blueBackground.addEventListener(`mouseup`, () => {
    colorCells(redBackground.value, greenBackground.value, blueBackground.value, alphaBackground.value);
});

alphaBackground.addEventListener(`mouseup`, () => {
    colorCells(redBackground.value, greenBackground.value, blueBackground.value, alphaBackground.value);
});

grid.addEventListener(`mousedown`, (e) => {
    isDrawing = true;
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

pencil.addEventListener(`click`, () => {
    console.log(pencil.checked);
    console.log(brush.checked);
    console.log(eraser.checked);
});

brush.addEventListener(`click`, () => {
    console.log(pencil.checked);
    console.log(brush.checked);
    console.log(eraser.checked);
});

eraser.addEventListener(`click`, () => {
    console.log(pencil.checked);
    console.log(brush.checked);
    console.log(eraser.checked);
});