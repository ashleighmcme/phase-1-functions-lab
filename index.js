// Code your solution in this file!
const headquarters=42
function distanceFromHqInBlocks(blocks){
    
    if (blocks>= 42){
        console.log ((blocks)-(headquarters))
        return (blocks)-(headquarters)

    }else if (blocks<= 42){
        console.log ((headquarters)-(blocks))
        return (headquarters)-(blocks)
    }
    
    
}
distanceFromHqInBlocks(50)
distanceFromHqInBlocks (34)



//function should take distanceFromHqInBlocks and multiply by 264

function distanceFromHqInFeet(blocks){
    const distanceInBlocks=(distanceFromHqInBlocks(blocks))
    console.log ((distanceInBlocks) * 264)
    return ((distanceInBlocks) * 264)

}
distanceFromHqInFeet(43)




function distanceTravelledInFeet (start,stop){
    const inBetween = Math.abs (stop-start)
    console.log ((inBetween)*264)
    return ((inBetween)*264)
}
distanceTravelledInFeet(34,39)
distanceTravelledInFeet (34,28)

function calculatesFarePrice(start, stop) {
    const ride = distanceTravelledInFeet(start, stop);
    if (ride <= 400) {
      return 0;
    }else if (ride>= 400 && ride <= 2000) {
        return ((ride-400)*(0.02))
    }else if (ride >= 2000 && ride <=2500) {
        return 25
    }else if (ride >= 2500){
        return 'cannot travel that far'

}
}