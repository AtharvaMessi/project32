const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var stand,box1,box2,box3,box4;
var box5,box12,box13,box14,box15,box16;
var box17,box18,box19,box20,box21,box22;
var box24,box25,box27,box28,slingshot,stand2;
var polygon,polygonimg,stand1;
var score;
var blocks1,blocks2,blocks3,blocks4,blocks5,blocks6,blocks7,blocks8,blocks9;


function preload(){
    polygonimg=loadImage("polygon.png");
}

function setup(){
    createCanvas(1000,600);

    engine = Engine.create();
    world = engine.world;

    stand1=new Stand(410,550,250,20);
    box1=new Box(400,525,30,40);
    box2=new Box(370,525,30,40);
    box3=new Box(340,525,30,40);
    box4=new Box(310,525,30,40);
    box5=new Box(430,525,30,40);
    box6=new Box(460,525,30,40);
    box7=new Box(490,525,30,40);
    box8=new Box(460,485,30,40);
    box9=new Box(430,485,30,40);
    box10=new Box(400,485,30,40);
    box11=new Box(370,485,30,40);
    box12=new Box(340,485,30,40);
    box13=new Box(430,445,30,40);
    box14=new Box(400,445,30,40);
    box15=new Box(370,445,30,40);
    box16=new Box(400,405,30,40);

    stand2=new Stand(700,300,200,20);
    box17=new Box(720,280,30,40);
    box18=new Box(690,280,30,40);
    box19=new Box(660,280,30,40);
    box20=new Box(670,280,30,40);
    box21=new Box(740,280,30,40);
    box22=new Box(720,240,30,40);
    box23=new Box(695,240,30,40);
    box24=new Box(675,240,30,40);
    box25=new Box(695,200,30,40);
  
    

    ground=new Ground(100,337,2000,20);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot = new Slingshot(polygon,{x:100,y:450});

    Engine.run(engine);

    

}

function draw(){
    rectMode(CENTER);
    background("orange");

    drawSprites();

    stand1.display();

    fill("turquoise")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    
    stand2.display();
    slingshot.display();
    ground.display();

    score=0;
    text("SCORE + score,750,40");

 


fill("gold");
    imageMode(CENTER)
    image(polygonimg,polygon.position.x,polygon.position.y,40,40);

    slingshot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}
 
function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon);
    }
}

async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);
    var datatime = responseJSON.datatime;
    var hour = datatime.slice(11,13);
    console.log(hour);
}



    