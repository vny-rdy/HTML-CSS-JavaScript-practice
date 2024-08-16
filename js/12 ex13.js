function createCard(title,cname,views,monthsOld,duration,thumbnail){
    let viewstr
    if(views<10000){
        let viewstr = views;
    }
    else if(views>1000000){
        viewstr = views/1000000 +"m";
    }
    else{
        viewstr = views/1000 +"k";
    }
    let html=`        
    <div class="card">
    <div class="image">
        <img src="${thumbnail}" alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cname} . ${viewstr} views . ${monthsOld} months ago</p>
    </div>
</div>`
document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML + html
}
 createCard("Introduction to Backend | Sigma Web Dev video #2","codewithHarry",560000,7,"31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
 