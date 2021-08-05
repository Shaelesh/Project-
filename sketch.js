var garden,rabbit;
var gardenImg,rabbitImg;
var apple , ai ;
var leaf , li ;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  ai = loadImage("apple.png");
  li = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  if(keyDown(LEFT_ARROW)){
    rabbit.x=rabbit.x-2;
  }
  if(keyDown(RIGHT_ARROW)){
    rabbit.x = rabbit.x+2;
  }
  if(frameCount%80==0){
  if(frameCount%2==0){
    createapple();
  }
  if(frameCount%3==0){
    createleaf();
  }
  }
  console.log();
  drawSprites();
}

function createapple(){
  apple = createSprite(random(50,350),50,10,10);
  apple.addImage(ai);
  apple.scale = 0.05 ; 
  apple.velocityY = 2 ;
  apple.depth = rabbit.depth ;
  rabbit.depth = rabbit.depth + 2;
}
 function createleaf(){
   leaf = createSprite(random(50,350),50,10,10);
   leaf.addImage(li);
   leaf.scale = 0.05 ; 
   leaf.velocityY = 2 ; 
   leaf.depth = rabbit.depth ;
   rabbit.depth = rabbit.depth+2 ;
  

 }







