class Gamestate{
    constructor(){

    }

getstate(){
    var location=database.ref('gamestate');
    location.on("value",function(data){
        gamestate=data.val()
    })
}
update(state){
database.ref('/').update({
gamestate:state


})

}
startgame(){
    if (gamestate===0) {
        player=new Player();
        player.getcount();

        form=new Form();
        form.display();



    }
}

playgame(){
    form.hide();
    Player.getpinfo();
  

    for (var i in allplayers) {
        var y=200;

       text(allplayers[i].name+ ":" +allplayers[i].distance ,200,y);
       y=y+20;
    }
   if (keyDown("up")) {
      player.distance=player.distance+60;
    player.update(); 
   } 

}






}