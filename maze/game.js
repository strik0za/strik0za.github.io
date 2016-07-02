var maze;
var mazeImg;

function setup() {
  createCanvas(400,400);

  maze = createSprite(200, 200);
  mazeImg = loadImage("http://i.filmot.org/7xDfW51.png");
  maze.addImage(mazeImg);
}

function draw() {
  background(255, 255, 255);
  drawSprites();

  if(maze.overlapPixel(mouseX, mouseY)){
    maze.remove();
  }
}