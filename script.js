const grid = document.querySelector('.container');
const slider = document.querySelector('#myRange');
const sliderValue = slider.value;
const clear = document.querySelector('.clear')
const eraser = document.querySelector('.eraser')
let color = 'red';
const wipe = 'white'
const pixels = document.querySelectorAll('.pixel');
let activeButton =null

function ChangeColor(element,color){
    element.style.backgroundColor = color;
    realColor =color
}

function erase(){
    ChangeColor(pixel, wipe)
    if(activeButton!='eraser'){
    eraser.style.backgroundColor = 'black'
    activeButton='eraser'
    }else{
    activeButton=null
    eraser.style.backgroundColor= 'grey'
    color= realColor
    
    }
    
}

function wipeGridColor(){
    const pixel = document.querySelectorAll('.pixel')
    for(let i = 0; i < pixel.length; i++){
        pixel[i].style.backgroundColor='white'
    }

}

function genereateGrid(gridSize = 16) {
    for (let i = 0; i < sliderValue; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        grid.appendChild(row);
        for (let j = 0; j < sliderValue; j++) {
            const pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixel.addEventListener('click', function() {
            ChangeColor(pixel,color)
            });
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

genereateGrid()

clear.addEventListener('click', function(){
    wipeGridColor()
})

eraser.addEventListener('click', function(){
    erase()
})

