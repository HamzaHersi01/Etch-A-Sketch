let gridSize = document.getElementById("myRange").value;
const grid = document.getElementsByClassName = "grid";

function createGrid(gridSize){
    
    for(let i = 0; i < gridSize; i++) {
        const div = document.createElement("div");
        console.log(div)
        div.className="square";
        grid.appendChild(document.createTextNode(div));
    }
}

createGrid(gridSize);
