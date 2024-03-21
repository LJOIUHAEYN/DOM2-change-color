//Write JavaScript code to wait for the DOM content to be loaded using DOMContentLoaded event.
document.addEventListener("DOMContentLoaded", function() {
    // Inside the event handler, select the color-box and change-color-btn elements using document.getElementById().
    var colorBox = document.getElementById("color-box");
    var changeColorBtn = document.getElementById("change-color-btn");
   

//Implement a function, let's call it getRandomColor(), which generates a random color. You may use hexadecimal or RGB values.
function getRandomColor() {
   var letters = '0123456789ABCDEF';
   var color ='#'
   for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}

 
 changeColorBtn.addEventListener("click", function() {
   
    colorBox.style.backgroundColor = getRandomColor();

    });

});

