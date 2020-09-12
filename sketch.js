var boy;
var key;

var boyIMG, keyIMG;
var boyRunning1, boyRunning2, boyRunning3, boyRunning4, starBoy;
var startMessage, button;

var q1, q2, q3, q4, q5, q6, q7;

var gameState = "start";

function preload() {

    boyIMG = loadImage("Image/boy.png");
    keyIMG = loadImage("Image/key.png");

    boyRunning1 = loadImage("Image/runningBoy1.jpg");
    boyRunning2 = loadImage("Image/runningBoy2.jpg");
    boyRunning3 = loadImage("Image/runningBoy3.jpg");
    boyRunning4 = loadImage("Image/runningBoy4.jpg");

    starBoy = loadImage("Image/starBoy.jpg");
}

function setup() {
    createCanvas(displayWidth, displayHeight);

    boy = createSprite(displayWidth / 2 - 200, displayHeight / 2);
    boy.addImage("boy", boyIMG);
    boy.scale = 2;

    startMessage = createElement('h1', "You have been mistaken for a criminal mastermind and been locked in THE ESCAPE ROOM. The criminal mastermind you have been mistaken for is very dangerous and cunning. The Escape Room was built for such people. But on the other hand you can try to get out of here by answering 7 questions. Each question will be tougher than the last. For every correct answer you will be rewarded with a key.  You need to get all the questions right. All the best!!!");
    startMessage.style('color', '#ffffff');

    startMessage.position(displayWidth / 2 - 250, displayHeight / 2 - 200);
    startMessage.size(800, 100);

    button = createButton("Start Game");
    button.position(displayWidth / 2 + 350, displayHeight / 2 + 250);
    button.size(100, 75);

    q1 = createSprite(300, 100, 275, 75);
    q2 = createSprite(700, 100, 275, 75);
    q3 = createSprite(1100, 100, 275, 75);
    q4 = createSprite(300, 900, 275, 75);
    q5 = createSprite(700, 900, 275, 75);
    q6 = createSprite(1100, 900, 275, 75);
    q7 = createSprite(900, displayHeight / 2, 275, 75);
}

function draw() {

    background("black");

    q1.shapeColor = "red";
    q2.shapeColor = "blue";
    q3.shapeColor = "black";
    q4.shapeColor = "green";
    q5.shapeColor = "white";
    q6.shapeColor = "yellow";
    q7.shapeColor = "grey";

    boyMovements();
    start();
    boyIsTouching();
    drawSprites();
}

function start() {
    if (gameState === "start") {
        background("black");
        boy.visible = false;
        q1.visible = false;
        q2.visible = false;
        q3.visible = false;
        q4.visible = false;
        q5.visible = false;
        q6.visible = false;
        q7.visible = false;
        button.mousePressed(play);
    }
}

function play() {

    gameState = "play";

    if (gameState === "play") {
        startMessage.hide();
        button.hide();

        boy.visible = true;

        q1.visible = true;
        q2.visible = true;
        q3.visible = true;
        q4.visible = true;
        q5.visible = true;
        q6.visible = true;
        q7.visible = true;
    }
}

function boyMovements() {

    if (keyIsDown(LEFT_ARROW)) {
        boy.x -= 5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        boy.x += 5;
    }

    if (keyIsDown(UP_ARROW)) {
        boy.y -= 5;
    }

    if (keyIsDown(DOWN_ARROW)) {
        boy.y += 5;
    }
}

function boyIsTouching() {
    if (boy.isTouching(q7)) {

        background(0, 0, 0);

        gameState = "question";


        q1.visible = false;
        q2.visible = false;
        q3.visible = false;
        q4.visible = false;
        q5.visible = false;
        q6.visible = false;
        q7.visible = false;

        boy.visible = true;
        boy.x = 707;
        boy.y = 501.5;

        textSize(30);
        fill("white");

        var question = createButton("Question - The food or chemical energy source made by plants through photosynthesis is:");
        question.position(600, 300);
        question.size(700, 150);
        question.style('font-size', '30px');
 
        var water = createButton("Water");
        water.position(750, 600);
        water.size(100, 75);

        var glucose = createButton("Glucose");
        glucose.position(1000, 600);
        glucose.size(100, 75);

        var sunlight = createButton("Sunlight");
        sunlight.position(750, 800);
        sunlight.size(100, 75);

        var carbonDioxide = createButton("Carbon Dioxide");
        carbonDioxide.position(1000, 800);
        carbonDioxide.size(100, 75);

        water.mousePressed( () => {
            water.style('background-color', "red");
            glucose.style('background-color', "green");
        });
    }
}