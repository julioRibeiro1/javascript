let cores = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

function colour(){
    if(cores.length !== 7){
        return false
    } else if(cores[0]==='red'){
        if(cores[1]==='orange'){
            if(cores[2]==='yellow'){
                if(cores[3]==='green'){
                    if(cores[4]==='blue'){
                        if(cores[5]==='indigo'){
                            if(cores[6]==='violet'){
                                return true
                            }else{
                                return false
                            }
                        }else{
                            return false
                        }
                    }else{
                        return false
                    }
                }else{
                    return false
                }
            }else{
                return false
            }
        }else{
            return false
        }
    } else{
        return false
    }
}
console.log(colour())