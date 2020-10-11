
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var block1,block2,block3



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1=new Ground(800,680,1600,10);
    paper=new Paper(30,280);
    block1=new Dustbin(1400,670,120,10);
    block2=new Dustbin(1340,630,10,90);
    block3=new Dustbin(1460,630,10,90);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground1.display();
  paper.display();
  block1.display();
  block2.display();
  block3.display();
  keyPressed();
  
 
}

function keyPressed() {
 if (keyCode===UP_ARROW){
   Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50})
 }
  
 
 }


