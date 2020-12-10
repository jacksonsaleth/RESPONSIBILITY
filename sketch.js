const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,buk1,buk2,buk3,dust,dustimg;
function preload()
{
dustimg=loadImage	("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
       ball=new Ball(100,330);
       ground=new Ground(600,900,width,20);
       buk1=new Buk(900,890,300,10);
      buk2=new Buk(760,740,10,300);
      buk3=new Buk(1020,740,10, 300);
      dust=createSprite(890,720,10,10);
     dust.addImage(dustimg);
	   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,255);
 
  ground.display();
  buk1.display();
  buk2.display();
  buk3.display();
  dust.display();
  ball.display();
  drawSprites();
 
 }

function keyPressed(){


if (keyCode === UP_ARROW) {

  Matter.Body.applyForce(ball.body,ball.body.position,{x:600,y:-600});
  
}
}