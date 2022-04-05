/* Goal: Create 16 divs, each with 16 columns
    Pseudocode:
    let d = Create div element and add to parent to div
    for 16 times, add parent div to d
    Set d to flexbox (evenly spaced)
*/

const ROWS = 16;
const COLUMNS = 16;

gridContainer = document.querySelector('.gridContainer');

function createGrid(numRows, numColumns) {
    rowLoop:
    for(i = 0; i < numRows; i++) {
        rowDiv = document.createElement('div');
        rowDiv.classList.add('rowDiv');
        gridContainer.appendChild(rowDiv);
    
        columnLoop:
        for(let j = 0; j < numColumns; j++) {
            columnDiv = document.createElement('div');
            columnDiv.classList.add('columnDiv');
            columnDiv.addEventListener('mouseover', addHoverEffect);
            rowDiv.appendChild(columnDiv);
        }
    }
}

function addHoverEffect(evt) {
    evt.target.classList.add("hoverEffect");
}

function resetGrid() {
    // delete all grid nodes
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    createGrid(ROWS, COLUMNS);
}

createGrid(ROWS, COLUMNS);

resetButton = document.querySelector('.resetButton');
resetButton.addEventListener('click', resetGrid);

