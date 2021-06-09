class Animal{

    constructor(type, x, y){
        
        this.type = type;

        switch (type) {
            
            case 1:
                this.health = 10;
                this.resistance = 5;
                this.time = 200;   
                this.color = "green";             
            break;
        
            case 2:
                this.health = 50;
                this.resistance = 25;
                this.time = 500;     
                this.color = "yellow";             
            break;
        
            case 3:
                this.health = 150;
                this.resistance = 100;
                this.time = 1500;    
                this.color = "red";             
            break;
        
            case 4:
                this.health = 500;
                this.resistance = 500;
                this.time = 3000; 
                this.color = "white";             
            break;
        
            case 5:
                this.health = 1000;
                this.resistance = 750;
                this.time = 5000;                
                this.color = "black";             
            break;
        
            default:
            break;
        
        }

        this.sprite = createSprite(x, y, 40, 40);
        this.sprite.shapeColor = this.color;
        this.sprite.lifetime = this.time;

        mobCheck.push(this.sprite);

        this.tempX = random(100, 700);
        this.tempY = random(100, 500);

        this.life = false;

    }

    movement(){

        this.tempX = this.tempX + random(-10, 10);
        this.tempY = this.tempY + random(-10, 10);

        if(this.tempX > this.sprite.x){
            this.sprite.x += (this.tempX - this.sprite.x)/200;
        }

        if(this.tempX < this.sprite.x){
            this.sprite.x -= (this.tempX - this.sprite.x)/200;
        }

        if(this.tempY > this.sprite.y){
            this.sprite.y += (this.tempY - this.sprite.y)/200;
        }

        if(this.tempY < this.sprite.y){
            this.sprite.y -= (this.tempY - this.sprite.y)/200;
        }

        if(this.sprite.x > 0 && this.sprite.x < width && this.sprite.y > 0 && this.sprite.y < width){
            this.life = true;
        }

        if((this.sprite.x < -50 || this.sprite.x > width + 50 || this.sprite.y < -50 || this.sprite.y > width + 50) && this.life === true){
            this.sprite.lifetime = 0;
        }

    }

}