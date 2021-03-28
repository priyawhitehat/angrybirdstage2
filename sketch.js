const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground1;
var log1,log2,log3,log4;
var bird;
var pig1,pig2;
var bgImage;
var platform;

function preload()
{

    bgImage=loadImage("sprites/bg.png")

}
    



function setup(){
    var canvas = createCanvas(900,600);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(400,560);
    box1=new Box(500,540,50,50);
    box2=new Box(750,540,50,50);
    log1=new Log(620,520,20,300,PI/2);
    box3=new Box(500,500,50,50);
    box4=new Box(750,500,50,50);
    log2=new Log(620,480,20,300,PI/2);
    box5=new Box(655,400,50,50);
    log3=new Log(620,400,20,150,PI/7) ;
    log4=new Log(660,400,20,150,-PI/7);

    bird=new Bird(100,200);
    pig1=new Pig(620,540);
    pig2=new Pig(620,500);
}

function draw(){
    background(bgImage);
    Engine.update(engine);
    fill("brown");
    ground1.display();
    fill("yellow");
    box1.display();
    box2.display();
     fill("brown")
    log1.display();
    fill("yellow");
    box3.display();
    box4.display();
     fill("brown")
    log2.display();
    fill("yellow");
     box5.display();
     fill("brown");
     log3.display();
     log4.display();
     bird.display();
    pig1.display();
    pig2.display();
}