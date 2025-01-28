// Variable for entire space outside the grid
const gridOutside = document.getElementById(`window`);

// Variable for download button
const downloadLink = document.getElementById(`download`);

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
let brushStrength = 0.1;    // Increment for the alpha value of a grid cell
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
    colorBackground(redBackground.value, greenBackground.value, blueBackground.value, alphaBackground.value);
}

function colorCell(target, red, green, blue, alpha) {
    let newColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    target.style.backgroundColor = newColor;
}

function colorBackground(red, green, blue, alpha) {
    let newColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    grid.style.backgroundColor = newColor;
}

function downloadGridImage() {
    let backgroundCanvas = document.createElement(`canvas`);
    let backgroundContext = backgroundCanvas.getContext(`2d`);
    let drawingCanvas = document.createElement(`canvas`);
    let drawingContext = drawingCanvas.getContext(`2d`);
    let imageCanvas = document.createElement(`canvas`);
    let imageContext = imageCanvas.getContext(`2d`);
    let colorDraw;

    backgroundCanvas.width = parseInt(currentSize + 1);
    backgroundCanvas.height = parseInt(currentSize + 1);
    drawingCanvas.width = parseInt(currentSize + 1);
    drawingCanvas.height = parseInt(currentSize + 1);
    imageCanvas.width = parseInt(currentSize + 1);
    imageCanvas.height = parseInt(currentSize + 1);

    backgroundContext.imageSmoothingEnabled = false;
    drawingContext.imageSmoothingEnabled = false;
    imageContext.imageSmoothingEnabled = false;

    let backgroundColor = `rgba(${redBackground.value}, ${greenBackground.value}, ${blueBackground.value}, ${alphaBackground.value})`;
    backgroundContext.fillStyle = backgroundColor;
    backgroundContext.fillRect(0, 0, currentSize, currentSize);

    drawingContext.fillStyle = `rgba(0, 0, 0, 0)`;
    drawingContext.fillRect(0, 0, currentSize, currentSize);

    for (let i = 0; i < currentSize; i++) {
        for (let j = 0; j < currentSize; j++) {
            colorDraw = cells[currentSize * i + j].style.backgroundColor;
            drawingContext.fillStyle = colorDraw;
            drawingContext.fillRect(j, i, 1, 1);
            drawingContext.fillStyle = `rgba(0, 0, 0, 0)`;
        }
    }

    imageContext.drawImage(backgroundCanvas, 0, 0);
    imageContext.drawImage(drawingCanvas, 0, 0);
    imageContext.scale(100, 100);

    const png = imageCanvas.toDataURL(`image/png`);
    downloadLink.href = png;
    console.log(png);
    downloadLink.download = `Sketch-That-Was-Etched.png`;
}

download.addEventListener(`click`, () => {
    downloadGridImage();
});

gridSize.addEventListener(`mousedown`, (e) => {
    gridSize.addEventListener(`mouseup`, () => {
        gridSizeValue.textContent = e.target.value + `x` + e.target.value;
    });
    gridSize.addEventListener(`mousemove`, () => {
        gridSizeValue.textContent = e.target.value + `x` + e.target.value;
    });
});

gridSize.addEventListener(`mouseup`, (e) => {
    generateGrid(e.target.value);
    currentSize = e.target.value;
});

redPencil.addEventListener(`mousedown`, (e) => {
    redPencil.addEventListener(`mouseup`, () => {
        redPencilValue.textContent = `Red: ` + e.target.value;
    });
    redPencil.addEventListener(`mousemove`, () => {
        redPencilValue.textContent = `Red: ` + e.target.value;
    });
});

greenPencil.addEventListener(`mousedown`, (e) => {
    greenPencil.addEventListener(`mouseup`, () => {
        greenPencilValue.textContent = `Green: ` + e.target.value;
    });
    greenPencil.addEventListener(`mousemove`, () => {
        greenPencilValue.textContent = `Green: ` + e.target.value;
    });
});

bluePencil.addEventListener(`mousedown`, (e) => {
    bluePencil.addEventListener(`mouseup`, () => {
        bluePencilValue.textContent = `Blue: ` + e.target.value;
    });
    bluePencil.addEventListener(`mousemove`, () => {
        bluePencilValue.textContent = `Blue: ` + e.target.value;
    });
});

