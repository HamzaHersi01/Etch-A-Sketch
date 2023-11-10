const grid = document.querySelector('.container');
const slider = document.querySelector('#myRange');
let sliderValue = slider.value;
const colorPicker = document.querySelector('#color-picker')
let color = colorPicker.value
const clear = document.querySelector('.clear')
const colorButton = document.querySelector('.color')
const eraser = document.querySelector('.eraser')
const resolution = document.querySelector('.resoloution')
const rainbow = document.querySelector('.rainbow')
const buttons = document.querySelectorAll('#button')
let realColor = color;
let randomColor = null;
const wipe = 'white'
let activeButton =null;
let currentID = null;
let mouseDown = false

function ChangeColor(id,color){
    let element= document.getElementById(id);
    element.style.backgroundColor = color;
    if(activeButton==='eraser' || activeButton ==='rainbow'){
        return
    }else{
    realColor = color
    }
}

function GenerateRandomColor(){
    const val1 = Math.random()*255;
    const val2 = Math.random()*255;
    const val3 = Math.random()*255;
    randomColor = `rgb(${val1}, ${val2}, ${val3})`;

}

function setButtonColor(button){
    button.style.backgroundColor = 'black';
}

function resetButtonColor(button){
    button.style.backgroundColor = 'grey';
}

function erase(){
        activeButton = 'eraser';
        color =  wipe;
    
}

function colorMode(){
    activeButton='color';
    color = realColor
}
function rainbowMode(){
    GenerateRandomColor();
    activeButton='rainbow';
}

function disableColor_Rainbow(){
    activeButton = null;
}



function resetErase(){
    activeButton = null;
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
            pixel.addEventListener('mouseover', function() {
            if(mouseDown){
                currentID = pixel.id;
                if(activeButton === 'color' || activeButton === 'eraser'){
                    console.log('Color/Eraser');
                   ChangeColor(currentID,color);
                }else if(activeButton === 'rainbow'){
                    console.log('rainbow mode in event lstner')
                    GenerateRandomColor();
                   ChangeColor(currentID, randomColor)
                 }
            }
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
setButtonColor(colorButton);
colorMode();
genereateGrid()

document.addEventListener('mousedown', function(){
    mouseDown = true;
})

document.addEventListener('mouseup', function(){
    mouseDown = false;
})

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
                resetButtonColor(eraser)
                }
            else {
                if(activeButton){
                    resetButtonColor(document.querySelector('.'+activeButton))
                }
                erase();
                setButtonColor(eraser)
            } 
            break;

        case 'clear':
            wipeGridColor();
            clear.style.backgroundColor = 'black';
            setTimeout(function() {clear.style.backgroundColor = 'grey';}, 100);
            break;

        case 'color':
            if(activeButton === 'color'){
                disableColor_Rainbow()
                resetButtonColor(colorButton);
                console.log(activeButton)
            }else{
                if(activeButton){
                    resetButtonColor(document.querySelector('.'+activeButton))
                }
                setButtonColor(colorButton);
                colorMode();
                
            }

            break;
        case 'rainbow':
            if(activeButton==='rainbow'){
                disableColor_Rainbow()
                resetButtonColor(rainbow);
            }else{
                if(activeButton){
                    resetButtonColor(document.querySelector('.'+activeButton))
                }
                setButtonColor(rainbow);
                rainbowMode();
            }
            

       }
       

    })
    console.log(activeButton)
})

