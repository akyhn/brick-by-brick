// if(window.innerWidth < 500){
//     var boardWidth = window.innerWidth-2;
//     var gameWidth = window.innerWidth-102;
//     document.documentElement.style.setProperty('--boardWidth', boardWidth + "px");
//     document.documentElement.style.setProperty('--width', gameWidth + "px");
// }else{
//     var boardWidth = 500;
//     var gameWidth = 400;
// }

// Declare a variable counter and set its value to 2.
var counter = 2;
// Get a reference to the HTML element with the ID 'btn'.
var btn = document.getElementById("btn");

// Define a function named 'stopMoving' that takes in three arguments: brickMoving, brickAbove, and brickB4.
function stopMoving(brickMoving, brickAbove, brickB4){
    // Get references to the HTML elements with IDs of brickMoving, brickAbove, and brickB4.
    var brickMoving = document.getElementById(brickMoving);
    var brickAbove = document.getElementById(brickAbove);
    var brickB4 = document.getElementById(brickB4);
    // Get the current left position of the brickMoving element.
    var left = window.getComputedStyle(brickMoving).getPropertyValue("left");
    // Remove the 'animate' class from the brickMoving element.
    brickMoving.classList.remove("animate");
    // Set the brickMoving element's left position to its current position.
    brickMoving.style.left = left;
    // Get the width of the brickMoving element.
    var width = parseFloat(window.getComputedStyle(brickMoving).getPropertyValue("width"));
    // Convert the left position of the brickMoving element to a number.
    left = parseFloat(left);
    // Convert the left position of the brickB4 element to a number.
    var leftB4 = parseFloat(window.getComputedStyle(brickB4).getPropertyValue("left"));
    // Calculate the difference between the left position of the brickMoving and brickB4 elements.
    var difference = left - leftB4;
    // Calculate the absolute value of the difference.
    var absDifference = Math.abs(difference);

    // Check if the difference is greater than or less than the width of the brickMoving element.
    if(difference>width||difference<-width){
        // If the difference is greater than or less than the width of the brickMoving element, display the 'restart' element and show the score.
        document.getElementById("restart").style.display = "block";
        // Calculate the score by subtracting 2 from the current value of the counter variable.
        var score = "Score: ".concat(counter-2);
        // Remove the 'onclick' attribute from the btn element.
        btn.setAttribute("onclick", "");
        // Display an alert box showing the score.
        alert(score);
        // Reload the page.
        Location.reload();
    }

    // Check if the difference is greater than zero.
    if(difference>0){
        // If the difference is greater than zero, add the absolute value of the difference to the left position of the brickMoving element.
        left = left + absDifference;
    }else{
        // If the difference is less than or equal to zero, subtract the difference from the left position of the brickMoving element.
        left = left - difference;
        // Set the left position of the brickMoving element to the new value.
        brickMoving.style.left = left.toString().concat("px");
    }
    
    // Calculate the offset value by subtracting the absolute value of the difference from the width of the brickMoving element.
    var offset = (width - absDifference).toString().concat("px");
    // Set the width of the brickMoving and brickAbove elements to the new offset value.
    brickMoving.style.width = offset; 
    brickAbove.style.width = offset;
    // Set the visibility of the brickAbove element to 'visible'.
    brickAbove.style.visibility = "visible";
    // Add the absolute value of the difference to the gameWidth variable.
    gameWidth = gameWidth + absDifference;
    // Set the CSS custom property '--width' to the new value of gameWidth.
    document.documentElement.style('--width', gameWidth + "px");

    // Create a new 'onclick' attribute for the btn element that calls the stopMoving function with the appropriate arguments.
    var onclick = "stopMoving('slider".concat(counter, "','slider", counter+1, "','slider", counter-1, "')");
    btn.setAttribute("onclick",onclick);

    // Increment the counter variable.
    counter++;
}
