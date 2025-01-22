const inputGrid = document.getElementById(`gridSize`);
const gridButton = document.getElementById(`gridButton`);

gridButton.addEventListener(`click`, () => {
    let value = parseInt(inputGrid.value);
    inputGrid.value = ``;

    console.log(value);
});