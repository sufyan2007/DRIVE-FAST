var lineone,linetwo;
var lines, lines2,lines3;
var car,gaadi;
var one,two;
var carr;
var centre;
var centre2,centre3;
var score;
var gold,goldbar,gG;
var PLAY=1;
var END=0;
var gState=PLAY;
var carG,carG2,carG3,carG4,carG5,carG6;
var cG1,cG2,cG3;
var restart,start;
var drive;

function preload(){
  gaadi=loadImage("car2.png");
  
  car2=loadImage("car.png");
  car3=loadImage("car3.png");
  car4=loadImage("car4.png");
  
  gold=loadImage("gold.png");
  restart=loadImage("restrt.png");
  
 
}

function setup(){
  createCanvas(400,600);
  for (var i = 0; i < 590; i=i+90){
  
    lines=createSprite(80, i, 10, 60);
    lines.shapeColor=("white")
    lines.velocityY=10;
    lines.lifetime=400;
    
    
    lines2=createSprite(200, i, 10, 60);
    lines2.shapeColor=("white")
    lines2.velocityY=10;
    lines2.lifetime=400;
    
    
    lines3=createSprite(320, i, 10, 60);
    lines3.shapeColor=("white")
    lines3.velocityY=10;
    lines3.lifetime=400;
    
  }
  
   start=createSprite(200,300);
    start.addImage(restart);
    start.scale=0.7;
    
  
    car=createSprite(200,450);
    car.addImage(gaadi);
    car.scale=0.15;

    one=createSprite(10,300,20,600);
    one.visible=false;
    two=createSprite(390,300,20,600);
    two.visible=false;
  
    score=0;
  drive=0;
  
   gG=new Group();
  
    carG=new Group();
    carG2=new Group();
    carG3=new Group();
    carG4=new Group();
    carG5=new Group();
    carG6=new Group();
    cG1=new Group();
    cG2=new Group();
    cG3=new Group();
}

