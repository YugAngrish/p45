class Form{
constructor(){


}
display(){
var title =createElement("h2")
title.html("Butterfly Catching")
title.position(width/2-100,height/2-350)

var text = createInput("Name")
text.position(width/2-100,height/2-100)

var button = createButton("PLAY")
button.position(width/2-40,height/2-10)

button.mousePressed(()=>{

    text.hide()
    button.hide()

    var name = text.value()

    var greeting = createElement("h1")
    greeting.html("Hey "+name+ "  Waiting for other players to join....")
    greeting.position(width/2-300,height/2-100)

    playerCount = playerCount+1
    player.updatePlayerCount(playerCount)
    player.index = playerCount
    player.name = name
    player.updatePlayerDetails()
 
})
var reset = createButton("RESET")
reset.position(width/2-50,height/2+130)
reset.mousePressed(()=>{

updatePlayerCount(0)
updateGameState(0)
})

console.log(text)
}
hide(){
    text.hide()
    button.hide()
    greeting.hide()
    
}

}