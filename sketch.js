
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground=new Ground(600,10,1200,20)
	pendilum=new bob(200,650)
	pendilum1=new bob(300,650)
	pendilum2=new bob(400,650)
	pendilum3=new bob(500,650)
	pendilum4=new bob(600,650)

	rope1=new rope(pendilum.body,ground.body,-pendilum*2,0)
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  pendilum.display();
  pendilum1.display();
  pendilum2.display();
  pendilum3.display();
  pendilum4.display();
  rope1.display();
  
  drawSprites();
 
}