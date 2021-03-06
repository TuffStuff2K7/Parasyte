var bug;
var font, leftAnim, rightAnim;

var xVel = 0, yVel = 0;

var health = 100, xp = 0, level = 1;

var people = [];

function preload(){
  
  font = loadFont("Assets/Font-Pixelboy.ttf");
  rightAnim = loadAnimation("Assets/Right0.png", "Assets/Right1.png");
  leftAnim = loadAnimation("Assets/Left0.png", "Assets/Left1.png");
  infAnim = loadAnimation("Assets/Infect/Inf00.png","Assets/Infect/Inf19.png");

}

function setup() {

  createCanvas(800,600);

  edges = createEdgeSprites();

  bug = createSprite(width/2, height/2);
  bug.setCollider("rectangle", 0, 5, 40, 30);
  bug.addAnimation("right", rightAnim);
  bug.addAnimation("left", leftAnim);
  bug.addAnimation("inf",infAnim);
  //bug.debug = true;

  textFont(font);
  textSize(20);

  fill("#333333");

  for(var i = 0; i < 20; i++){
    people.push(new Human());
  }

}

function draw() {

  background("#9fe6a0");
  movementCheck();
  drawSprites();

  for(var i = 0; i < people.length; i++){
    people[i].move();
    people[i].render();
  }

  text("Health: " + health, 10, 20);
  text("Parasyte Alpha 1.1.2", 10, height - 10);

}
