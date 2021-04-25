class Game {
  constructor(){

  }
  getstate() {
    var gameStateRef = database.ref('gameState')
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })
  }
  update(state) {
    database.ref('/').update({
      gameState: state
    })

  }
  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value")
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getcount();

      }

      form = new Form();
      form.display();

    }
    car1=createSprite(200,200)
    car1.addImage(car1Img);
    car2=createSprite(200+175,200)
    car2.addImage(car2Img);
    car3=createSprite(200+175+175,200)
    car3.addImage(car3Img);    
    car4=createSprite(200+175+175+175,200)
    car4.addImage(car4Img);
    cars=[car1,car2,car3,car4];

  }

  play() {
    form.hide();
      textSize(30);
    text("Game Start", 120, 100);
    background(ground);
    Player.getPlayerInfo();

    if (allPlayers !== undefined) {

      image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
      var index=0;
      var x=90;
      var y=0;

      for (var p in allPlayers) {
         index=index+1;
         x=x+160
         y=displayHeight-allPlayers[p].distance;
            console.log(cars)
         cars[index-1].x=x;
         cars[index-1].y=y;
         if(index===player.index){
          // fill("red")
          cars[index-1].shapeColor="red"
          camera.position.x=displayWidth/2
          camera.position.y=cars[index-1].y
         }
     
          else{      
            fill("white")
          }
    
      

    }
  }
    if (keyIsDown(UP_ARROW) && player.index !== null) {
      player.distance += 50;
      player.update();

    }
    if(player.distance>displayHeight*5){
      gameState=2
    }
    if(gameState===2){
      game.end();
    }
    drawSprites();

  }//End Of Play() 

  end(){
    console.log("Game Ended")
  }


}