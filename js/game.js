class Game{
    comstructor(){

    }

    getState(){
        //code to read data from database
        var gameStateRef = database.ref("gameState");
        gameStateRef.on();
    }

    updateState(state){
        //Code to write data to gameState
             
    }

    start(){
        //start state of the game
    }

}