var ball1,ball2
function setup() {
  createCanvas(800,800)
ball1=createSprite(300,300,50,50)
ball1.shapeColor="red"
  
ball2=createSprite(400,400,80,80)
ball2.shapeColor="red"

}

function draw() {
  background("black")

  ball2.y=World.mouseY
  ball2.x=World.mouseX
  
  if(ball2.x - ball1.x < ball2.width/2 + ball1.width/2
    &&  ball1.x - ball2.x < ball2.width/2 + ball1.width/2
    && ball2.y-ball1.y< ball2.height/2+ball1.height/2
    && ball1.y-ball2.y< ball2.height/2 + ball1.height/2 
    ){

    ball1.shapeColor="green"
    ball2.shapeColor="green"

  }else{
    ball1.shapeColor="red"
    ball2.shapeColor="red"
  }



















  drawSprites();
}