function draw(){
  
 
  background("brown");
  
  if (gState===PLAY){
    start.visible=false;
    
    drive=Math.ceil(frameCount/frameRate());
    
  fill("#ff0087")
  rect(0,0,20,600)
  rect(380,0,20,600)
  
  fill("#875f5f")
  rect(20,0,120,600)
  rect(140,0,120,600)
  rect(260,0,120,600)
  
  strokeWeight(7);
  stroke("#ff5fff");
  line(140,0,140,600);
  line(260,0,260,600);
  
  carG.collide(carG2);
  carG3.collide(carG4);
  carG5.collide(carG6);
    
  if (keyDown("left")){
    
    car.x=car.x-10;
  }
  if (keyDown ("right")){
    car.x=car.x+10;
  }
  
  car.collide(one);
  car.collide(two);
  
  if (gG.isTouching(car)){
      score=score+1;
      gG.destroyEach();
    }

    
    if (carG.isTouching (car)){
      gState=END;
      carG.destroyEach();
    }
    if (carG2.isTouching (car)){
      gState=END;
      carG2.destroyEach();
    }
    if (carG3.isTouching (car)){
      gState=END;
      carG3.destroyEach();
    }
    if (carG4.isTouching (car)){
      gState=END;
      carG4.destroyEach();
    }
    if (carG5.isTouching (car)){
      gState=END;
      carG5.destroyEach();
    }
    if (carG6.isTouching (car)){
      gState=END;
      carG6.destroyEach();
    }
    
    
  cars1();
  cars2();
  cars3();
  golds();
    
  }
  if (gState===END){
    
   start.visible=true;
    
    car.x=200;
     car.y=450;
    
    textSize(50);
    textFont("georgia");
    fill("indigo");
    stroke("white");
    text("crash!!",120,200);
     
    carG.destroyEach();
    carG2.destroyEach();
    carG3.destroyEach();
    carG4.destroyEach();
    carG5.destroyEach();
    carG6.destroyEach();
    
    gG.destroyEach();
    
    
   
    carG.seyVelocityYEach=0;
    carG2.setVelocityYEach=0;
    carG3.setVelocityYEach=0;
    carG4.setVelocityYEach=0;
    carG5.setVelocityYEach=0;
    carG6.setVelocityYEach=0;
    
    cG1.setVelocityYEach=0;
    cG2.setVelocityYEach=0;
    cG3.setVelocityYEach=0;
    
     cG1.destroyEach();
    cG2.destroyEach();
    cG3.destroyEach();
 
    
    if (mousePressedOver(start)){
      gState=PLAY;
      reset();
      cG1.destroyEach();
      cG2.destroyEach();
      cG3.destroyEach();
    }
    
  }

  drawSprites();
    s1();
 
  
  
  fill("blue")
  stroke("white");
  strokeWeight(3);
  textSize(20);
  text("SCORE: "+score,260,30);
  
  text("drive - "+drive,50,30)
  
}
function reset(){
  
     score=0;
  
    frameCount=0;
 
    
    for (var i = 0; i < 590; i=i+90){
  
    lines=createSprite(80, i, 10, 60);
    lines.shapeColor=("white")
    lines.velocityY=10;
    lines.lifetime=400;
    lines.depth=40;
    
    
    lines2=createSprite(200, i, 10, 60);
    lines2.shapeColor=("white")
    lines2.velocityY=10;
    lines2.lifetime=400;
    lines2.depth=40;
    
    lines3=createSprite(320, i, 10, 60);
    lines3.shapeColor=("white")
    lines3.velocityY=10;
    lines3.lifetime=400;
    lines3.depth=40;
    }
     carG.seyVelocityYEach=10;
    carG2.setVelocityYEach=10;
    carG3.setVelocityYEach=10;
    carG4.setVelocityYEach=10;
    carG5.setVelocityYEach=10;
    carG6.setVelocityYEach=10;
  
   
    cG1.setVelocityYEach=10;
    cG2.setVelocityYEach=10;
    cG3.setVelocityYEach=10;
  
}


function s1(){
  
  if (frameCount%10===0){
     centre=createSprite(80,-20,10,60);
    centre.shapeColor=("white");
    centre.velocityY=10;
    centre.lifetime=320;
    centre.depth=40;
    car.depth=centre.depth+1;
    
    cG1.add(centre);
     
  }
  
  if (frameCount%10===0){
    centre2=createSprite(200,-20,10,60);
    centre2.shapeColor=("white");
    centre2.velocityY=10;
    centre2.lifetime=320;
    centre2.depth=40;
    car.depth=centre2.depth+1;
  
    cG2.add(centre2);
  }
  
  if (frameCount%10===0){
    centre3=createSprite(320,-20,10,60);
    centre3.shapeColor=("white");
    centre3.velocityY=10;
    centre3.lifetime=320;
    centre3.depth=40;
    car.depth=centre3.depth+1;
    
     cG3.add(centre3);
  } 
}

function cars1(){
   
 var f=Math.round(random(1,2));
  if (f==1){
  if (frameCount%180===0){
     carr=createSprite(100,-20);
    var r=Math.round(random(1,3));
    if (r==1){
      carr.addImage(car2);
      carr.scale=0.08
    }
    else if (r==2){
      carr.addImage(car3);
      carr.scale=0.045
    }
    else{
      carr.addImage(car4);
      carr.scale=0.08;
    }
     carr.collide(carr);
    carr.velocityY=10;
     carr.velocityY=carr.velocityY-5;
     carr.lifetime=130;
    if(drive>0 && drive%10===0){
    carr.velocityY=carr.velocityY+0.5;
    }
    carG.add(carr);
  }
  if (f==2){
    if (frameCount%80===0){
     carr=createSprite(80,-20);
    var r=Math.round(random(1,3));
    if (r==1){
      carr.addImage(car2);
      carr.scale=0.08
    }
    else if (r==2){
      carr.addImage(car3);
      carr.scale=0.045
    }
    else{
      carr.addImage(car4);
      carr.scale=0.08;
    }
       carr.collide(carr);
    carr.velocityY=10;
      carr.velocityY=carr.velocityY-5;
     carr.lifetime=130;
      if(drive>0 && drive%10===0){
      carr.velocityY=carr.velocityY+0.5;
      }
      carG2.add(carr);
    
    }
  }
  }


}

