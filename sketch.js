var box;

function setup() {
  createCanvas(600,600);
  

}

function draw() 
{
   background(30);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    background('black')
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    background('orange')
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background('yellow')
    
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background('red')
    
  }

  drawSprites();
}