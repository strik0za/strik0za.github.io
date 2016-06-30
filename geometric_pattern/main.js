var NUM_CIRCLES = 12;
var circleDiameter;
var circleRadius;
var rVal;
var gVal;
var bVal;
var ballY = 0;
var speed = 100;
var ballX = 0;

function setup() {
    createCanvas(480, 600);
    circleDiameter = width/NUM_CIRCLES;
    circleRadius = circleDiameter/2;
    frameRate(10);
    rVal = 0;
    gVal = 0;
    bVal = 0;
}

function draw() {
    
    var circle;
    
    var isShifted = false;

    var y = height;
    while (y >= 0) {

        var x;

        if (isShifted) {
            x = circleRadius;
        } else {
            x = 0;
        }

        while (x <= width) {
            circle = ellipse(x, y, circleDiameter, circleDiameter);
            x = x + circleDiameter;
        }

        y = y - circleRadius;
        isShifted = !isShifted;
        rVal = (rVal + 80) % 256;
        gVal = (gVal + 40) % 256;
        bVal = (bVal + 20) % 256;
        fill(color(rVal, gVal, bVal));
        stroke(color(rVal + 20, gVal + 50, rVal + 100));
        strokeWeight(5);
    }
    
    fill(color(102, 0, 51));
    stroke(color(0, 0, 0));
    strokeWeight(10);
    ballY = ballY + speed;
    ellipse(width/2, ballY, 100, 100);
        if (ballY < 0) {
            speed = 30;
            ellipse(width/2, 0, 200, 50);
        }
        if (ballY > height) {
            speed = -30;
            ellipse(width/2, height, 200, 50);
        }
    /*fill(color(51, 204, 51));
    ellipse(width/2, 0, 250, 50);
    ellipse(width/2, height, 250, 50);*/
    /*fill(color(51, 51, 204));
    ballX = ballX + speed;
    ellipse(ballX, height/2, 100, 100);
        if (ballX <= 0) {
            speed = 30;
        }
        if (ballX >= width) {
            speed = -30
        } else {
            fill(color(255, 102, 0));
            ellipse(0, height/2, 50, 250);
            ellipse(width, height/2, 50, 250);
        }*/
}