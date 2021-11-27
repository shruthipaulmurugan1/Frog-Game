var frog
var score = 0
var wormGroup

function preload()
{
  frogImage = loadImage("images/frog.png");
  swampImg = loadImage("images/swampImg.png");
  wormImg = loadImage("images/worm.png");
}

function setup() {
  createCanvas(600,600);
  swamp = createSprite(300, 300);
  swamp.addImage(swampImg);
  swamp.scale = 2.5;
  frog = createSprite(100,300,30,30);
  frog.addImage(frogImage);
  frog.scale = 0.5;
  wormGroup = new Group();

}

function draw() {
  background("black");  
  stroke("red");
  noFill();
  frog.x = mouseX;
  frog.y = mouseY;
  
  generateWorms();
  for(var i = 0; i < (wormGroup).length; i++)
  {
    var temp = (wormGroup).get(i);
    if(frog.isTouching(temp))
    {
      score++
      temp.destroy()
      temp = null
    }
  }
 drawSprites();
 textSize(20);
 text("Worms destroyed: "+score, 350, 50) 
}

function generateWorms()
{
  if (frameCount % 30 === 0)
  {
    var worm = createSprite(random(40, 380), random(300, 380), 40, 5);
    worm.addImage(wormImg);
    worm.scale = random(0.1, 0.3);
    worm.velocityX = random(-6,6);
    worm.velocityY = random(-6,6);
    wormGroup.add(worm);
  }
}