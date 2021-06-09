var bug;
var font, leftAnim, rightAnim;

var mobCheck = [];

var xVel = 0, yVel = 0;

var health = 100, xp = 0, level = 1;

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
  bug.scale = 2;
  //bug.debug = true;

  textFont(font);
  textSize(20);

  fill("#333333");

  test01 = new Animal(4,100,100);

}

function draw() {

  background("#9fe6a0");

  movementCheck();
  test01.movement();

  drawSprites();

  text("Health: " + health, 10, 20);
  text("Exp: " + xp + " [Level " + level + "]", 10, 40);

  text("Parasyte Alpha 1.1.2", 10, height - 10);

}