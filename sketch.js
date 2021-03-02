

var car,wall;


var speed,whight;



function setup() {
  createCanvas(800,400);
  
  speed=random(1,5)
  weight=random(400,1500)


  car=createSprite(50,200,50,50);

  car.velocityX = speed;

  car.shapeColor="white";



wall=createSprite(800,200,60,300)
wall.shapeColor="white";

}

function draw() {
  background(0,0,0);
  
  if (wall.x-car.x < (car.width+wall)/2)
  {
     car.velocityX=0;
     var deformation=0.5 * weight * speed* speed/22500
     if(deformation>180)
     {
           car.shapeColor=color(255,0,0);
     }
     if (deformation<180 && deformation>100)
     {
            car.shapeColor=color(230,230,0);
     }
    if (defoemation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }

drawSprites();
}