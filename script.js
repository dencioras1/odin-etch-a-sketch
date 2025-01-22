const inputGrid = document.getElementById(`gridSize`);
const gridButton = document.getElementById(`gridButton`);

let gridSize = 16;

gridButton.addEventListener(`click`, () => {
    let value = 0;

    if (!isNaN(parseInt(inputGrid.value))) {
        if (parseInt(inputGrid.value) >= 16 && parseInt(inputGrid.value) <= 100) {
            value = parseInt(inputGrid.value);
            console.log(value);
            inputGrid.value = ``;
        }
        else {
            inputGrid.value = ``;
            alert(`Error! Input must a number between 16 and 100`);
        }
    }
    else {
        inputGrid.value = ``;
        alert(`Error! Input must a number between 16 and 100`);
    }

    
    
});