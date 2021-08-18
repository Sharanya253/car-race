class Form{
    constructor(){
         this.input=createInput("YOUR NAME");
         this.button=createButton("GET STARTED");
         this.message=createElement('h2');
    }


display(){
var title=createElement('h2');
title.html("Car Racing Game")
title.position(250,10);


this.input.position(250,200);


this.button.position(250,300);

this.button.mousePressed(()=>{
 this.input.hide();
 this.button.hide();

 player.name=this.input.value();

 playercount=playercount+1;
player.index=playercount;
 player.update();
 player.updatecount(playercount);

 this.message.html("Welcome to the car racing game...hope u hv fun!"+player.name);
 this.message.position(250,250);
 

})




}






}
