class Human{

    constructor(){
    
        this.x = random(width);
        this.speed = random(0.5, 1.5);
        this.y = random(-10, -1 * height);
        this.sickness = false;
    
    }

    move(){
        
        this.y += this.speed;
        //this.x += 2;
        if(this.y > height + 20){
           this.y = random(0, -1 * height);
           this.x = random(width);
        }

        this.pos = {x = this.x, y = this.y};
        if(dist(this.pos,)){
            this.sickness = true;
        }
    
    }

    render(){
    
        stroke("#dbe6fd");

        if(this.sickness = false){
            fill("green");
        }
        else{
            fill("red");
        }

        ellipse(this.x, this.y, 30, 30)
    }

}