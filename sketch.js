var player;
var score=0;
var wormGroup;

function preload()
{
  wormImage=loadImage("images/worm.png");
  bgImage=loadImage("images/swampImg.png");
  playerImage=loadImage("images/frog.png");
}

function setup() {
createCanvas(600,600);
bg=createSprite(300,300,600,600);
bg.scale=2.5;  
bg.addImage(bgImage);


player = createSprite(40,550,30,30); 
player.scale=0.4;
player.addImage(playerImage);
wormGroup= new Group();
}

function draw() {
background("black");  
stroke("blue")
noFill();
ellipse(100,350,40,30);
player.x= mouseX;
player.y= mouseY;


generateWorms();

for(var i = 0 ; i< (wormGroup).length ;i++){
  var temp = (wormGroup).get(i) ;
  if (player.isTouching(temp)) {
    score++;
    temp.destroy();
    temp=null;
    }   
  }

  drawSprites();
  textSize(20);
  text("Worms destroyed: "+score,350,500);
  text("Worms Missed:"+(((wormGroup).length)-score),350,520);
}

function generateWorms(){
if(frameCount % 30===0){
  var worm = createSprite(100,350,40,5);
  worm.scale=random(0.1,0.3);
  worm.addImage(wormImage);
  worm.shapeColor="green";
  worm.velocityX=random(-4,4);
  worm.velocityY=random(-4,4);
  wormGroup.add(worm);
  }
}
   