function updatLight (current){

if (current ==='green'){
    return 'yellow'
} else if(current === 'yellow'){
    return 'red'
} else{
    return 'green'
}
}

console.log(updatLight('red'))