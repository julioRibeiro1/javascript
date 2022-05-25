const zerofuel = (distanceToPump, mpg, fuelLeft) =>{  //Arrow function

    if ((mpg * fuelLeft) >= distanceToPump){
        return true
    } else {
        return false
    }
} 
console.log(zerofuel(60,25,2))