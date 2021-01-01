var stormImage;
var boy, boyImage;
var playButton, play;
var instructionsButton, instructions;
var gameState = "home";
var backArrow, backArrowImage;
var background, backgroundImage;
var boyRunning, boyRunningAnimation;
var boy_dead;
var barrier, barrierImage;
var coins, coinsImage;
var destroyedCycle, destroyedCycleImage;
var destroyedCar, destroyedCarImage;
var treeCut, treeCutImage;
var backgroundSound, dieSound;
var stormGif;
var backgroundSprite;
var obstaclesGroup;
var treeLog, treeLog2;
var invisibleGround;
var stones;
var score = 0;
var blackScreen;
var gameOverImage, gameOverSprite;
var returnPage, returnImage;
var backgroundLevel2, backgroundLevel2Sprite;
var feedbackBackground1;
var nextLevel, nextLevelSprite;
var zombie1,zombie2,zombie3,zombie4,zombiesGroup;
var background3;
var bullet, bulletImage;
var background2,backgroundSprite2;
var invisibleGround2; 
var coinsGroup2;
var life = 20;

//var sampleBackground, sampleBackgroundImage;

// var gameState = "play";
// var gameSate = "instructions";

function preload() {
  // we will load the images with a variable

  // stormImage = loadImage("Images/backgrounds/download.jpg");
  boyImage = loadImage("Images/basic images/Idle (8).png");
  playButton = loadImage("Images/basic images/th.png");
  instructionsButton = loadImage("Images/basic images/instructions.png");
  backArrowImage = loadImage("Images/basic images/back arrow.png");
  backgroundImage = loadImage("Images/backgrounds/fffBackground.jpg");
  backgroundLevel2 = loadImage("Images/backgrounds/backgron(level2).png");
  boyRunningAnimation = loadAnimation(
    "Images/boyRunning/Run (1).png",
    "Images/boyRunning/Run (2).png",
    "Images/boyRunning/Run (3).png",
    "Images/boyRunning/Run (4).png",
    "Images/boyRunning/Run (5).png",
    "Images/boyRunning/Run (6).png",
    "Images/boyRunning/Run (7).png",
    "Images/boyRunning/Run (8).png",
    "Images/boyRunning/Run (9).png",
    "Images/boyRunning/Run (10).png",
    "Images/boyRunning/Run (11).png",
    "Images/boyRunning/Run (12).png",
    "Images/boyRunning/Run (13).png",
    "Images/boyRunning/Run (14).png",
    "Images/boyRunning/Run (15).png"
  );

  boy_dead = loadAnimation(
    "Images/boyDead/Dead (1).png",
    "Images/boyDead/Dead (2).png",
    "Images/boyDead/Dead (3).png",
    "Images/boyDead/Dead (4).png",
    "Images/boyDead/Dead (5).png",
    "Images/boyDead/Dead (6).png",
    "Images/boyDead/Dead (7).png",
    "Images/boyDead/Dead (8).png",
    "Images/boyDead/Dead (10).png",
    "Images/boyDead/Dead (11).png",
    "Images/boyDead/Dead (12).png",
    "Images/boyDead/Dead (13).png",
    "Images/boyDead/Dead (14).png",
    "Images/boyDead/Dead (15).png"
  );
  barrierImage = loadImage("Images/obstacles/BARRIER.png");
  coinsImage = loadImage("Images/basic images/COINS.png");
  destroyedCycleImage = loadImage("Images/obstacles/DESTROYED CIRCLE.png");
  destroyedCarImage = loadImage("Images/obstacles/DESTROYES CAR.png");
  backgroundSound = loadSound("sounds/BACKGROUND.mp3");
  dieSound = loadSound("sounds/DIE.mp3");
  stormGif = loadImage("Images/backgrounds/stormImage.jpg");
  treeLog = loadImage("Images/obstacles/tree log2.png");
  gameOverImage = loadImage("Images/basic images/gameOverImage.png");
  returnImage = loadImage("Images/basic images/reloadIcon.png");
  feedbackBackground1 = loadImage("Images/backgrounds/level1FeedbackBackground.jpg");
  nextLevel = loadImage("Images/basic images/next level.png");
  zombie1 = loadImage("Images/obstacles/zombie1.png");
  zombie2 = loadImage("Images/obstacles/zombie2.png");
  zombie3 = loadImage("Images/obstacles/zombie3.png");
  zombie4 = loadImage("Images/obstacles/zombie4.png");
  background2 = loadImage("Images/backgrounds/level3.jpg");
  bulletImage = loadImage("Images/basic images/bullet.png");

}

