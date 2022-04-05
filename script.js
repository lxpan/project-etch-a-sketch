/* Goal: Create 16 divs, each with 16 columns
    Pseudocode:
    let d = Create div element and add to parent to div
    for 16 times, add parent div to d
    Set d to flexbox (evenly spaced)
*/

const ROWS = 16;
const COLUMNS = 16;

gridContainer = document.querySelector('.gridContainer');

rowLoop:
for(i = 0; i < ROWS; i++) {
    rowDiv = document.createElement('div');
    rowDiv.classList.add('rowDiv');
    gridContainer.appendChild(rowDiv);

    columnLoop:
    for(let j = 0; j < COLUMNS; j++) {
        columnDiv = document.createElement('div');
        columnDiv.classList.add('columnDiv');
        columnDiv.textContent = `(${i}, ${j})`;
        rowDiv.appendChild(columnDiv);
    }
}

// console.log(rowDiv);
