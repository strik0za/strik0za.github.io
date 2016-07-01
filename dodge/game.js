var player;
var playerImage;
var enemy;
var enemyImage;
var isGameOver;
var backgroundImage;
var amountDodged;

function setup() {
    createCanvas (500,500);
    player = createSprite(width/2, height - (playerImage.height/2), 0, 0);
    player.addImage(playerImage);
    enemy = createSprite(width/2, 0, 0, 0);
    enemy.addImage(enemyImage);
    enemy.rotationSpeed = 4.0;
    isGameOver = false;
}

function keyPressed() {
    if (event.keyCode == 83) {
        isGameOver = false;
        player.position.x = random((playerImage.width/2), width - (playerImage.width/2));
        player.position.y = height - (playerImage.height/2);
        enemy.position.x = random((enemyImage.width/2), width - (enemyImage.width/2));
        enemy.position.y = 0;
    }
}

function draw() {
    if (isGameOver) {
        gameOver();
    } else {
        background(backgroundImage);
        if (keyDown(RIGHT_ARROW) && player.position.x < width - (playerImage.width/2)) {
            player.position.x += 5;
        }
    
        if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.width/2)) {
            player.position.x -= 5;
        }
        
        if (keyDown(DOWN_ARROW) && player.position.y < height - (playerImage.height/2)) {
            player.position.y += 5;
        }
        
        if(keyDown(UP_ARROW) && player.position.y > (playerImage.width/2)) {
            player.position.y -= 5;
        }
    
        enemy.position.y += 10;
            if (enemy.position.y > height) {
                enemy.position.y = 0;
                enemy.position.x = random(5, width-5);
            }
        
        if (enemy.overlap(player)) {
            gameOver();
            isGameOver = true;
        }
    }
    drawSprites();
    score();
}

function gameOver() {
    background(0);
    textAlign(CENTER);
    fill("white");
    text("Game Over!", width/2, height/2);
    text("Press 's' to try again", width/2, 3*height/4);
}

function preload() {
    playerImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/N5uCbDu.png");
    enemyImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
    backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png");
}

function score() {
    fill("white");
    text("Score: " + amountDodged, height/2, width/2);
    if (enemy.position.y < player.position.x) {
        amountDodged ++;
    } else {
        amountDodged = 0;
    }
}