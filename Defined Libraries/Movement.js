function movementCheck(){
    
    bug.collide(edges);
        
    if(keyDown("right")){
      if(xVel < 3){
        xVel += 0.25;
      }
    }
    if(keyDown("left")){
      if(xVel > -3){
        xVel -= 0.25;
      }
    }
    if(keyDown("down")){
      if(yVel < 3){
        yVel += 0.25;
      }
    }
    if(keyDown("up")){
      if(yVel > -3){
        yVel -= 0.25;
      }
    }
  
    if(xVel !== 0 && !keyDown("left") && !keyDown("right")){
      if(xVel > 0){
        xVel -= 0.25;
      }
      if(xVel < 0){
        xVel += 0.25;
      }
    }
  
    if(yVel !== 0 && !keyDown("up") && !keyDown("down")){
      if(yVel > 0){
        yVel -= 0.25;
      }
      if(yVel < 0){
        yVel += 0.25;
      }
    }
  
    bug.x += xVel;
    bug.y += yVel;
  }
