/* Goal: Create 16 divs, each with 16 columns
    Pseudocode:
    let d = Create div element and add to parent to div
    for 16 times, add parent div to d
    Set d to flexbox (evenly spaced)
*/

const DEFAULT_ROWS = 16;
const DEFAULT_COLUMNS = 16;
const GRID_WIDTH = 960;


function createGrid(numRows, numColumns) {
    for(let i = 0; i < numRows; i++) {
        rowDiv = document.createElement('div');
        rowDiv.classList.add('rowDiv');
        
        gridContainer.appendChild(rowDiv);
    
        for(let j = 0; j < numColumns; j++) {
            columnDiv = document.createElement('div');
            columnDiv.classList.add('columnDiv');
            columnDiv.addEventListener('mouseover', mouseOverOptionFunc);
            
            rowDiv.appendChild(columnDiv);
        }
    }
}


function changeColorDefault(evt) {
    evt.target.style.backgroundColor = 'black';
}

function changeColorEraser(evt) {
    evt.target.style.backgroundColor = '';
}

function changeColorRainbow(evt) {
    let rgbArr = '';
    if(evt.target.style.backgroundColor == '') {
        // randomise from 0 - 255
        let r = Math.floor(Math.random() * (255 + 1));
        let g = Math.floor(Math.random() * (255 + 1));
        let b = Math.floor(Math.random() * (255 + 1));

        // evt.target.classList.add("hoverEffect");
        evt.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
    else {
        let currentRGB = evt.target.style.backgroundColor;
        rgbArr = currentRGB.substring(4, currentRGB.length-1).replace(/ /g, '').split(',');

        for(let i = 0; i < rgbArr.length; i++) {
            rgbArr[i] = rgbArr[i] - Math.ceil(rgbArr[i] * 0.1);
        }
        
        // console.log(rgbArr);
        evt.target.style.backgroundColor = `rgb(${rgbArr[0]}, ${rgbArr[1]}, ${rgbArr[2]})`;
    }
}


function resetGrid() {
    // delete all grid nodes
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    let userRows = '';

    // check for appropriate user input
    while(isNaN(userRows) || userRows > 100 || userRows <= 0) {
        userRows = parseInt(prompt("How many rows & columns (type one number)?"));
        
        if(isNaN(userRows)) {
            userRows = parseInt(prompt("Please enter a number."));
        } else if(userRows > 100) {
            userRows = parseInt(prompt("Please enter a number not exceeding 100."));
        }
    }

    createGrid(userRows, userRows);
}


let mouseOverOptionFunc = changeColorRainbow;

gridContainer = document.querySelector('.gridContainer');
createGrid(DEFAULT_ROWS, DEFAULT_COLUMNS);

resetButton = document.querySelector('.resetButton');
resetButton.addEventListener('click', resetGrid);
