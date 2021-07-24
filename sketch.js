var score=0
var gameState="play"
function preload(){
  //pre-load images
  running = loadAnimation("runner-1.png", "runner-2.png");
  path=loadImage("path.png")
  coinImage=loadImage("coin.png")
  energyimage=loadImage("energyDrink.png")
  bombImage=loadImage("bomb.png")
  powerImage=loadImage("power.png")
}



function setup(){
  
  createCanvas(400,400);
  // //create sprites here
  
  // path
  path1=createSprite(200,200)
  path1.addImage("way", path)
  path1.scale=1.2
  //coin
  coin=createSprite(100,0,20,20)
  coin.addImage("coining", coinImage)
  coin.scale=0.3
  // energyDrink
  energyDrink=createSprite(200,50,20,20)
  energyDrink.addImage("drink", energyimage)
  energyDrink.scale=0.1
  //bomb
   bomb=createSprite(325,50,20,20)
   bomb.addImage("bom", bombImage)
   bomb.scale=0.07
  //jack
  jack=createSprite(200,340,20,20)
  jack.addAnimation("runner", running)
  jack.scale=0.02
  
  power=createSprite(200,100,20,20)
  power.addImage("strength", powerImage)
  power.scale=0.5
  power.visible=false 
  boundaryleft=createSprite(0,0,100,800)
  boundaryright=createSprite(410,0,100,800)
  boundaryleft.visible=false
  boundaryright.visible=false
}



function draw() {
  
  background(0);
  if(jack.isTouching(coin)|| (jack.isTouching(energyDrink))){
    score=score+10
    
  }
  
  if(gameState=="play"){
    jack.x=World.mouseX
    path1.velocityY=4
    if(path1.y>400){
      path1.y=height/2
      
    }  
    // if(score==100|| (jack.isTouching(bomb))){
    //   gameState=="end"
    // }
  }
    //path coding
  console.log
  
  

  edges=createEdgeSprites()
  jack.collide(edges[0])

  jack.collide(boundaryright)
  jack.collide(boundaryleft)
   
  //coin coding
  coin.velocityY=4
  if(jack.isTouching(coin)){
    coin.y=0
    coin.x=300
    
  }
  if(coin.y>400){
    coin.y=0
    coin.x=200
    
  }
  // energy
  energyDrink.velocityY=4
  if(jack.isTouching(energyDrink)){
    energyDrink.y=0
    energyDrink.x=200
    power.visible=true
    
  }
  else
  power.visible=false
  if(energyDrink.y>400){
    energyDrink.y=0
    energyDrink.x=100
    
  }
  if(jack.isTouching(energyDrink)&& (energyDrink.x=200)){
    energyDrink.x=100
    
  }

  //bomb
  if(bomb.y>400){
    bomb.y=75
    bomb.x=100
   
  }

  
  bomb.velocityY=4
  // if(jack.isTouching(bomb)){
  //   coin.velocityY=0
  //   energyDrink.velocityY=0
  //   bomb.velocityY=0
  //   path1.velocityY=0

  // }
  // else
  
  // moving jack

  
  drawSprites();
  
  textSize(20)
  fill("orange")
  text("Score " + score,160,375)

  if(score==100|| (jack.isTouching(bomb))){
    textSize(20)
    fill("white")
    text("Game Over",150,200)
    coin.velocityY=0
    energyDrink.velocityY=0
    bomb.velocityY=0
    path1.velocityY=0
  }
  
}
