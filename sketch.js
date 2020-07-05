
var packageBody,ground,paperball,dustbin1,dustbin2,dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
 ground=new Ground(400,370,1200,20);
   paperball=new Paper(10,200,20);
   paperball.velocityX=4;
  dustbin1=new Dustbin(595,310,10,100) ;
  dustbin2=new Dustbin(705,310,10,100) ;
  dustbin3=new Dustbin(650,355,100,10) ;
 
}


function draw() {
  rectMode(CENTER);
  background(0);
 
 
  Ball();
  ground.display();
  paperball.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}

function Ball(){
 if(keyCode === 38){
	 Matter.Body.applyForce(paperball.body,paperball.body.position,{x:50,y:-50});
 }
}



