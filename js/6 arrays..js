let arr=[1,2,3,4,5]
console.log(arr)
console.log(arr[0])
console.log(arr[4])
arr[0]=12
console.log(arr)
console.log(arr.toString())
console.log(arr.length)
console.log(arr,typeof arr)
console.log(arr.join(" and "))
arr.pop()
console.log(arr)
arr.push(100)
console.log(arr)
arr.push("vinay")
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift("reddy")
console.log(arr)
const person = {
    name:"vinay",
    age:19
}
for (let key in person){
    console.log(key+":"+person[key])
}
for(let i=0;i<10;i++){
    if(i===5){
        continue;
    }
    console.log(i)
}
let obj={
    name:"vinay",
    age:19,
    c:5
}
for(let key in obj){
    if(Object.hasOwnProperty.call(obj,key)){
        const element=obj[key];
        console.log(key,element)
    }
}
let arry=[1,2,3,4,5];
let newarr=[]
// for (let index = 0; index < arry.length; index++) {
//     const element = arry[index];
//     newarr.push(element**2)
// }
// console.log(newarr)
for(let i=0;i<arry.length;i++){
    const element=arry[i]
    // console.log(element**2)
    newarr.push(element**2)
}
console.log(newarr)