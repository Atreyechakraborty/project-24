var paper1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
dustbinImg=loadImage("dustbin.png")	
}

function setup() {
	createCanvas(800, 700);


	box1= createSprite(400,600,200,20)
	box1.shapeColor=color("white")
	box1.addImage(dustbinImg)

	box1.scale=0.3

	engine = Engine.create();
	world = engine.world;

	paper1=new paper(200,450,40);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}

