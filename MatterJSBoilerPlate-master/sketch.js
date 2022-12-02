
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ceiling;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, bobObject6;
var rope1, rope2, rope3, rope4, rope5, rope6;
var w = 70;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ceiling = new roof(width/2, 75, 500, 70);
	bobObject1 = new bob((width/2)-2*w, 400, 70);
	bobObject2 = new bob((width/2)-w, 400, 70);
	bobObject3 = new bob((width/2), 400, 70);
	bobObject4 = new bob((width/2)+w, 400, 70);
	bobObject5 = new bob((width/2)+2*w, 400, 70);
	
	
	rope1 = new rope(bobObject1.body,ceiling.body,-2*w,0);
	rope2 = new rope(bobObject2.body,ceiling.body,-w,0);
	rope3 = new rope(bobObject3.body,ceiling.body,0,0);
	rope4 = new rope(bobObject4.body,ceiling.body,w,0);
	rope5 = new rope(bobObject5.body,ceiling.body,2*w,0);
	
	
	Engine.run(engine);
	World.add(world,engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
  
	Engine.update(engine);

  ceiling.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
  keyPressed();
  drawSprites();
}
function keyPressed() { 
	if (keyCode === UP_ARROW) { 
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45}); 
	} 
}