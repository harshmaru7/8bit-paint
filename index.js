function changeColor(e){
    this.classList.add('clicked')
}

const b = document.querySelector('.buttonz')
const button = document.createElement('button')
button.classList.add('clear')
button.textContent="Clear Grid"
button.style.color="white"
button.style.width='400px';
button.style.height='100px';
button.style.background='black';
button.style.fontFamily="Times New Roman";
button.style.fontSize="42px";
b.appendChild(button)

const buttonc = document.createElement('button');
buttonc.classList.add('create');
buttonc.textContent = "Create Grid";
buttonc.style.color="white"
buttonc.style.width='400px';
buttonc.style.height='100px';
buttonc.style.background='black';
buttonc.style.fontFamily="Times New Roman";
buttonc.style.fontSize="42px";
b.appendChild(buttonc)

function clearGrid(callback){
    const parent = document.querySelector('.container')
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }   
    callback()
}


function createGrid(){
    let n = window.prompt("Enter the size of the grid : ")
    if(n>100){
        n = window.prompt("Enter size less than 100 !")
    }
    const container = document.querySelector('.container')

    for(let i =0 ;i<n*n;i++){
    const grid = document.createElement('div')
    grid.classList.add('boxs')
    container.appendChild(grid)
    const boxs = document.querySelectorAll('.boxs')
    boxs.forEach(box=>box.addEventListener('mouseover',changeColor))
}
}

button.addEventListener("click",clearGrid)

buttonc.addEventListener("click",createGrid)