let demo = document.querySelector('.demo');
let demo2 = document.querySelector(".demo2");
let n = 0;
let string = `
.skin *{margin: 0; padding: 0; box-sizing: border-box;}
.skin *::after{
  box-sizing: border-box;
}
.skin *::before{
  box-sizing: border-box;
}
body{
    background-color: #ffe600;
    min-height: 100vh;
    
}
.skin{
    position: relative;
   
}

.nose{
    border:10px solid;
    border-color: rgb(0, 0, 0) transparent transparent;
    width:0px;
    height:0px;
    position: relative;
    left:50%;
    top: 145px;
    margin-left: -10px;
}
@keyframes wave{
    0%{
        transform:rotate(0deg)
    }
    33%{
        transform:rotate(8deg)
    }
    66%{
        transform:rotate(-8deg)
    }
    100%{
        transform:rotate(0deg)
    }
}
.nose:hover{
    transform-origin:50% 100% ;
    animation: wave 400ms infinite linear;
}
.yuan{
    position:absolute;
    height:6px;
    width: 20px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background-color: black;
}
.eye{
    border: 2px #000 solid;
    width:64px;
    height: 64px;
    position:absolute;
    left:50%;
    top:100px;
    margin-left: -32px;
    background:#2e2e2e;
    border-radius:50%

}
.eye.left{
    transform:translateX(-100px);
}
.eye.right{
    transform:translateX(100px);
}
.zuo{
   
    height: 30px;
    width: 30px;
    border-radius:50%;
    margin-left: 7px;
    background:white;

}
.you{
   
    height: 30px;
    width: 30px;
    border-radius:50%;
    margin-left: 7px;
    background:white;

}

.mouth{
    height:200px;
    width: 200px;
    position:absolute;
    left:50%;
    top:170px;
    margin-left: -100px;
   
}
.mouth.up{
    position: relative;
    top: -20px;
}


#lip1{
    border:3px solid black;
    height:30px;
    width: 100px;
    border-radius: 0 0 0 50px;
    border-top-color:transparent;
    border-right-color:transparent ;
    position: relative;
    transform:rotate(-15deg) translateX(-53px);
    position: absolute;
    left:50%;
    margin-left: -50px;
    z-index:1;
    background:#ffe600;

}#lip1::before{
    content:"";
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    right: -6px;
    bottom: 0;
    background:#ffe600;
    
}

#lip2{
    border:3px solid black;
    height:30px;
    width: 100px;
    border-radius: 0 0 50px 0;
    border-top-color:transparent ;
    border-right-color:transparent ;
    position: relative;
    transform:rotate(15deg) translateX(53px);
    position: absolute;
    left:50%;
    margin-left: -50px;
    z-index:1;
    background:#ffe600;

}#lip2::before{
    content:"";
    display: block;
    width: 7px;
    height: 33px;
    position: absolute;
    left: -6px;
    bottom: 0;
    background:#ffe600;
    
}
#down{
    
    height: 130px;
    position: absolute;
    width: 100%;
    overflow: hidden;
    top:30px
}

#bigyuan{
    
    width: 150px;
    height:1000px;
    position: absolute;
    bottom:0;
    left:50%;
    margin-left:-75px;
    border-radius:75px/300px;
    background:#9b000a;
    overflow: hidden;
}
#small{
    width: 145px;
    height: 112px;
    position: absolute;
    bottom:0;
    left:98px;
    margin-left: -95px;
    background-color: #ff485f;
    border-radius: 100px;
}
.face.left{
    position: absolute;
    left:50%;
    height:90px;
    width: 90px;
    transform:translate(130px,210px);
    border-radius:50%;
    background:red
}
.face.right{
    position: absolute;
    left:50%;
    height:90px;
    width: 90px;
    transform:translate(-219px,210px);
    border-radius:50%;
    background:red
}
`;
let time = 10;
demo.innerText = string.substring(0, n);
demo2.innerHTML = string.substring(0, n);
const run = ()=>{
    n = n + 1;
    if (n === string.length) {
        window.clearInterval(id);
        return;
    }
    demo.innerText = string.substring(0, n);
    demo2.innerHTML = string.substring(0, n);
    demo.scrollTop = demo.scrollHeight;
};
const play = ()=>{
    return setInterval(run, time);
};
let id = play();
const pause = ()=>{
    window.clearInterval(id);
};
btnPause.onclick = ()=>{
    pause();
};
btnPlay.onclick = ()=>{
    id = play();
};
btnSlow.onclick = ()=>{
    pause();
    time = 100;
    id = play();
};
btnNormal.onclick = ()=>{
    pause();
    time = 10;
    id = play();
};
btnFast.onclick = ()=>{
    pause();
    time = 0;
    id = play();
};

//# sourceMappingURL=text.c860f2e8.js.map
