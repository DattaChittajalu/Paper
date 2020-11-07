
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1,bin2,bin3
var paper
var ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(width/2, 690, width, 10)
	bin1=new Bin(600, 675, 200, 20)
	bin2=new Bin(500, 635,20,100)
	bin3=new Bin(700, 635,20,100)

	paper=new Paper(100,100, 20, 20)

	
  
}


function draw() {
  Engine.update(engine);
  background(0);
  
  ground.display()
  bin1.display()
  bin2.display()
  bin3.display()
  paper.display()

 
}
function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	   Matter.Body.applyForce(paper.body, paper.body.position, {x:60,y:-60})
	 }
   }



