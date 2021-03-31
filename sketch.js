var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);

  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ob1 = createSprite(125,300,70,50);
  ob2 = createSprite(175,300,75,55);

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {

  
  background(0,0,0);  
  ob1.x = mouseX
  ob1.y = mouseY
  if (isTouching(ob1,ob2)){
  ob1.shapeColor= "cyan"
  ob2.shapecolor="blue"

  }
  else{ob1.shapeColor= "orange"
       ob2.shapeColor="Magenda"}
bounceOff(fixedRect,movingRect)
  drawSprites();
}

