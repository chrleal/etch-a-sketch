const container = document.querySelector('.container');
container.style.gridTemplate = 'repeat(16, 1fr) / repeat(16, 1fr)'
const clear = document.querySelector('.clear');
const size = document.querySelector('.size')

size.addEventListener('click', sizeGrid);
clear.addEventListener('click', () => {
    let div = container.querySelectorAll('div')
    div.forEach((div) => {
        div.style.backgroundColor = 'white';
    })
});

paintGrid();

//Set the size of the Grid
function sizeGrid() {
    let num = prompt('Choose Grid Size:');
    let size = parseInt(num);
    if (size <= 100) {
        let div = container.querySelectorAll('div')
        div.forEach((div) => {
            div.remove();
        })
        container.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;
        paintGrid(size);
    } else {
        alert("Please, digit a number between 0 and 100.");
    }

}

//Creates each Grid square and paint it when mouse hovers it
function paintGrid(size = 16) {
    for (let i = 0; i < size*size; i++) {
        const divGrid = document.createElement('div');
        divGrid.classList.add('elementGrid');
        container.appendChild(divGrid);
        divGrid.addEventListener('mouseover', function () {
            divGrid.style.backgroundColor = 'black';
        })
    }
}