alphaPencil.addEventListener(`mousedown`, (e) => {
    alphaPencil.addEventListener(`mouseup`, () => {
        alphaPencilValue.textContent = `Alpha: ` + e.target.value;
    });
    alphaPencil.addEventListener(`mousemove`, () => {
        alphaPencilValue.textContent = `Alpha: ` + e.target.value;
    });
});

redBackground.addEventListener(`mousedown`, (e) => {
    redBackground.addEventListener(`mouseup`, () => {
        redBackgroundValue.textContent = `Red: ` + e.target.value;
    });
    redBackground.addEventListener(`mousemove`, () => {
        redBackgroundValue.textContent = `Red: ` + e.target.value;
    });
});

greenBackground.addEventListener(`mousedown`, (e) => {
    greenBackground.addEventListener(`mouseup`, () => {
        greenBackgroundValue.textContent = `Green: ` + e.target.value;
    });
    greenBackground.addEventListener(`mousemove`, () => {
        greenBackgroundValue.textContent = `Green: ` + e.target.value;
    });
});

blueBackground.addEventListener(`mousedown`, (e) => {
    blueBackground.addEventListener(`mouseup`, () => {
        blueBackgroundValue.textContent = `Blue: ` + e.target.value;
    });
    blueBackground.addEventListener(`mousemove`, () => {
        blueBackgroundValue.textContent = `Blue: ` + e.target.value;
    });
});

alphaBackground.addEventListener(`mousedown`, (e) => {
    alphaBackground.addEventListener(`mouseup`, () => {
        alphaBackgroundValue.textContent = `Alpha: ` + e.target.value;
    });
    alphaBackground.addEventListener(`mousemove`, () => {
        alphaBackgroundValue.textContent = `Alpha: ` + e.target.value;
    });
});

redBackground.addEventListener(`mouseup`, () => {
    colorBackground(redBackground.value, greenBackground.value, blueBackground.value, alphaBackground.value);
});

greenBackground.addEventListener(`mouseup`, () => {
    colorBackground(redBackground.value, greenBackground.value, blueBackground.value, alphaBackground.value);
});

blueBackground.addEventListener(`mouseup`, () => {
    colorBackground(redBackground.value, greenBackground.value, blueBackground.value, alphaBackground.value);
});

alphaBackground.addEventListener(`mouseup`, () => {
    colorBackground(redBackground.value, greenBackground.value, blueBackground.value, alphaBackground.value);
});

grid.addEventListener(`mousedown`, (e) => {
    e.preventDefault();
    isDrawing = true;

    if (pencil.checked) {
        colorCell(e.target, redPencil.value, greenPencil.value, bluePencil.value, alphaPencil.value);
    }
    if (brush.checked) {
        let temp = window.getComputedStyle(e.target).backgroundColor;
        temp = temp.split(`,`);
        console.log(temp);

        if (temp[0].includes(`rgba`)) {
            let alpha = temp[temp.length - 1];
            alpha = alpha.slice(0, alpha.length - 1);
            alpha.trim();
            console.log(`Is RGBA`);
            console.log(alpha);
            colorCell(e.target, redPencil.value, greenPencil.value, bluePencil.value, parseFloat(alpha) + 0.1);
        }
    }
    if (eraser.checked) {
        colorCell(e.target, 0, 0, 0, 0);
    }
});

grid.addEventListener(`mouseup`, () => {
    isDrawing = false;
});

grid.addEventListener(`mouseover`, (e) => {
    if (isDrawing && pencil.checked) {
        colorCell(e.target, redPencil.value, greenPencil.value, bluePencil.value, alphaPencil.value);

    }
    if (isDrawing && brush.checked) {
        let temp = window.getComputedStyle(e.target).backgroundColor;
        temp = temp.split(`,`);
        console.log(temp);

        if (temp[0].includes(`rgba`)) {
            let alpha = temp[temp.length - 1];
            alpha = alpha.slice(0, alpha.length - 1);
            alpha.trim();
            console.log(`Is RGBA`);
            console.log(alpha);
            colorCell(e.target, redPencil.value, greenPencil.value, bluePencil.value, parseFloat(alpha) + 0.1);
        }
    }
    if (isDrawing && eraser.checked) {
        colorCell(e.target, redBackground.value, greenBackground.value, blueBackground.value, alphaBackground.value);
    }
});

clearButton.addEventListener(`click`, () => {
    generateGrid(currentSize);
});

gridOutside.addEventListener(`mouseup`, () => {
    isDrawing = false;
});