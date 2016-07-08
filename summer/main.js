var sunRadius = 100;
var person;
var personImage;
var personInitialY = 350;
var personChangeY = 0;
var xB = 200;
var yB = 100;
var xL = 170;
var yL = 104;
var yR = 104;
var xR = 230;

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
    
    drawCloud();
    
    //sand
    fill(255, 255, 102);
    noStroke();
    rect(0, 400, canvas.width, canvas.height - 400);
    
    //ocean
    fill(0, 51, 153);
    noStroke();
    rect(0, 375, canvas.width, canvas.height - 475);
    
    //text
    fill(128, 0, 0);
    textSize(15);
    textStyle(BOLD);
    text("Press Up to Watch Gary Melt", 10, 450);
    text("Press Down to Revive Him", 10, 470);
    text("The Cloud Helps Gary!", 10, 490)
    
    //changing sunRadius & melting person
    if (keyDown(UP_ARROW) && personImage.height >= 0) {
        sunRadius += 5;
        if (personImage.height >= 0 && sunRadius >= 70) {
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
    fill(0);
    ellipse(355, 460, personImage.width - 100, 10);
}

function preload() {
    personImage = loadImage("summerperson.png");
}

function drawCloud() {
    fill(255);
    ellipse(xB, yB, 70, 70);
    ellipse(xL, yL, 50, 50);
    ellipse(xR, yR, 50, 50);
    
    if (keyDown(LEFT_ARROW) && xB >= 0) {
        xB -= 4;
        xL -= 4;
        xR -= 4;
    }
    
    if (keyDown(RIGHT_ARROW) && xB <= canvas.width) {
        xB += 4;
        xL += 4;
        xR += 4;
    }
}