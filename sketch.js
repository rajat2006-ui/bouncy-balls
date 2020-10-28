const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground,ball;



function setup(){
  var canvas=createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;

  var ground_option={isStatic:true};
  var ball_option={restitution:1.0}

  ground=Bodies.rectangle(200,350,400,30,ground_option);
  World.add(world,ground);
  ground.debug=true;

  ball=Bodies.circle(200,100,30,ball_option);
  World.add(world,ball);
  ball.debug=true;
  console.log(ground.position.y);
}

function draw(){
  background("lightblue");

  Engine.update(engine);

  

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,30);

  ellipse(ball.position.x,ball.position.y,30,30);
}