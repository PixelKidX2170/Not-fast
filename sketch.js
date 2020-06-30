var ball;
var db
var pso



function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    db=firebase.database();
    var positionref= db.ref ("ball/position");
    positionref.on("value", readPosition, showError)

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writepos(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writepos(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writepos(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writepos(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPosition(data){
    pso=data.val();
    ball.x=pso.x
    ball.y=pso.y
}

function showError(){
console.log("error has happend fix it stupid")
}

function writepos (x,y){
    var writeref= db.ref ("ball/position");
writeref.set({
    x:pso.x+x,
    y:pso.y+y
})
}




