var database;
var gameState=0,playerCount=0;
var game,player,form;
var allPlayers;
var cars,car1,car2,car3,car4;
var track,ground,car1Img,car2Img,car3Img,car4Img;

function preload(){
    track=loadImage("images/track.jpg");
    ground=loadImage("images/ground.png");
    car1Img=loadImage("images/car1.png");
    car2Img=loadImage("images/car2.png");
    car3Img=loadImage("images/car3.png");
    car4Img=loadImage("images/car4.png");
   }


function setup(){
        createCanvas(displayWidth,displayHeight);
        database=firebase.database()

    game=new Game()
    game.getstate()
    game.start()
    
   

}

function draw(){
  if(playerCount===4){
      game.update(1)
  }
  if(gameState===1){
      clear()
      game.play()
  }

}

