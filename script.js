/* Goal: Create 16 divs, each with 16 columns
    Pseudocode:
    let d = Create div element and add to parent to div
    for 16 times, add parent div to d
    Set d to flexbox (evenly spaced)
*/

const DEFAULT_ROWS = 16;
const DEFAULT_COLUMNS = 16;
const GRID_WIDTH = 720;


function createGrid(numRows, numColumns) {
    for(let i = 0; i < numRows; i++) {
        rowDiv = document.createElement('div');
        rowDiv.classList.add('rowDiv');
        
        gridContainer.appendChild(rowDiv);
    
        for(let j = 0; j < numColumns; j++) {
            columnDiv = document.createElement('div');
            columnDiv.classList.add('columnDiv');
            // columnDiv.addEventListener('mouseover', mouseOverOptionFunc);
            columnDiv.addEventListener('mouseover', defaultButtonFunction);    
            
            rowDiv.appendChild(columnDiv);
        }
    }
}

function changeColorDefault(evt) {
    evt.target.style.backgroundColor = 'black';
}

function eraserButtonFunction(evt) {
    evt.target.style.backgroundColor = '';
}

function rainbowButtonFunction(evt) {
    // randomise from 0 - 255
    let r = Math.floor(Math.random() * (255 + 1));
    let g = Math.floor(Math.random() * (255 + 1));
    let b = Math.floor(Math.random() * (255 + 1));

    // evt.target.classList.add("hoverEffect");
    evt.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function shadeButtonFunction(evt) {
    let currentRGB = evt.target.style.backgroundColor;
    let rgbArr = currentRGB.substring(4, currentRGB.length-1).replace(/ /g, '').split(',');

    for(let i = 0; i < rgbArr.length; i++) {
        rgbArr[i] = rgbArr[i] - Math.ceil(rgbArr[i] * 0.1);
    }
    
    evt.target.style.backgroundColor = `rgb(${rgbArr[0]}, ${rgbArr[1]}, ${rgbArr[2]})`;
}

function lightButtonFunction(evt) {
    let currentRGB = evt.target.style.backgroundColor;
    let rgbArr = currentRGB.substring(4, currentRGB.length-1).replace(/ /g, '').split(',');

    for(let i = 0; i < rgbArr.length; i++) {
        // stop short of 255 in each colour channel
        if(rgbArr[i] == 255 || rgbArr[i] * 1.1 >= 255) {
            continue;
        } else {
            rgbArr[i] = 1.1 * rgbArr[i];
        }  
    }
    
    evt.target.style.backgroundColor = `rgb(${rgbArr[0]}, ${rgbArr[1]}, ${rgbArr[2]})`;
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

function activateRainbowButton() {
    columnDiv = document.querySelectorAll('.columnDiv')
    columnDiv.forEach(div => {
        divClone = div.cloneNode()
        divClone.addEventListener('mouseover', changeColorRainbow);
        div.parentNode.replaceChild(divClone, div);

        mouseOverOptionFunc = changeColorRainbow;
    });
}

let isMouseDown;

function defaultButtonFunction(evt) {
    window.onmousedown = () => {
        isMouseDown = true;
        evt.target.style.backgroundColor = 'black';
    }
    
    window.onmouseup = () => {
        isMouseDown = false;
    }
    
    if(isMouseDown) {
        evt.target.style.backgroundColor = 'black';
    }
}

function activateButton(evt) {
    console.log(window[evt.target.className + "Function"]);

    columnDiv = document.querySelectorAll('.columnDiv')
    columnDiv.forEach(div => {
        divClone = div.cloneNode()
        divClone.addEventListener('mouseenter', window[evt.target.className + "Function"]);
        div.parentNode.replaceChild(divClone, div);
    });
}

function setupButtonEventListeners() {
    resetButton = document.querySelector('.resetButton');
    resetButton.addEventListener('click', resetGrid);
    
    defaultButton = document.querySelector('.defaultButton');
    defaultButton.addEventListener('click', activateButton);
    
    rainbowButton = document.querySelector('.rainbowButton');
    rainbowButton.addEventListener('click', activateButton);
    
    eraserButton = document.querySelector('.eraserButton');
    eraserButton.addEventListener('click', activateButton);
    
    shadeButton = document.querySelector('.shadeButton');
    shadeButton.addEventListener('click', activateButton);

    lightButton = document.querySelector('.lightButton');
    lightButton.addEventListener('click', activateButton);    
}


let mouseOverOptionFunc = changeColorDefault;

gridContainer = document.querySelector('.gridContainer');
createGrid(DEFAULT_ROWS, DEFAULT_COLUMNS);

setupButtonEventListeners()


