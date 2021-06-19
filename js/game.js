class Game{
    constructor(){


    }
    display(){


    }
      getGameState(){
          var gameStateRef = database.ref("gameState")
           gameStateRef.on("value",function(data){

            gameState = data.val()

           })
      } 
      updateGameState(state){
          database.ref("/").update({
       "gameState" : state

          })
      } 
      start(){
     if(gameState===0){
      
        form = new Form()
        form.display()
       
        player = new Player()
        player.getPlayerCount()
     }
    }
     play(){
         form.hide()
         Player.getPlayerDetails()
         if(allPlayer!==undefined){
             var index = 0
             var y = 200

             for(var i in allPlayers){
                 console.log(i)
                 y = y+30
                 index = index+1
                 if(index ===player.index){
                     fill("red")
                 }
                 else{
                    fill("white")
                 }
                 Text(allPlayers[i].name,200,y) //+ ":" + allPlayers[i].)
             }
         }
     }
      
    
}