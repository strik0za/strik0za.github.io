var config = {
    apiKey: "AIzaSyCX5noLAKpGIn3KSuKo1gmYhOrAs8fXRzY",
    authDomain: "collab-sketch-925bb.firebaseapp.com",
    databaseURL: "https://collab-sketch-925bb.firebaseio.com",
    storageBucket: "",
};
firebase.initializeApp(config);

var pointsData = firebase.database().ref();

var points = [];

var radius = 5;

var notColor = 0;

function setup() {
    var canvas = createCanvas(400, 400);
    background(255);
    console.log(color);
    fill(notColor);
    noStroke();
    pointsData.on("child_added", function(point) {
        points.push(point.val());
    });
    canvas.mousePressed(drawPoint);
    canvas.mouseMoved(drawPointIfMousePressed);
}

function draw() {
    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        ellipse(point.x, point.y, point.radius, point.radius);
    }
}

function drawPoint() {
    pointsData.push({x: mouseX, y: mouseY, radius: radius});
}

function drawPointIfMousePressed() {
    if (mouseIsPressed) {
        drawPoint();
    }
}

$("#saveDrawing").on("click", saveDrawing);

function saveDrawing() {
    saveCanvas();
}

$("#clearDrawing").on("click", clearDrawing);

function clearDrawing() {
    pointsData.remove();
    points = [];
    pointsData.on("child_removed", function () {
        points = [];
    });
}

$("#increaseRadius").on("click", increaseRadius);

function increaseRadius() {
        radius += 4;
}

$("#decreaseRadius").on("click", decreaseRadius);

function decreaseRadius() {
    radius -= 4;
}

// $("#changeColor").on("click", changeColor);

// function changeColor() {
//     color = Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255);
//     console.log("color");
// }