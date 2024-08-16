function intro(name) {
    console.log("hi "+name ,"reddy")
    console.log("what is your full name ",name)
}
intro("vinay")
function sum(a,b,c=3){
    // console.log(a+b)
    return a+b+c
}
result = sum(1,2)
result1 = sum(1,2,1)
console.log("sum is",result)
console.log("sum is",result1)
