const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var slingShot; 
var score = 0;

function setup() {
  createCanvas(800,800);
  stroke(255)

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(450,390,900,20);
  stand1 = new Ground(390,300,250,10);
  stand2 = new Ground(700,200,200,10);
  block1 = new Box(300,275,30,40);
  block2 = new Box(330,275,30,40);
  block3 = new Box(360,275,30,40);
  block4 = new Box(390,275,30,40);
  block5 = new Box(420,275,30,40);
  block6 = new Box(450,275,30,40);
  block7 = new Box(480,275,30,40);
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  block16 = new Box(390,155,30,40);

  blocks1 = new Box(640,175,30,40);
  blocks2 = new Box(670,175,30,40);
  blocks3 = new Box(700,175,30,40);
  blocks4 = new Box(730,175,30,40);
  blocks5 = new Box(760,175,30,40);
  blocks6 = new Box(670,135,30,40);
  blocks7 = new Box(700,135,30,40);
  blocks8 = new Box(730,135,30,40);
  blocks9 = new Box(700,95,30,40);
  

  polygon = new Polygon(50,200);
  slingShot = new Rope(polygon.body,{x:100,y:200});
  
}

function draw() {
  background(0);  

  Engine.update(engine);

  ground.display();
  stand1.display();
  stand2.display();

  fill("Chartreuse")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("MediumSlateBlue");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("DeepPink");
  block13.display();
  block14.display();
  block15.display();
  fill("Yellow");
  block16.display();

  fill("Chartreuse");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("MediumSlateBlue");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("DeepPink")
  blocks9.display();
  slingShot.display();
  polygon.display();
  
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();


  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  blocks6.score();
  blocks7.score();
  blocks8.score();
  blocks9.score();







 drawSprites();

 text("Score : " + score,750,40 );

}

function mouseDragged()
{
    Matter.Body.setPosition(polygon.body, {x : mouseX , y : mouseY })
}


function mouseReleased()
{
    slingShot.fly();
}

function keyPressed()
{
    if(keyCode === 32 )
    {
       slingShot.attach(polygon.body);
    }
}


