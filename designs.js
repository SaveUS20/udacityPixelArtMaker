//This code was written following review of several forum posts on udacity on the subject matter, particularly this one:
//https://knowledge.udacity.com/questions/96798.
//Furthermore, the following youtube tutorials on the subject matter were particularly helpful:
//https://www.youtube.com/watch?v=OtSiwcq67j4&t=614s;
//https://www.youtube.com/watch?v=3ACpHRfhev4&t=1886s;
//https://www.youtube.com/watch?v=zuVfPhYyJdQ;
//https://www.youtube.com/watch?v=iMeGEsVAEO8.

// This gets us dynamically the reference ID for the color.
const colorPick = document.getElementById('colorPicker'); 

// These get us dynamically the reference ID for the width and height. 
const widthPick = document.getElementById('inputWidth'); 
const heightPick = document.getElementById('inputHeight');

// This gets us dynamically the reference ID for the 'sizePicker' and 'pixelCanvas'. 
const formSubmit = document.getElementById('sizePicker');
const canvasClick = document.getElementById('pixelCanvas');  


// When the user "submits" their choice of the size of the table, we call the function makeGrid through an EventListener.
formSubmit.addEventListener('submit', function(e) {
    canvasClick.innerHTML = ' '; // This removes any prior grid. Basically, this ensures that if a user subsequently puts in different values to draw the grid, the previous values are not added to the newly chosen values.
    e.preventDefault(); //This ensures that we will be able to handle the submit event ourselves, not the default browser.
    const height = heightPick.value; //This turns height into a value.
    const width = widthPick.value; //This turns width into a value.
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