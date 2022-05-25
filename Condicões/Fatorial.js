function checkForfactor(base,factor){
    if((base % factor) === 0 ){
        return true
    } else{
        return false
    }
}
console.log (checkForfactor(15,4))