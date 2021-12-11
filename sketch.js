const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
var shapes;
var border

function setup() {
  createCanvas(800,400);
 //createSprite(400, 200, 50, 50);
  
 engine = Engine.create(); 
 world = engine.world
 var shapeOptions={
restitution : 2

 }
 shapes = Bodies.circle(400, 200, 30,shapeOptions) 
 World.add(world,shapes)
 
 console.log(shapes) 

var options={
  isStatic : true  
}



 border = Bodies.rectangle(10,390,800,10,options)
 World.add(world,border)
 
}

function draw() {
  background("cyan");  
  
  Engine.update(engine)
  ellipse(shapes.position.x,shapes.position.y,30)

  rect(border.position.x,border.position.y,800,10)
}