
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
boyImages = loadImage("images/boy.png");
treeImages = loadImage("images/tree.png");
stoneImages = loadImage("images/stone.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(650,595,1300,10);
	stone = new Stone (150,500,30,30);
  slingshot = new Slingshot (stone.body,{x:150,y:500});
  mango1 = new Mango(500,100);
  mango2 = new Mango(520,150);
  mango3 = new Mango(510,130);
  mango4 = new Mango(515,120);
  mango5 = new Mango(525,125);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  imageMode(CENTER);
  image(treeImages, 1050, 350, 450, 600);
  image(boyImages, 200,530,200,300);
  ground.display()
  stone.display();
  slingshot.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
  sling1.fly();
}