function cars2(){
  var e=Math.round(random(1,2));
  if (e==1){
  if (frameCount%80===0){
     carr=createSprite(200,-20);
    var t=Math.round(random(1,3));
    if (t==1){
      carr.addImage(car2);
      carr.scale=0.08
    }
    else if (t==2){
      carr.addImage(car3);
      carr.scale=0.045
    }
    else{
      carr.addImage(car4);
      carr.scale=0.08;
    }
     carr.collide(carr);
    carr.velocityY=10;
     carr.velocityY=carr.velocityY-5;
    carr.lifetime=130;
    if(drive>0 && drive%10===0){
    carr.velocityY=carr.velocityY+0.5;
    }
    carG3.add(carr);
    
  }}
  if (e==2){
    if (frameCount%160===0){
     carr=createSprite(200,-20);
    var t=Math.round(random(1,3));
    if (t==1){
      carr.addImage(car2);
      carr.scale=0.08
    }
    else if (t==2){
      carr.addImage(car3);
      carr.scale=0.045
    }
    else{
      carr.addImage(car4);
      carr.scale=0.08;
    }
       carr.collide(carr);
    carr.velocityY=10;
       carr.velocityY=carr.velocityY-5;
     carr.lifetime=130;
     if(drive>0 && drive%10===0){
      carr.velocityY=carr.velocityY+0.5;
     }
      carG4.add(carr);
    
    }
  }
}


function cars3(){
var s=Math.round(random(1,2));
  if (s==1){
  if (frameCount%120===0){
     carr=createSprite(320,-20);
    var r=Math.round(random(1,3));
    if (r==1){
      carr.addImage(car2);
      carr.scale=0.08
    }
    else if (r==2){
      carr.addImage(car3);
      carr.scale=0.045
    }
    else{
      carr.addImage(car4);
      carr.scale=0.08;
    }
     carr.collide(carr);
    carr.velocityY=10;
     carr.velocityY=carr.velocityY-5;
    carr.lifetime=130;
    if(drive>0 && drive%10===0){
    carr.velocityY=carr.velocityY+0.5;
    }
    carG5.add(carr);
  }}
  if (s==2){
    if (frameCount%190===0){
     carr=createSprite(320,-20);
    var r=Math.round(random(1,3));
    if (r==1){
      carr.addImage(car2);
      carr.scale=0.08
    }
    else if (r==2){
      carr.addImage(car3);
      carr.scale=0.045
    }
    else{
      carr.addImage(car4);
      carr.scale=0.08;
    }
      carr.collide(carr);
    carr.velocityY=10;
   carr.velocityY=carr.velocityY-5;
    carr.lifetime=130;
     
      if(drive>0 && drive%10===0){
      carr.velocityY=carr.velocityY+0.5;
    }
      
      carG6.add(carr);
    }
  }
}

function golds(){
  if (frameCount%120==0){
    goldbar=createSprite(0,0);
    goldbar.addImage(gold);
    
    var g=Math.round(random(1,3));
    if (g==1){
      goldbar.x=80;
    }
    if (g==2){
      goldbar.x=200;
    }
    if (g==3){
      goldbar.x=320;
    }
    
    
    goldbar.scale=0.08;
    goldbar.velocityY=10;
    goldbar.lifetime=60;
    goldbar.depth=41;
    
    gG.add(goldbar);
    
    
  }
}