var time = 60;
var score = 0;
let num;

function increase(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getnewhit(){
    num = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = num;
}

function makebubble(){
var cluster = "";
for(var i = 1; i<=102; i++){
    var rn = Math.floor(Math.random()*10)
    cluster += `<div class="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML = cluster;
}

function timer(){
    var ip = setInterval(function(){
        if(time > 0){
            time--;
            document.querySelector("#timer").textContent = time;
        }else{
            clearInterval(ip);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000)
}

document.querySelector("#pbtm").addEventListener("click",function(detx){
    let ys = Number(detx.target.textContent);
    if (ys === num){
        increase();
        makebubble();
        getnewhit();
    }
})

makebubble();
timer();
getnewhit();
