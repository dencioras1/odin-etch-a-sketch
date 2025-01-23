const inputGrid = document.getElementById(`gridSize`);
const gridButton = document.getElementById(`gridButton`);
const grid = document.getElementById(`grid`);
let gridSize = 16;

generateGrid(gridSize);

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

gridSize.addEventListener(`mousedown`, function(e) {
    console.log(e.target);
});