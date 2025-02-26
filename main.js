let width=document.querySelector('body').
offsetWidth;
console.log(width); 

let block=document.querySelectorAll('.block');
console.log(  block);
let o=true;
const block1=document.querySelector('#block1');
const block2=document.querySelector('#block2');
const block3=document.querySelector('#block3');
const block4=document.querySelector('#block4');
const block5=document.querySelector('#block5');
const block6=document.querySelector('#block6');
const block7=document.querySelector('#block7');
const block8=document.querySelector('#block8');
const block9=document.querySelector('#block9');
const reset=document.querySelector('#reset');
const winner=document.querySelector('#winner');
const prev=document.querySelector('#prev');
let matchover=false;
let ting=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let red=document.querySelector('.line');

let fill=['N','N','N','N','N','N','N','N','N'];
let stack=[];
let line=[];
if(width>=650){
line=[
    [0,1,2,-25,-10,0],
    [3,4,5,-25,0,0],
    [6,7,8,-25,10,0],
    [0,3,6,0,35,90],
    [1,4,7,0,25,90],
    [2,5,8,0,15,90],
    [0,4,8,-17,17.5,45],
    [2,4,6,-17,-17.5,-45],
]}
else {

    line=[
        [0,1,2,0,-46,0],
        [3,4,5,0,-25,0],
        [6,7,8,0,-6,0],
        [0,3,6,-25,19,90],
        [1,4,7,-25,-1,90],
        [2,5,8,-25,-22,90],
        [0,4,8,-17,-19,45],
        [2,4,6,17,-17.5,-45],
    ]
}
for(let i=0;i<block.length;i++){

//console.log(block[i].innerHTML);
block[i].addEventListener('click',()=>{
    if(matchover){
        alert('match is over');
        return;
    }
   
    if(fill[i]=='N'){
        if(o){
            block[i].innerHTML=`0`;
            fill[i]="0";
            
            o=false;
          
        }
        else{
            block[i].innerHTML=`X`;
            fill[i]='X';
            o=true;
          
            
        }
        stack.push(i);
      
    }
    else{
        alert('already filled');
    }
    ////chechinkg for winner
    ///row check
     line.forEach(e => {
         if(fill[e[0]]==fill[e[1]]&&fill[e[1]]==fill[e[2]]&&fill[e[0]]!='N'){
          red.style.transform=`rotate(${e[5]}deg) translate(${e[3]}vw,${e[4]}vw) `;
        if(width>=650)  red.style.width=`30vw`;
        else red.style.width=`50vw`;
            if(fill[e[0]]=='0') display('0 won');
            else display('X won');
            matchover=true;
         }
        
     })
   
    if(!matchover) ting.play();
     if(!matchover&&o) winner.innerHTML='0 turn';
        if(!matchover&&!o) winner.innerHTML='X turn';
     if(!matchover&&stack.length==9) {winner.innerHTML="Match Draw";
        matchover=true;}
})}
prev.addEventListener('click',()=>{
    if(matchover) {
        alert('match is over');
        return;}
    let temp=stack.pop();
    console.log(fill[temp]);
    if(fill[temp]=='0') o=true;
    else o=false;
    if(o) winner.innerHTML='0 turn';
    else winner.innerHTML='X turn';
       
    
    block[temp].innerHTML='';
    fill[temp]='N';
  
})
display=(string)=>{
    gameover.play();
    winner.innerHTML=string;
}
reset.addEventListener('click',end)
    
function end(){
        for(let i=0;i<block.length;i++){
            block[i].innerHTML='';
            fill[i]='N';
        }
        o=true;
        stack=[];
        winner.innerHTML='Turn for 0';
        matchover=false;
        red.style.width=`0vw`;
        
    }


