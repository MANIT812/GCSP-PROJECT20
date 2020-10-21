var car
var wall;
var speed,weight,deformation;

function setup() {
  createCanvas(800,400);
  car=createSprite(100,200,50,20);
  wall=createSprite(700,200,20,80);
}

function draw() {
  background("black");
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
  car.collide(wall); 
  deformation = (speed * speed * weight * 0.5) / 22500;
  if (wall.x - car.x < (car.width / 2 + wall.width / 2)) {
    if (deformation > 180) {
      car.shapeColor = color(255,0,0);
    }
    elif(deformation < 80); {
      car.shapeColor = color(230,230,0);
    }
    elif(deformatiom > 80 || deformation < 180); {
      car.shapeColor = color(0,235,0);
    }
  }
  drawSprites();
}