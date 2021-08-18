class Player{
    constructor(){
    this.name=null;
    this.distance=0;
    this.index=0;
    }
    getcount(){
        var location=database.ref('playercount');
        location.on("value",function(data){
            playercount=data.val()
        })
    }
    update(){
        var playerindex="players/player"+this.index;
    database.ref(playerindex).set({
    name:this.name,
    distance:this.distance
    })
    
    }


        updatecount(pcount){
        database.ref('/').update({
        playercount:pcount
        
        
        })
        
        }

        static getpinfo(){
            var location=database.ref('players');
            location.on("value",function(data){
                allplayers=data.val()
            })  
        }





}