const container = document.querySelector('.container')

for(let i =0 ;i<16*16;i++){
    const grid = document.createElement('div')
    grid.classList.add('boxs')
    container.appendChild(grid)
}

function changeColor(e){
    this.classList.add('clicked')
    console.log(e.style)
    
}

const boxs = document.querySelectorAll('.boxs')
boxs.forEach(box=>box.addEventListener('mouseover',changeColor))

const b = document.querySelector('.body')
const button = document.createElement('button')
button.classList.add('clear')
button.textContent="Clear Grid"
button.style.color="blue"
button.style.width='400px';
button.style.height='100px';
button.style.background='pink';
b.appendChild(button)

function createGrid(){
    window.prompt("Enter the grid size: ")
}

function clearGrid(e,createGrid){
    const parent = document.querySelector('.container')
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }

    
}



button.addEventListener("click",clearGrid)

