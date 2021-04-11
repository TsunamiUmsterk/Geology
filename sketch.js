const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer1;
var shape;
var stone;
var ground;
var sandballs1, sandballs2, sandballs3,
    sandballs4, sandballs5, sandballs6, sandballs7;

function setup(){
    var canvas = createCanvas(1400,780);
    engine = Engine.create();
    world = engine.world;

    hammer1 = new Hammer(200,250,150,40);
    stone = new Stone(500,400,80,80)
    ground = new Ground(700,770,1400,15);
    rubber = new Rubber(600,300,40);
    sandballs1 = new Sand(100,100,6);
    sandballs2 = new Sand(300,100,6);
    sandballs3 = new Sand(500,100,6);
    sandballs4 = new Sand(700,100,6);
    sandballs5 = new Sand(900,100,6);
    sandballs6 = new Sand(1100,100,6);
    sandballs7 = new Sand(1300,100,6);


   
}

function draw(){
    background("aqua");
    Engine.update(engine);
    hammer1.display();
    ground.display();
    stone.display();
    rubber.display();
    sandballs1.display();
    sandballs2.display();
    sandballs3.display();
    sandballs4.display();
    sandballs5.display();
    sandballs6.display();
    sandballs7.display();
}



