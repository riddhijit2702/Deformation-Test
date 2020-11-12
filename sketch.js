var car,wall;
var speed,weight,deformation;




function setup() {
  createCanvas(1500,400);
  speed=Math.round(random(55,90))
  weight=Math.round(random(400,1600))
 car= createSprite(200, 180, 50, 50);
 car.velocityX=speed;
 car.shapeColor="green"
 wall=createSprite(1500,200,50,150)

 
}

function draw() {
  background("black");
  if(wall.x-car.x<car.width/2+wall.width/2)  {
car.setVelocity(0,0)
 deformation=0.5*weight*speed*speed/22500;
  
  if(deformation>180){
   car.shapeColor=color(255,0,0)
  }
 if(deformation<180&&deformation>100){
  car.shapeColor=color(230,230,0)
  }
 if(deformation<100){
  car.shapeColor=color(0,255,0)
 }
  }
  drawSprites();
} 
