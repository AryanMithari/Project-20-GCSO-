var car, wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  wall = createSprite(1300,200,40, height/2);

  car.velocityX = speed
}

function draw() {
  background("lightblue"); 

  if (wall.x - car.x < wall.width/2 + car.width/2){
    car.velocityX = 0;

    var deformation = 1 * speed * speed  / 22500;

    if( deformation < 0.15){
      car.shapeColor="green" ;
    }
    
    if( deformation > 0.15 && deformation < 0.25){
      car.shapeColor="yellow";
    }

    if( deformation > 0.25 && deformation <0.5){
      car.shapeColor="red";
    }
  }

  drawSprites();
}