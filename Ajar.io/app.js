var arrayOfGreenFoodObjects = [];
    for (var i = 0; i < 50; i++) {
        arrayOfGreenFoodObjects.push(createGreenFoodObject());
    }
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var x = 250;
var y = 250;
var mouseX = 250;
var mouseY = 250;
var velocity = 2;
var sGreenRadius = 10;
var bRadius = 40;
var isGameOver;

function clearCanvas() {
    context.beginPath();
    context.rect(0, 0, 600, 600);
    context.fillStyle = "white";
    context.fill();
}

function calculatePosition() {
    // For the x-axis
    if (mouseX > x) {
        x += velocity;  // mouse is to the right of the ball
    } else {
        x -= velocity;  // mouse is to the left of the ball
    }
    
    // For the y-axis
    if (mouseY > y) {
        y += velocity;  // mouse is under ball
    } else {
        y -= velocity;  // mouse is above ball
    }
}

function drawScreen() {
    if (arrayOfGreenFoodObjects.length == 0) {
        gameOver();
        isGameOver = true;
    } else {
            clearCanvas();
        calculatePosition();
        drawBigCircle();
        for (var n = 0; n < arrayOfGreenFoodObjects.length; n++) {
            
            var sCircle = arrayOfGreenFoodObjects[n];
            
            if (bRadius + sGreenRadius> Math.sqrt(Math.pow(Math.abs(x - sCircle.position.x), 2) + Math.pow(Math.abs(y - sCircle.position.y), 2))) {
                arrayOfGreenFoodObjects.splice(n, 1);
                bRadius += 3;
            }
            context.beginPath();
            context.arc(sCircle.position.x, sCircle.position.y, sGreenRadius, 0, 2*3.141592655);
            context.fillStyle = sCircle.color;
            context.fill();
        }
    
        setTimeout(drawScreen, 1000/60);
        isGameOver = false;
    }
}

function mouseMoved(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
}

function createGreenFoodObject() {
    return {
        color: "Lime",
        position: {
            x: Math.random() * 500,
            y: Math.random() * 500
        }
    };
}

function drawBigCircle() {
    context.beginPath();
    context.arc(x, y, bRadius, 0, 2*3.141592655);
    context.fillStyle = "cyan";
    context.fill();
}



//so it follows mouse
canvas.addEventListener("mousemove", mouseMoved);

drawScreen();

function gameOver() {
    context.beginPath();
    context.rect(0, 0, 600, 600);
    context.fillStyle = "navy";
    context.fill();
    isGameOver;
    document.onclick = restart();
    console.log("onclick works");
    
}

function restart() {
    drawScreen();
    console.log("restart works");
}

//none of the things to restart it, or 4 click, works--console.log doesn't print