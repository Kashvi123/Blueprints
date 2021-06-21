//name Spacing or nicknaming.
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

//declaring var for game
var engine,world;
var ground;
var box1,box2


function setup() {
  createCanvas(1200,400);

  //created game engine from matter.engine
  engine = Engine.create();
  //the game world = the engine world
  world = engine.world

  ground = new Ground(600,400,1200,20);

  box1 = new Box(500,300,50,50);
  box2 = new Box(540,0,50,100);

}

function draw() {
  background("blue");  

  //to update teh engine from matter.engine
  Engine.update(engine);
 
  ground.display();
  box1.display();
  box2.display();
}