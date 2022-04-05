/* Goal: Create 16 divs, each with 16 columns
    Pseudocode:
    let d = Create div element and add to parent to div
    for 16 times, add parent div to d
    Set d to flexbox (evenly spaced)
*/

const COLUMNS = 16;

gridContainer = document.querySelector('.gridContainer');

rowDiv = document.createElement('div');
rowDiv.classList.add('rowDiv');
gridContainer.appendChild(rowDiv);

console.log(rowDiv);

for(let i = 0; i <= COLUMNS; i++) {
    columnDiv = document.createElement('div');
    columnDiv.textContent = 'C';
    rowDiv.appendChild(columnDiv);
}

console.log(rowDiv);
