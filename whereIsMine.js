
/*block id :
 coal 16
 iron 15
 gold 14
 diamond 56
 lazuli 21
 redstone 74

 block side:
 up 1
 down 0
 
 round 2 3 4 5
*/
var coalId=16;
var ironId=15;
var goldId=14;
var diamondId=56;
var lazuliId=21;
var redStoneId=74;

function useItem(x, y, z, itemid, blockid, blockSide) {
	var yy=y;
	//you must click the upside
	if (blockSide!=1) {
		return;
	}else{
		var mineId;
		while(yy>0){
		var nextBlock=getTile(x, yy, z);
		mineId=findMine(nextBlock);
		if (mineId!=0) {
			var distance=y-yy;
			clientMessage("Find:"+Item.getName(mineId, 0, false)+"  Distance:"+distance);
			break;
		  }
		  yy--;
	    }
	    if (mineId==0) {
	    	clientMessage("No mine :(");
	    }
	}
}

function findMine(blockId) {
	var mineId;
	switch(blockId){
		case coalId:
		case ironId:
		case goldId:
		case diamondId:
	        case lazuliId:
		case redStoneId:
		  mineId=blockId;
		  break;
		default:
		  mineId=0;
		  break;
		}
	return mineId;
}
