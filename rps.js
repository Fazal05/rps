const r1=document.getElementById("rock1");
const p1=document.getElementById("pap1");
const s1=document.getElementById("sci1");
const r2=document.getElementById("rock2");
const p2=document.getElementById("pap2");
const s2=document.getElementById("sci2");
const btn=document.getElementById("btn");
const mid=document.getElementById("middle");
const next=document.getElementById("next");

let pl=0;
let sam=0;
let com=0;

r1.addEventListener("click",()=>{
    if(pl==0){
        r1.style.filter="grayscale(0%)";
        pl=1;
    }
})

p1.addEventListener("click",()=>{
    if(pl==0){
        p1.style.filter="grayscale(0%)";
        pl=2;
    }
})

s1.addEventListener("click",()=>{
    if(pl==0){
        s1.style.filter="grayscale(0%)";
        pl=3;
    }
})
// next
next.addEventListener("click",()=>{
    r1.style.filter="grayscale(100%)";
    p1.style.filter="grayscale(100%)";
    s1.style.filter="grayscale(100%)";
    r2.style.filter="grayscale(100%)";
    p2.style.filter="grayscale(100%)";
    s2.style.filter="grayscale(100%)";
    mid.innerHTML=" "; 
    pl=0;
    sam=0; 
})
// play
btn.addEventListener("click",()=>{
    com=Math.floor(Math.random()*(4-1)+1);
    // select
    if((com==1)&&(sam==0)){
        r2.style.filter="grayscale(0%)";
    sam=1;
    }
    if((com==2)&&(sam==0)){
        p2.style.filter="grayscale(0%)";
        sam=1;
    }
    if((com==3)&&(sam==0)){
        s2.style.filter="grayscale(0%)";
        sam=1;
    }
    // logic
    if((com==1)&&(pl==1)){
        mid.innerHTML="Rock-Draw Match";  
    }
    if((com==2)&&(pl==2)){
        mid.innerHTML="Paper-Draw Match";  
    }
    if((com==3)&&(pl==3)){
        mid.innerHTML="Scissor-Draw Match";  
    }
    if((com==1)&&(pl==2)){
        mid.innerHTML="Paper-Player won";  
    }
    if((com==1)&&(pl==3)){
        mid.innerHTML="Rock-Computer won";  
    }
    if((com==2)&&(pl==1)){
        mid.innerHTML="Paper-Computer won";  
    }
    if((com==2)&&(pl==3)){
        mid.innerHTML="Scissor-Player won";  
    }
    if((com==3)&&(pl==1)){
        mid.innerHTML="Rock-Player won";  
    }
    if((com==3)&&(pl==2)){
        mid.innerHTML="Scissor-Computer won";  
    }
})
