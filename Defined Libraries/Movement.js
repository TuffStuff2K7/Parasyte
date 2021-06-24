function movementCheck(){

  if(keyDown("right") || keyDown("d")){
    if(xVel < 5){
      xVel += 0.25;
      bug.changeAnimation("right");
    }
  }
  if(keyDown("left") || keyDown("a")){
    if(xVel > -5){
      xVel -= 0.25;
      bug.changeAnimation("left");
    }
  }
  if(keyDown("down") || keyDown("s")){
    if(yVel < 5){
      yVel += 0.25;
    }
  }
  if(keyDown("up") || keyDown("w")){
    if(yVel > -5){
      yVel -= 0.25;
    }
  }
  
  if(xVel !== 0 && !keyDown("left") && !keyDown("right") && !keyDown("a") && !keyDown("d")){
    if(xVel > 0){
      xVel -= 0.25;
    }
    if(xVel < 0){
      xVel += 0.25;
    }
  }
  
  if(yVel !== 0 && !keyDown("up") && !keyDown("down") && !keyDown("w") && !keyDown("s")){
    if(yVel > 0){
      yVel -= 0.25;
    }
    if(yVel < 0){
      yVel += 0.25;
    }
  }

  bug.collide(edges);
  
  bug.x += xVel;
  bug.y += yVel;

}