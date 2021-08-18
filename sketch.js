var database;
var gamestate=0;
var playercount=0;
var g1;
var player;
var form;
var allplayers;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
g1=new Gamestate();
g1.getstate();
g1.startgame();
  
}

function draw(){
  background("white");
    if (playercount===4) {
      g1.update(1);
    }
  if (gamestate===1) {
    g1.playgame();
  }



}

