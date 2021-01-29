var road,roadimg
var boy,boyimg
var coin,coinImg
var bomb,bombImg
var score = 0
var PLAY=1;
var END=0;
var gamestate=1;
var endImg


function preload(){
roadimg = loadImage("path.png")
  boyimg =loadAnimation("Runner-1.png","Runner-2.png")
  coinImg = loadImage("coin.png")
  bombImg = loadImage("bomb.png")
  endUmg = loadAnimation("gameOver.png")
}

function setup() {
  createCanvas  (600,600)
  
 road = createSprite(200,200)
  road.addImage(roadimg)
  road.velocityY = 3
  
  boy = createSprite(200,550)
  boy.addAnimation("running",boyimg)
  boy.scale = 0.07
 
  coingrp = createGroup ();
  bombgrp = createGroup();
  
}

function draw() {
  
 
  if (gamestate===PLAY){
      
  if(road.y>400){
    road.y = 200
  }
  if (keyDown("right_arrow")){
    boy.x = boy.x+3
  }
   if (keyDown("left_arrow")){
    boy.x = boy.x-3
  }
 if(coingrp.isTouching(boy)) {
      coingrp.destroyEach();
      score= score+ 10;
      
    }
   if(bombgrp.isTouching(boy)) {
        boy.destroy()
     gamestate =END
   
   }
 coins();
  bombs();
  
 drawSprites();
    textSize(20);
  fill(255);
  text("Score: "+ score,150,150);
    
  
  }
   if(gamestate===END){
    fill("red")
    textSize(40)
    text("Game Over",230,250)
    road.velocityY= 0
  }
}
function coins() { 
  if (World.frameCount % 320 == 0) {
 coin = createSprite(Math.round(random(50, 350),40, 10, 10));
    coin.addImage(coinImg);
    coin.scale = 0.5
    coin.velocityY = 3; 
    coin.lifetime = 190;
    coingrp.add(coin);
  } 
}
function bombs() { 
  if (World.frameCount % 530 == 0) {
 bomb = createSprite(Math.round(random(50, 350),40, 10, 10));
    bomb.addImage(bombImg);
    bomb.scale = 0.08
    bomb.velocityY = 3; 
    bomb.lifetime = 190;
    bombgrp.add(bomb);
  } 
}
