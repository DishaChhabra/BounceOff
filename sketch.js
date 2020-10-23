function setup() {
  createCanvas(800,400);
  fixrect = createSprite(200, 100, 70, 50);
  fixrect.velocityY = 5;
  moverect = createSprite(200,300,50,70);
  moverect.velocityY = -5;
}

function draw() {
  background("pink");
  if(abs(fixrect.x-moverect.x) < fixrect.width/2 + moverect.width/2){
    moverect.velocityX = moverect.velocityX * (-1);
    fixrect.velocityX = fixrect.velocityX * (-1);
  }  
  if(abs(fixrect.y-moverect.y) < fixrect.height/2 + moverect.height/2){
    moverect.velocityY = moverect.velocityY * (-1);
    fixrect.velocityY = fixrect.velocityY * (-1);
  }  
  drawSprites();
}