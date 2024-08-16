let rand=Math.random()
let fi,sec,th;
if(rand<0.33){
    fi="crazy"
}
else if(rand>=0.33 && rand<0.66){
    fi="amazing"
}
else{
    fi="fire"
}
// let rand=Math.random()
if(rand<0.33){
    sec="engine"
}
else if(rand>=0.33 && rand<0.66){
    sec="foods"
}
else{
    sec="garments"
}
// let rand=Math.random()
if(rand<0.33){
    th="bros"
}
else if(rand>=0.33 && rand<0.66){
    th="limited"
}
else{
    th="hub"
}
console.log(`${fi} ${sec} ${th}`);