function setup() {
  createCanvas(displayWidth, displayHeight - 140);

  boy = createSprite(width / 2 - 300, height / 2, 10, 10);
  boy.addImage(boyImage);
  boy.scale = 0.8;

  play = createSprite(width / 2 + 350, height / 2 - 150, 150, 10, 10);
  play.addImage(playButton);
  play.scale = 0.8;

  instructions = createSprite(width / 2 + 350, height / 2 + 150, 10, 10);
  instructions.addImage(instructionsButton);
  instructions.scale = 0.8;

  backArrow = createSprite(width / 2 - 725, height / 2 - 325);
  backArrow.addImage(backArrowImage);
  backArrow.scale = 0.1;

  boyRunning = createSprite(width / 2 - 325, height / 2 + 10);
  boyRunning.addAnimation("running", boyRunningAnimation);
  boyRunning.addAnimation("dead", boy_dead);
  boyRunning.scale = 0.4;
  //boyRunning.debug = true;
  boyRunning.setCollider("rectangle", -200, 0, 500, 10, 90);

  backgroundSprite = createSprite(width / 2, height / 2);
  backgroundSprite.addImage(backgroundImage);
  backgroundSprite.scale = 2;

  invisibleGround = createSprite(width / 2, height / 2 + 150, windowWidth, 20);
  invisibleGround.visible = false;

  gameOverSprite = createSprite(width / 2 + 50, height / 2 - 125);
  gameOverSprite.addImage(gameOverImage);
  //gameOverSprite.scale = 1.5;

  returnPage = createSprite(width / 2 + 50, height / 2);
  returnPage.addImage(returnImage);
  returnPage.scale = 0.5;

  nextLevelSprite = createSprite(width/2,height/2+100);
  nextLevelSprite.addImage(nextLevel);
  nextLevelSprite.scale = 0.5;

  bullet = createSprite(width / 2 - 350, height / 2 + 50);
  bullet.addImage(bulletImage);
  bullet.scale = 0.2;
  bullet.lifetime = 300;
  //bullet.velocityX = 30;

  backgroundSprite2 = createSprite(width/2,height/2);
  backgroundSprite2.addImage(background2);
  backgroundSprite2.scale = 2;

  invisibleGround2 = createSprite(width/2,height/2+300,windowWidth,20);
  invisibleGround2.visible = false;
  //bullet.velocityX = 30;

  //barrierImage.setCollider("rectangle",-200, 0, 500, 10, 90);

  //backgroundSprite.scale = 0.5;

  obstaclesGroup = new Group();
  coinsGroup = new Group();
  zombiesGroup = new Group();
  coinsGroup2 = new Group();

  //boyRunning.velocityX = 2;
}

