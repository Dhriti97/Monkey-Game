var survivalTime=0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  
 
}



function setup() {
  monkey= createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground= createSprite(400,350,800,10);
  ground.velocityX= -4;
   ground.x = ground.width /2;
  bananaGroup=new Group();
  obstacleGroup= new Group();
  
}


function draw() {
  background("white");
  stroke("white");
  textSize(20);
  fill("black");
  text("Score :"+score,50,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time :"+survivalTime,250,50);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if(keyDown("space")){
    monkey.velocityY=-10;
  }
 
  
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  monkey.collide(obstacleGroup);
  
  
  
  food();
  obstacles();
drawSprites();
  
}

function food(){
  if(frameCount%80==0){
    var banana=createSprite(600,120,40,10);
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX=-5;
    banana.scale=0.1;
    banana.lifetime=150;
    bananaGroup.add(banana);
    console.log(banana.y);
  }
}

function obstacles(){
  if(frameCount%300===0){
    var obstacle = createSprite(600,320,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.lifetime=150;
    obstacle.velocityX=-5;
    obstacle.scale=0.2;
    
    obstacleGroup.add(obstacle);
  }
}