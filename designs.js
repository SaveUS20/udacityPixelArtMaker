// This gets us dynamically the reference ID for the color.
const colorPick = document.getElementById('colorPicker'); 


// These get us dynamically the reference ID for the width and height of the canvas. 
const widthPick = document.getElementById('inputWidth'); 
const heightPick = document.getElementById('inputHeight');


// This gets us dynamically the reference ID for the 'sizePicker' and 'pixelCanvas'. 
const formSubmit = document.getElementById('sizePicker');
const canvasClick = document.getElementById('pixelCanvas');  


// When the user "submits" their choice of the size of the table, we add an EventListener and call the function makeGrid (which draws the canvas).
formSubmit.addEventListener('submit', function(e) {
    canvasClick.innerHTML = ' '; // This removes any prior grid. Basically, this ensures that if a user subsequently puts in different values to draw the grid, the previous values are not added to the newly chosen values.
    e.preventDefault(); //This ensures that we will be able to handle the submit event ourselves, not the default browser.
    const height = heightPick.value; //This turns height into a number.
    const width = widthPick.value; //This turns width into a number.
    makeGrid(); // We call the function drawing the canvas (see below). 
});


// This adds another eventListener to ensure when a user "clicks" on the canvas, the user may choose the color.
canvasClick.addEventListener('click', function(ev) {
  if (ev.target.nodeName === 'TD') {
      ev.target.style.backgroundColor = colorPick.value;
      ev.preventDefault();
  }
});
    

// The following function creates the canvas by using a nested for-loop.
function makeGrid(e) { 
  for (let r = 0; r < heightPick.value; r++) {
      const row = canvasClick.insertRow(0); //The insertRow() method creates an empty <tr>  element in html and adds it to a table.
      for (let c = 0; c < widthPick.value; c++) {
          row.insertCell(0); //The insertRow() method creates an empty <td>  element in html and adds it to a table.
    }
  }
}