function draw() {
  // we will make the background moving
  background(stormGif);

  if (gameState == "home") {

     nextLevelSprite.visible = false;
    backArrow.visible = false;
    boyRunning.visible = false;
    gameOverSprite.visible = false;
    backgroundSprite.visible = false;
    backgroundSprite2.visible = false;
    returnPage.visible = false;
    bullet.visible = false;
   
  }

  if (mousePressedOver(instructions)) {
    gameState = "Instructions";
  }

  if (gameState == "Instructions") {
    background("blue");
    play.visible = false;
    instructions.visible = false;
    backArrow.visible = true;

    textSize(80);
    textFont("Comic Sans MS");
    fill("yellow");

    text("Instructions", width / 2 + 25, height / 2 - 250);

    textSize(30);
    textFont("Arial Black");
    fill("red");

    text(
      "1) Rakesh is a boy who had collected a lot of food for ",
      width / 2 - 200,
      height / 2 - 150
    );

    text(
      "him but suddenly a storm occurred and all his food ",
      width / 2 - 200,
      height / 2 - 100
    );

    text("was destroyed.", width / 2 - 200, height / 2 - 50);

    text(
      "2) Now help him collect 20 coins so that he can buy",
      width / 2 - 200,
      height / 2 + 50
    );

    text(
      " food for himself for the day. You have to clear all the",
      width / 2 - 200,
      height / 2 + 100
    );

    text(
      " obstacles on the way.",
      width / 2 - 200,
      height / 2 + 150
    );

    

    text(
      "3) Press “space” button to jump over the obstacles ",
      width / 2 - 200,
      height / 2 + 250
    );
  }

  if (mousePressedOver(backArrow)) {
    gameState = "home";
    play.visible = true;
    instructions.visible = true;
    backArrow.visible = false;
    boy.visible = true;
  }

  if (mousePressedOver(play)) {
    gameState = "Level2";
  }

  if (gameState == "Level2") {
    background(0);

    backgroundSprite2.velocityX = -10;

    if (backgroundSprite2.x < 250) {
      backgroundSprite2.x = backgroundSprite2.width / 2;
    }



    backgroundSprite2.visible = true;
    //sampleBackground.visible = true;
    play.visible = false;
    instructions.visible = false;
    boy.visible = false;
    backArrow.visible = false;
    boyRunning.visible = true;
    backgroundSprite2.depth = boy.depth;
    boy.depth = backgroundSprite2.depth - 1;
    

    spawnCoins2();
    spawnZombies();

    if (boyRunning.isTouching(coinsGroup2)) {
      score = score + 1;
      coinsGroup2.destroyEach();
    }

    // obstaclesGroup.setCollider("rectangle",0, 0, 500, 10, 90)

    if (keyDown("space")) {
      bullet.visible = true;
      bullet.velocityX = 15;
    }

    boyRunning.velocityY = boyRunning.velocityY + 0.3;
    boyRunning.collide(invisibleGround2);

    textSize(50);
    text("Score: ", width / 2, height / 2);

    if (boyRunning.isTouching(obstaclesGroup)) {
      gameState = "gameOver";
    }
   
    if(score == 20){
      gameState = "Level2Feedback";

    }

    if(boyRunning.isTouching(zombiesGroup)){
      gameState == "gameOver"
    }

    
    //  if(score = 200){

    //  }
  }

  if (gameState == "gameOver") {
    backgroundSprite2.velocityX = 0;
    obstaclesGroup.setVelocityXEach(0);
    coinsGroup.setVelocityXEach(0);
    
    coinsGroup.setLifetimeEach(-1);
    obstaclesGroup.setLifetimeEach(-1);

    boyRunning.changeAnimation("dead", boy_dead);
    gameOverSprite.visible = true;
    returnPage.visible = true;

    backgroundSprite2.depth = returnPage.depth;
    returnPage.depth = returnPage.depth + 1;

    backgroundSprite2.depth = gameOverSprite.depth;
    gameOverSprite.depth = gameOverSprite.depth + 1;

    boyRunning.velocityY = 0;

    if (mousePressedOver(returnPage)) {
      gameState = "Level2";
      obstaclesGroup.destroyEach();
      coinsGroup.destroyEach();
      //Level2.visible = true;
      //instructions.visible = true;
      //boy.visible = true;
     // backgroundSprite2.velocityX = -10;

     gameOverSprite.visible = false;
     returnPage.visible = false;
      score = 0;
      boyRunning.changeAnimation("running", boyRunningAnimation);
    }
  }

  if(gameState == "Level2Feedback"){
    background(feedbackBackground1);

    backgroundSprite2.visible = false;
    boyRunning.visible = false;
    obstaclesGroup.destroyEach();
    coinsGroup.destroyEach();
    textSize(45);
    textFont("Comic Sans MS");
    fill("yellow");
    text("Congratulations you have completed the 1st level",width/2-500,height/2);

    nextLevelSprite.visible = true;

    feedbackBackground1.depth = nextLevelSprite.depth;
    nextLevelSprite.depth = nextLevelSprite.depth + 1;

    if(mousePressedOver(nextLevelSprite)){
      gameState == "Level2";
      backgroundSprite2.visible = false;
    }

    

    
  }

  drawSprites();

  if (gameState == "Level2" || gameState == "gameOver") {
    fill("red");
    textFont("algerian");
    textSize(50);
    text("Coins: " + score, width / 2 + 220, height / 2 - 220);

   
  }
}
function spawnObstacles() {
  if (frameCount % 200 === 0) {
    var obstacle = createSprite(width, height / 2 + 100);
    //obstacle.debug = true;

    obstacle.velocityX = -15;

    //generate random obstacles
    var rand = Math.round(random(1, 4));
    switch (rand) {
      case 1:
        obstacle.addImage(destroyedCycleImage);
        obstacle.setCollider(
          "rectangle",
          0,
          0,
          obstacle.width,
          obstacle.height
        );
        break;
      case 2:
        obstacle.addImage(barrierImage);
        obstacle.setCollider(
          "rectangle",
          0,
          0,
          obstacle.width - 200,
          obstacle.height - 250
        );
        break;
      case 3:
        obstacle.addImage(destroyedCarImage);
        obstacle.setCollider(
          "rectangle",
          0,
          0,
          obstacle.width,
          obstacle.height
        );
        break;
      case 4:
        obstacle.addImage(treeLog);
        obstacle.setCollider(
          "rectangle",
          0,
          0,
          obstacle.width,
          obstacle.height
        );
        break;

      default:
        break;
    }

    //assign scale and lifetime to the obstacle
    obstacle.scale = 0.4;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
    obstaclesGroup.collide(invisibleGround);
  }
}

