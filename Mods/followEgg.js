var time=10;
var beginTelepote=false;
var xx,yy,zz;

function useItem(x, y, z, itemId, blockId, blockSide, blockDamage) {
    // use egg,cant teleport in water or lava.
    xx=x;yy=y;zz=z;
    if(itemId==344&&blockId!=10&&blockId!=8){
        beginTelepote=true;
        clientMessage("Teleporting...");
    }
    preventDefault();
}

function teleport(x,y,z) {
    if (getTile(x, y, z)!==0
        &&getTile(x, y+1, z)===0
        &&getTile(x, y+2, z)===0) {
        //set play's head position
        setPosition(getPlayerEnt(), x, Math.floor(y+3), z);
    }else{
        clientMessage("Teleport failed");
    }
}

//delay 0.5 second
function modTick() {
    if (beginTelepote==true) {
        time--;
        count=0;
        if (time===0) {
            time=10;
            teleport(xx,yy,zz);
            beginTelepote=false;
        }
    }
}