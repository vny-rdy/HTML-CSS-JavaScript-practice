let rand=Math.random()
let a=prompt("Enter first Number")
let c=prompt("enter operation")
let b=prompt("enter 2nd num")
let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"*",
}
if(rand>0.1){
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
    // console.log(`the result is ${a} ${b} ${c}`)
}
else{
    c=obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
    // console.log(`the result is ${a} ${b} ${c}`)
}