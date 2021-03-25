var game = 0;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score = 0
var flag = 0;
var flag1 = 0;
var bothAns = 0;

var gameOver, restart;

function preload() {
  game1Image = loadImage("images/quiz.png");
  game2Image = loadImage("images/running.png");
  trex_running = loadAnimation("images/1.png", "images/2.png", "images/3.png", "images/4.png");
  trex_collided = loadAnimation("images/1.png");
   groundImage = loadImage("images/ground2.png");

  cloudImage = loadImage("images/cloud.png");

  obstacle1 = loadImage("images/obstacle.png");

   gameOverImg = loadImage("images/gameOver.png");
   restartImg = loadImage("images/restart.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  game1 = createSprite(width / 2 - 400, height / 2, 200, 50);
  game1.addImage(game1Image);
  game1.scale = 0.5;
  console.log("check");
  
  game2 = createSprite(width / 2 + 400, height / 2, 200, 50);
  game2.addImage(game2Image);
  game2.scale = 0.5;
  console.log("check");



  trex = createSprite(150, height-200, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.addAnimation("collided", trex_collided);
  trex.scale = 0.2;

  ground = createSprite(width/2, height - 100, width, 20);
   ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;
  ground.velocityX = -(6 + 3 * score / 100);

  gameOver = createSprite(width/2-100, height/2);
   gameOver.addImage(gameOverImg);

  restart = createSprite(width/2, height/2+100);
  restart.addImage(restartImg);

  gameOver.scale = 1;
  restart.scale = 1;

  gameOver.visible = false;
  restart.visible = false;

  invisibleGround = createSprite(width/2, height - 100, width, 20);
  invisibleGround.visible = false;

  cloudsGroup = new Group();
  obstaclesGroup = new Group();

  score = 0;
  trex.visible=false;
  ground.visible= false;
var quizScore = 0;
  question = new Question();
}

function draw() {
  if (game === 0) {
    background(0);
  }
  if (game === 1) {
    background("red");
  }
  if (game === 2) {
    background("white");
  }
  if (mousePressedOver(game1)) {
    game = 1;
    game1.visible = false;
    game2.visible = false;
  }
  if (mousePressedOver(game2)) {
    game = 2;
    
    trex.visible=true;
    ground.visible= true;
    game1.visible = false;
    game2.visible = false;
  }
  if (game === 1) {
    
    question.display()
    // if (question.ans === "4"&& flag == 1) {
    //   question.answer.html("Question2:- How many members were left in the SPK after several of them got killed")
    //   this.question.position(150,180);
    //     this.option1.html("1: 2  " );
    //     this.option1.position(150, 100);
    //     this.option2.html("2: 16" );
    //     this.option2.position(150, 120);
    //     this.option3.html("3: 3 " );
    //     this.option3.position(150, 140);
    //     this.option4.html("4: 10" );
    //     this.option4.position(150, 160);
    //   question.position(390,300);
    //   console.log("match");
    // }
    if (question.ans != null && flag == 1) {
      question.question2Display();
      
      console.log("check3"+question.ans);
      console.log("check4"+question.ans1);
    }
    // if (question.ans != null&& flag == 1) {
    //   question.answer.html("You Loose!")
    //   question.position(390,300);
    //   console.log("match");
    // }
    

    if (question.ans == "4" &&question.ans1 =="3"&& flag == 1 && flag1 ==1) {
      console.log("check1"+question.ans);
      console.log("check2"+question.ans1);

      textSize(50);
      fill("white");
      text("You answered both ques correct", 200,height/2);
      
    }
    else if (question.ans == "4" &&question.ans1 != null&& flag == 1 && flag1 ==1) {
      console.log("check1"+question.ans);
      console.log("check2"+question.ans1);
        
      //   question.answer.html("You answered one ques correct!")
      // question.position(390,300);
      textSize(50);
      fill("white");
        text("You answered one ques correct", 200,height/2);
      
    }
    else if (question.ans1 == "3" &&question.ans != null&& flag == 1 && flag1 ==1) {
      console.log("check1"+question.ans);
      console.log("check2"+question.ans1);
        
      //   question.answer.html("You answered one ques correct!")
      // question.position(390,300);
      textSize(50);
      fill("white");
        text("You answered one ques correct", 200,height/2);
      
    }
    else if(question.ans != null&&question.ans1 != null&& flag == 1 && flag1 ==1) {
      // question.answer.html("You Loose!")
      // question.position(390,300);
      textSize(50);
      fill("white");
      text("You loose", 200,height/2);
      console.log("match");
    }
  
  }
  if (game === 2) {
    question.question1Hide();
    question.question2Hide();
    
    text("Score: " + score, width-200, 100);

    if (gameState === PLAY) {
      score = score + Math.round(getFrameRate() / 60);
      ground.velocityX = -(6 + 3 * score / 100);

      if (keyDown("space") && trex.y >= height-200) {
        trex.velocityY = -15;
      }
      trex.debug = true;
      trex.setCollider("rectangle",0,0,80,300);
      trex.velocityY = trex.velocityY + 0.8

      //  camera.position.x = displayWidth / 2
      //  cameera.position.y = trex.y;


      if (ground.x < 0) {
        ground.x = ground.width / 2;
      }

      trex.collide(invisibleGround);
      spawnClouds();
      spawnObstacles();

      if (obstaclesGroup.isTouching(trex)) {
        gameState = END;
      }
    }
    else if (gameState === END) {
      gameOver.visible = true;
      restart.visible = true;

      //set velcity of each game object to 0
      ground.velocityX = 0;
      trex.velocityY = 0;
      obstaclesGroup.setVelocityXEach(0);
      cloudsGroup.setVelocityXEach(0);

      //change the trex animation
      trex.changeAnimation("collided", trex_collided);

      //set lifetime of the game objects so that they are never destroyed
      obstaclesGroup.setLifetimeEach(-1);
      cloudsGroup.setLifetimeEach(-1);

      if (mousePressedOver(restart)) {
        reset();
      }
      drawSprites();
    }
    
  }
  drawSprites()
}
function reset() {
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;

  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();

  trex.changeAnimation("running", trex_running);



  score = 0;

}
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(width, 120, 40, 10);
    cloud.y = Math.round(random(80, 200));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;

    //assign lifetime to the variable
    cloud.lifetime = 200;

    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;

    //add each cloud to the group
    cloudsGroup.add(cloud);
  }

}
function spawnObstacles() {
  if (frameCount % 100 === 0) {
    var obstacle = createSprite(width, height-150, 10, 40);
    //obstacle.debug = true;
    obstacle.velocityX = -(6 + 3 * score / 200);
    obstacle.addImage(obstacle1);

    obstacle.debug = true;
    obstacle.setCollider("rectangle",0,0,100,500);

    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}