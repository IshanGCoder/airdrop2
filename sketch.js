const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG,rect1Sprite,rect2Sprite,rect3Sprite;
var packageBody,ground,rect1,rect2,rect3;
function preload() {

	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.65

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
    
    rect1Sprite=createSprite(390,660,110,10);
    rect1Sprite.shapeColor=color("red");
    rect2Sprite=createSprite(440,640,10,50);
    rect2Sprite.shapeColor=color("red");
    rect3Sprite=createSprite(340,640,10,50);
    rect3Sprite.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
  rect1 = Bodies.rectangle(390,640,100,10, {isStatic: true});
  World.add(world, rect1)
  rect2 = Bodies.rectangle(440,640,10,50, {isStatic: true});
  World.add(world, rect2)
  rect3 = Bodies.rectangle(340,640,10,50, {isStatic: true});
  World.add(world, rect3)
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  keyPressed();
  drawSprites();
}


function keyPressed() {
 if (keyCode === DOWN_ARROW) {
 Matter.Body.setStatic(packageBody,false);
 } 
}