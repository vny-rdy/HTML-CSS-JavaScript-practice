let button=document.getElementById("btn")
button.addEventListener("dblclick",()=>{
    // alert("clicked")
    document.querySelector(".box").innerHTML="Clicked"
})
document.addEventListener("keydown",(e)=>{
    console.log(e)
})
