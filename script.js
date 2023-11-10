const grid = document.querySelector('.container');
const slider = document.querySelector('#myRange');
let sliderValue = slider.value;
const colorPicker = document.querySelector('#color-picker')
let color = colorPicker.value
const clear = document.querySelector('.clear')
const eraser = document.querySelector('.eraser')
const resolution = document.querySelector('.resoloution')
const rainbow = document.querySelector('.rainbow')
const buttons = document.querySelectorAll('#button')
let realColor = color;
const wipe = 'white'
let activeButton =null;
let currentID = null;

function ChangeColor(id,color){
    let element= document.getElementById(id);
    element.style.backgroundColor = color;
    if(activeButton==='eraser'){
        return
    }else{
    realColor = color
    }
}

function erase(){
        activeButton = 'eraser';
        eraser.style.backgroundColor = 'black';
        color =  wipe;
    
}

function resetErase(){
    activeButton = null;
    eraser.style.backgroundColor = 'grey';
    color = realColor;
}

function wipeGridColor(){
    const pixel = document.querySelectorAll('.pixel')
    for(let i = 0; i < pixel.length; i++){
        pixel[i].style.backgroundColor='white'
    }

}

function genereateGrid(gridSize = 16) {
    let id = 1
    for (let i = 0; i < sliderValue; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        grid.appendChild(row);
        for (let j = 0; j < sliderValue; j++) {
            const pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixel.id = id;
            pixel.addEventListener('click', function() {
            currentID = pixel.id;
            ChangeColor(currentID,color)
            console.log(color)
            });
            row.appendChild(pixel);
            id+=1;
        }
    }
}


function ResetGridContainer() {
    let container = document.querySelector('.container')
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
}

genereateGrid()



slider.addEventListener('input', function(){
    sliderValue= Number(slider.value);
    ResetGridContainer()
    genereateGrid(sliderValue)
    resolution.textContent=""+sliderValue+"x"+sliderValue;
    
})

colorPicker.addEventListener('change',function(){
    color=String(colorPicker.value)
})


buttons.forEach(function(button){
    button.addEventListener('click',function(event){
       //Add button logic here
       const button = event.target.className
       console.log(button)
       switch(button){
        case 'eraser':
            if (activeButton === 'eraser') {
                resetErase();
                }
            else {
                erase();
            } 
            break;

        case 'clear':
            wipeGridColor();
            clear.style.backgroundColor = 'black';
            setTimeout(function() {clear.style.backgroundColor = 'grey';}, 100);

        case 'color':
            

       }
       

    })
})

