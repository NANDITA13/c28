var myEngine , myWorld ;

var box1 , box2 , box3 , box4 , box5 , ground;

var log1 , log2 , log3 , log4;

var bird , pig1 , pig2;

var backgroundImage;

var mConstraint;



const Engine= Matter. Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;


function preload () {


  backgroundImage = loadImage ("sprites/bg.png");

}





function setup() {

  var canvas = createCanvas(1200,400);

  myEngine = Engine . create ();

  myWorld = myEngine . world;

  box1 = new Box(700,320,70,70);

  ground = new Ground(600,height , width,20 );

  box2 = new Box (900,320,70,70);

  pig1 = new Pig (800,300);

  log1 = new Log (800,280,280,PI/2);

  box3 = new Box (700,260,70,70);

  box4 = new Box (900,260,70,70);

  pig2 = new Pig (800,240);

  log2 = new Log (800,200,280,PI/2);

  box5 = new Box (800,160,70,70);

  log3 = new  Log (740,120,150 , PI/7);

  log4 = new Log (860,120,150, -PI/7);

  bird = new Bird (100,100);

  platform = new Ground (125,325,270,170);

  slingShot = new SlingShot (bird.body , {x:100 , y:100});

var canvasMouse = Mouse.create (canvas.elt);
canvasMouse.pixelRatio = pixelDensity ();
var options = {
   
  mouse:canvasMouse

}

mConstraint = MouseConstraint.create (options);
World.add (myWorld , mConstraint)






  
}


function draw() {
  background(backgroundImage);  

  Engine.update (myEngine);

  box1.display ();

  ground.display ();

  box2.display ();

  pig1.display ();

  log1.display ();

  box3.display ();

  box4.display ();


  log2.display ();

  box5.display ();

 

  log3.display ();

  log4.display ();

  pig2.display ();

  bird.display ();

  platform.display ();

  slingShot.display ();
  
}

//function mouseDragged () {

 // Matter.Body.setPosition (bird.body , {x: mouseX , y:mouseY});

//}

function mouseReleased () {
setTimeout (function () {
slingShot.fly ();
},150);
  
}