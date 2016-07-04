//var img = ["https://upload.wikimedia.org/wikipedia/commons/c/c8/Spider-Firework-Omiya-Japan.jpg", "fireworks1.jpg", ]

var fireworks1;
var fireworks2;
var fireworks3;
var img;

var rand;

function preload() {
    fireworks1 = loadImage("fireworks1.jpg");
    fireworks2 = loadImage("https://upload.wikimedia.org/wikipedia/commons/c/c8/Spider-Firework-Omiya-Japan.jpg");
    fireworks3 = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS79mNRwJEU_EMuPeeLzHdH5zg8gAiGSPhYWDVG5x4mUCUGlgYX");
    fireworks4 = loadImage("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQWN0m8UuO864fRay9prja2SjC6ybV3tJeZZL9jlY3XiJa-jb5q");
}

function setup() {
    createCanvas(600, 600);
    background(0);
    img = [fireworks1, fireworks2, fireworks3, fireworks4];
}

// function draw() {
//     background(0);
//     if (mouseClicked()) {
//         image(img, 0, 0);
//     }
// }

function mousePressed() {
    rand = img[Math.floor(Math.random() * img.length)];
    image(rand, (mouseX - (rand.width/2)), (mouseY - (rand.height/2)));
}