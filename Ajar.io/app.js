var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var x = 250;
var y = 250;

//draw circle
function drawUserCell() {
    context.beginPath();
    context.arc(x, y, 40, 0, 2*3.141592655);
    context.fillStyle = "cyan";
    context.fill();
}

function clearCanvas() {
    context.beginPath();
    context.rect(0, 0, 500, 500);
    context.fillStyle = "white";
    context.fill();
}

function mouseMoved(mouse) {
    x = mouse.clientX;
    y = mouse.clientY;
    clearCanvas();
    drawUserCell();
}


function drawScreen() {
    clearCanvas();
    drawUserCell();
    setTimeout(drawScreen, 1000/60);
}
//so it follows mouse
canvas.addEventListener("mousemove", mouseMoved);

//so you start with circle in middle--not very necessary
drawUserCell();
