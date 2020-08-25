const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg,platform;
var straw1, slingshot;
var dustbin1,Dustbinimag;
var catapultImg,catapult;
var gameState = "onSling";

var score = 0;

function preload() {
   backgroundImg=loadImage("images/Bg2.jpg");
   catapultImg=loadImage("images/Slingshot.png");
   Dustbinimage=loadImage("images/tile000.png");
   strawImg = loadImage("images/straws.png");
   maskImg = loadImage("images/mask.png");
 image3 = loadImage("images/syringe.png");
 Earthimg = loadImage("images/Earth.png");
  
}

function setup(){
    var canvas = createCanvas(displayWidth-20,displayHeight+50);
    engine = Engine.create();
    world = engine.world;
   
    // dustbin1 = new Surgicaldustbin(1200,750,50,50);
    catapult = createSprite(150,590,100,100);
    catapult.addImage(catapultImg);
    
    Earth= createSprite(1080,450,100,100);
    Earth.addImage( Earthimg );
    dustbin1 = createSprite(1200,350,50,50);
    
    dustbin1.addImage( Dustbinimage);
    dustbin1.scale=0.55;
    ground = new Ground(600,height-100,1200,20);
    straw = new Straw(150,50);
    straw1= createSprite(500,100,50,50);
    straw1.addImage(strawImg);
    Istraw= createSprite(500,100,50,50);
    
    straw1.scale=0.2;
    mask = new Mask(150,50);
    mask1= createSprite(600,100,50,50);
    mask1.addImage(maskImg);
    mask1.scale=0.2;
    
   // dustbin1.debug=true;
    dustbin1.setCollider("rectangle",0,0,100,100);
   slingshot1 = new SlingShot(straw.body,{x:150, y:525});
   slingshot2 = new SlingShot(mask.body,{x:150, y:525});
  
}

function draw(){
   
    if(backgroundImg)
        
    background(backgroundImg);
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
        fill("red");
        text(mouseX+','+mouseY,50,50);
    Engine.update(engine);
    //strokeWeight(4);
//straw.display();
   //dustbin1.display();
    //log6.display();
  // slingshot.display();
   // bird.randomImg();
   /*if( mouseDown(LEFT)||mouseUp(LEFT) ) 
     {   if((mousePressedOver(straw1))){
       straw.display();
    slingshot1.display();}
    else if((mousePressedOver(mask1))){
       mask.display();
       slingshot2.display();
   } }*/
   if(mousePressedOver(Istraw)){
       resetStraw();
}
   
  
    drawSprites();   
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(straw.body, {x: mouseX , y: mouseY});
       
    }
}


function mouseReleased(){
    slingshot1.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && straw.body.speed < 1){
      
       Matter.Body.setPosition(straw,{x:200, y:50});
       slingshot1.attach(straw.body);
    }
}

function resetStraw(){
    
    Istraw.destroy();
    if (gameState!=="launched"){
        straw.display();
        slingshot1.display();
    }
}