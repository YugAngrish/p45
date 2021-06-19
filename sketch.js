var database , form , player,game,allPlayers;
var gameState=0;
var playerCount=0;

function preload() {
 
 
}

function setup() {
  
  createCanvas(displayWidth,displayHeight)
  
  database = firebase.database()
 
  game = new Game()
  game.getGameState()
  game.start()
  
}

function draw() {
 background("white")
 if(playerCount===2){
  gameState = 1
  gameState.updateGameState(1)
}
 //var player2 = new Player()
 //player2.updateplayerCount(5)

  drawSprites()
}