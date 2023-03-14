if(window.innerWidth < 500){
    var boardWidth = window.innerWidth-2;
    var gameWidth = window.innerWidth-102;
    document.documentElement.style.setProperty('--boardWidth', boardWidth + "px");
    document.documentElement.style.setProperty('--width', gameWidth + "px");
}else{
    var boardWidth = 500;
    var gameWidth = 400;
}
var counter = 2;
var btn = document.getElementById("btn");

function stopMoving(brickMoving, brickAbove, brickB4){
    var brickMoving = document.getElementById(brickMoving);
    var brickAbove = document.getElementById(brickAbove);
    var brickB4 = document.getElementById(brickB4);
    var left = window.getComputedStyle(brickMoving).getPropertyValue("left");
    brickMoving.classList.remove("animate");
    brickMoving.style.left = left;
    var width = parseFloat(window.getComputedStyle(brickMoving).getPropertyValue("width"));
    left = parseFloat(left);
    var leftB4 = parseFloat(window.getComputedStyle(brickB4).getPropertyValue("left"));
    var difference = left - leftB4;
    var absDifference = Math.abs(difference);
    if(difference>width||difference<-width){
        document.getElementById("restart").style.display = "block";
        var score = "Score: ".concat(counter-2);
        btn.setAttribute("onclick", "");
        alert(score);
        Location.reload();
    }
    if(difference>0){
        left = left + absDifference;
    }else{
        left = left - difference;
        brickMoving.style.left = left.toString().concat("px");
    }
    var offset = (width - absDifference).toString().concat("px");
    brickMoving.style.width = offset; 
    brickAbove.style.width = offset;
    brickAbove.style.visibility = "visible";
    gameWidth = gameWidth + absDifference;
    document.documentElement.style.setProperty('--width', gameWidth + "px");
    var onclick = "stopMoving('slider".concat(counter, "','slider", counter+1, "','slider", counter-1, "')");
    btn.setAttribute("onclick",onclick);
    counter++;
}