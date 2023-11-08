const grid = document.querySelector('.container');
const slider = document.querySelector('#myRange');
const sliderValue = slider.value;
console.log(sliderValue);

function genereateGrid(gridSize = 16) {
    for (let i = 0; i < sliderValue; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        grid.appendChild(row);
        for (let j = 0; j < sliderValue; j++) {
            const pixel = document.createElement('div');
            pixel.className = 'pixel';
            row.appendChild(pixel);
        }
    }
}

function ResetGridContainer() {
    for (let i = 0; i < sliderValue; i++) {
        const rowToRemove = document.querySelector('.row');
        grid.removeChild(rowToRemove);
    }
}

genereateGrid();

