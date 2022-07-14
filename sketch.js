

var snowman,snowmandra,bg,snow5,snow6

function preload() {

  bg = loadImage("snow3.jpg");
  snowman = loadImage("friends.gif");
  snowmandra = createImg("friends.gif");
  snow5 = loadImage("snow4.webp");
  snow6 = loadImage("snow6.webp");
}


function setup() {
  createCanvas(1600,800);

}


function draw() {

  background(bg);

  snowmandra.position(1093,520)

   spawnsnowball();
   spawnsnowcrystal(); 
   drawSprites();

}

function spawnsnowball() {
  
if (frameCount % 3 === 0) {
    snowBall = createSprite(100,10,100,100);
    snowBall.x = Math.round(random(1,1600));
    snowBall.addImage(snow5);
    snowBall.scale = 0.03
    snowBall.velocityY = 6

  }

}


function spawnsnowcrystal() {
  if (frameCount % 17  === 0) {
    snowcrystal = createSprite(100,10,100,100);
    snowcrystal.x = Math.round(random(1,1600));
    snowcrystal.addImage(snow6);
    snowcrystal.scale = 0.07
    snowcrystal.velocityY = 5 
    
  }

}



