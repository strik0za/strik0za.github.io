var player;
var playerImages = ["BacteriaDrawing.png", "https://lh3.googleusercontent.com/J_TYbYWtt3Egf_d0sIyDW0TiQXKH8yr1E-GHLzyyfYJbT_kvhXoytMALVMNnu842JLEy=w300", "trilobite.png", "earlyfish1.png", "Ichthyosaurus.png", "dinosaur.png"];
var counter = 0;

function setup() {
    createCanvas(500, 500);
    mouse1Pressed = false;
}

function draw() {
    background(102, 225, 102);
    image(player, 0, 0, player.width, player.height);
    nextImage();

}



function preload() {
    player = loadImage("BacteriaDrawing.png");
}

function nextImage() {
    player = loadImage(playerImages[counter]);

    while(mouseIsPressed) {
        // counter++;
        // console.log(counter);
        // break;
        if (counter < 5) {
            counter++;
            console.log(counter);
            break;
        }
        if (counter >= 5) {
            counter = 0;
            console.log(counter);
            break;
        }
    }
}