function spawnCoins() {
  if (frameCount % 75 == 0) {
    var coins = createSprite(width, height / 2);
    coins.velocityX = -15;

    coins.y = Math.round(random(height / 2, height / 2 - 20));
    coins.addImage(coinsImage);
    coins.scale = 0.3;
    //coins.lifetime = 100;

    coinsGroup.add(coins);
  }
}

function spawnZombies(){
  if (frameCount % 100 === 0) {
    var zombies = createSprite(width, height / 2 + 100);
    zombies.debug = true;

    zombies.velocityX = -15;

    //generate random obstacles
    var rand = Math.round(random(1, 4));
    switch (rand) {
      case 1:
        zombies.addImage(zombie1);
        zombies.setCollider(
          "rectangle",
          0,
          0,
          zombies.width,
          zombies.height
        );
       
        break;
      case 2:
        zombies.addImage(zombie2);
        zombies.setCollider(
          "rectangle",
          0,
          0,
          zombies.width ,
          zombies.height 
        );
        break;
      case 3:
        zombies.addImage(zombie3);
        zombies.setCollider(
          "rectangle",
          0,
          0,
          zombies.width,
          zombies.height
        );
        zombies.scale = 0.5;

        break;
      case 4:
        zombies.addImage(zombie4);
        zombies.setCollider(
          "rectangle",
          0,
          0,
          zombies.width,
          zombies.height
        );
        break;        

      default:
        break;
    }

    //assign scale and lifetime to the zombies
    zombies.scale = 0.5;
    zombies.lifetime = 300;
    //add each zombies to the group
    zombiesGroup.add(zombies);
    zombiesGroup.collide(invisibleGround);
  }
}

function spawnCoins2() {
  if (frameCount % 75 == 0) {
    var coins2 = createSprite(width, height / 2 + 400);
    coins2.velocityX = -15;

    coins2.y = Math.round(random(height / 2+120, height / 2 + 120));
    coins2.addImage(coinsImage);
    coins2.scale = 0.3;
    //coins.lifetime = 100;

    coinsGroup2.add(coins2);
  }
}