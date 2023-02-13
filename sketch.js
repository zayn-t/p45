var Start=0, Play=1, End=2
var gameState = Start 

function preload() {
titleImg = loadImage("title1.jpg")
playButtonImg = loadImage("play.png") 
bgImg = loadImage("bg.jpg") 
gkImg = loadImage("p1.png")
playerImg = loadImage ("foot.png")
}

function setup() {
  createCanvas(800,600) 
  title = createSprite(width/2, height/2)
  title.addImage(titleImg)
  title.scale = 1.2 
  playButton = createSprite(width/2, height/2+120)
  playButton.addImage(playButtonImg)
  playButton.scale = 0.15 
  bg = createSprite(width/2, height/2) 
  bg.addImage(bgImg) 
  bg.scale=2 
  bg.visible=false
  gk=createSprite(width/2, height/2-20) 
  gk.addImage(gkImg) 
  gk.scale=0.8
  gk.visible=false 
  player=createSprite(width/2,height-40) 
  player.addImage(playerImg)
  player.scale=0.7
  player.visible=false
}

function draw() {
  background("blue")
  drawSprites()
  if (gameState == Start) {
    if (mousePressedOver(playButton)) {
      gameState = Play
    }
  } 
  if (gameState==Play) {
    title.visible = false 
    playButton.visible = false 
    bg.visible=true 
    gk.visible=true
    player.visible=true
  }
}