var bug;
var font, leftAnim, rightAnim;

var xVel = 0, yVel = 0;

var health = 100, xp = 0, level = 1;

function preload(){
  
  font = loadFont("Assets/Font-Pixelboy.ttf");
  bugAnim = loadAnimation("Assets/Right0.png", "Assets/Right1.png");

}

function setup() {

  createCanvas(800,600);

  bug = createSprite(width/2, height/2, 20, 20);
  bug.addAnimation("normal", bugAnim);
  bug.scale = 2;

  textFont(font);
  textSize(20);

  fill("#333333");

}

function draw() {

  background("#9fe6a0");

  movementCheck();
  
  drawSprites();

  text("Health: " + health, 10, 20);
  text("Exp: " + xp + " [Level " + level + "]", 10, 40);

  text("Parasyte Beta 1.0.1", 10, height - 10);

}