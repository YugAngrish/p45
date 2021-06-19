class Player{
constructor(){
this.name = null;
this.score = 0
this.index = 0

}
display(){


}
getPlayerCount(){
    var playerCountRef = database.ref("playerCount")
    playerCountRef.on("value",function(data){

      playerCount = data.val()

     })
} 
updatePlayerCount(count){
    database.ref("/").update({
 "playerCount" : count

    })
}
static getPlayerDetails(){
    var getPlayers = database.ref("players")
    getPlayers.on("value",(data)=>{

      allPlayers = data.val()

     })
    }
updatePlayerDetails(){
    var playerIndex = "players/player" + playerCount
    database.ref(playerIndex).update({
 "name" : this.name,
 "score" : this.score

    })
}



}