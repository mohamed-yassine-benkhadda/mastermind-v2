'use strict';

function settings(){
    let l=number(input("the code contains : "));
    let m=number(input("max attempts : "));
    return l,m;
}

function code(l){
    let x=String(Math.trunc((Math.random() * 8999)+1000));
    if (x.length!==l){
        return code(l);
    } 
    for (let i=0; i<l;i++) {
        for (let j=0; j<l;j++) {
            if (x[i]===x[j] && i!==j) {
                return code(l);
            }
        }
    }
    return x;
}

function exact_place(a,c,l){
    let q=0;
    for (let i = 0; i<l;i++){
        if (a[i]===c[i]){
            q++;
        }
    }       
    return q;
}
  
function change_place(a,c,l){
    let q=0;
    for (let i = 0; i<l;i++){
        for (let j = 0; j<l;j++){
            if (a[i]===c[j] && i!==j){
                q++;
            }
        }
    }
    return q;
}
    
function game(){
    let l = 4;
    let m = 10;
    let c = code(l);
    let i=1;
    document.querySelector('.btn-player2').addEventListener('click',function(){
        let x= document.querySelector('.answer').value;
        document.querySelector(`.code-item${i+1}`).textContent = x;
        let ex=exact_place(x,c,l);
        let ch=change_place(x,c,l);
        document.querySelector(`.result-item${i+1}`).textContent = "🔴 "+ex+"    ⚪ "+ch;
        document.querySelector('.life').textContent = m-i;
        console.log("correct: ",ex);
        console.log("change: ",ch);
        i++;
        if(i<m && ex===l){
            document.querySelector('body').style.background = '#2a9d8f';
            document.querySelector('.main-text').textContent = "🔓 You win";
            document.querySelector('.code-fin').textContent = "🔑 code :"+c;
        }
        else if(i===m && ex!==l){
            document.querySelector('body').style.background = '#e63946';
            document.querySelector('.main-text').textContent = "🔒 You lose";
            document.querySelector('.code-fin').textContent = `🔑 code : ${c}`;
            document.querySelector('.try').style.opacity ="0";
        }
    });
}

game();