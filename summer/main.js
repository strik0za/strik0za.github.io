var sunRadius = 100;
var person;
var personImage;
var personInitialY = 350;
var personChangeY = 0;

function setup() {
    createCanvas(500, 500);
    
    personImage.width = 200;
    personImage.height = 200;
    person = createSprite(370, personInitialY, personImage.width, personImage.height);
    person.addImage(personImage);
}

function draw() {
    background(128, 255, 255);
    
    //sun
    fill(255, 205, 0);
    noStroke();
    ellipse(240, 75, sunRadius, sunRadius);
    
    //sand
    fill(255, 255, 102);
    noStroke();
    rect(0, 400, canvas.width, canvas.height - 400);
    
    //ocean
    fill(0, 51, 153);
    noStroke();
    rect(0, 375, canvas.width, canvas.height - 475);
    
    //increasing sunRadius
    if (keyDown(UP_ARROW) && personImage.height >= 0) {
        sunRadius += 5;
        if (personImage.height >= 0) {
            personImage.width += 2;
            personImage.height -= 2;
            personChangeY += 1;
        }
    }
    
    if (keyDown(DOWN_ARROW) && sunRadius >= 0) {
        sunRadius -= 5;
        personImage.width -= 2;
        personImage.height += 2;
        person.position.y -= personImage.height/2;
        personChangeY -= 1;
    }
    person.position.y = personInitialY + personChangeY;

    drawSprites();
    //summerperson shadow
    // fill(0);
    // ellipse(355, 460, personImage.width - 100, 10);
}

function preload() {
    personImage = loadImage("summerperson.png");
}