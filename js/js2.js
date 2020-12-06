// const canvas = document.getElementById("canvas")
// const ctx = canvas.getContext("2d")

// class Animation {
//     constructor(){
//         this.cnv = null;
//         this.ctx = null;
//         this.size = {w: 0, h: 0, cx: 0, cy: 0}
//     }
//     init() {
//         this.createCanvas();
//     }
//     createCanvas(){
//         this.cnv = document.createElement('canvas');
//         this.ctx = this.cnv.getContext('2d');
//         this.setCanvasSize();
//         document.body.appendChild(this.cnv);
//         window.addEventListener('resize', () => this.setCanvasSize());
      
//     }
//     setCanvasSize(){
//         this.size.w = this.cnv.width = window.innerWidth;
//         this.size.h = this.cnv.height = window.innerHeight;
//         this.size.cx = this.size.w / 2;
//         this.size.cy = this.size.h / 2;
//     }
// }
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
// window.addEventListener('resize', () => setCanvasSize());

let size = {w: 0, h: 0, cx: 0, cy: 0}
setCanvasSize()
function setCanvasSize() {
    size.w = canvas.width = window.innerWidth;
    size.h = canvas.height = window.innerHeight;
    size.cx = size.w / 2;
    size.cy = size.h / 2;
}
console.log(size.w)
// --- добавление img
const windows = new Image();
const bomj = new Image();
const bottonHomeImg = new Image();
const bottonPerehodImg = new Image();

// --- добавление src
windows.src = "img/korobka.jpg"
bomj.src = "img/bomj.png"


//--- добавление кнопок
const meloch = document.getElementById("meloch")
const buttonPerehod = document.getElementById('buttonP')
const buttonHome = document.getElementById('buttonH')
//--- добавление src кнопок
bottonHomeImg.src = ""
bottonPerehodImg.src = "img/buttonRef.png"
// время перехода с локации

let timeLocation = 0
// -- кнопки действие 




let money = 0

// --холод переменная 

let holod = 0

let holodMove = 0
 


meloch.addEventListener("click", function(){
    
})




buttonHome.addEventListener("click", function (){ // пойти домой через переход и выключить холод, холод остается на том уровне на котором был
    // windows.src = "img/idemkperehody.jpg"
    setTimeout(() =>{
        windows.src = "img/korobka.jpg"
        bomjRightLeft = 0
        bottonPerehodImg.src = "img/buttonRef.png"
    },3000)
        
        let sPerehoda = setInterval(()=>{
            bomjRightLeft -=5
            timeLocation -= 1
            if(timeLocation  == 0){
                clearInterval(sPerehoda)
            }
        },10)

        bottonHomeImg.src = ""
        buttonHome.style.display = "none"
        buttonPerehod.style.display = 'block'
        windows.src = "img/idemkperehody.jpg"
        holodMove = 1
    })



buttonPerehod.addEventListener("click",function () { // пойти в переход и запустить действия, в частности холод 
    windows.src = "img/idemkperehody.jpg"
        setTimeout(() =>{
            windows.src = "img/perehod.jpg"
            bomjRightLeft = 650
            holodUp()
            bottonHomeImg.src = "img/buttonRefHome.png"
            buttonHome.style.display = "block"
            holodMove = 0
        },3000)
        
    bottonPerehodImg.src = ""
    // windows.src = "img/perehod.jpg"
    bomjRightLeft = 600
    let vPerehod = setInterval(()=>{
        bomjRightLeft +=5
        timeLocation += 1
        if(timeLocation  == 300){
            clearInterval(vPerehod)
        }
    },10)
    buttonPerehod.style.display = 'none'
})


// --холод 




function holodUp() {
    console.log(holod)
        const intervalHolod = setInterval(() => {
            console.log(holod)
            holod += 1
            if(holod === 100){
                alert('БОМЖ ПОГИБ')
                clearInterval(intervalHolod)
            }if(holodMove === 1){
                clearInterval(intervalHolod)
            }
        }, 100);
   }

    


// --- добавление размеры бомжа
const bomjWidh = 600
const bomjHight = 800

// --- движение бомжа
let bomjRightLeft = 0
const bomjUpStandart = 0 //стандартная высота 
let bomjUpDown =  function(){ //высота бомжа меняется от высоты ширины экрана 
    if(size.w <= 1280){
        return -100
    }else{
        return 0
        
    }
}
let walk = 0  



const walkBomj = setInterval(() =>{
    if(walk <= 5){
        walk++
    }
    // console.log(walk)
    bomjRightLeft -= 1
    if(walk >= 5){
        for(let i = 0; i < 5; i++){
            bomjRightLeft += 1
            walk -= 1
        }
    }
    
},500)


setInterval(() =>{
    ctx.drawImage(windows, 0, 0,window.innerWidth,window.innerHeight)
    ctx.drawImage(bomj, bomjRightLeft, bomjUpDown() + 180,bomjWidh,bomjHight)
    ctx.drawImage(bottonPerehodImg,1330, 345,200,150) // верхний слой
    ctx.drawImage(bottonHomeImg,130,345,200,150)
},1)

window.onload = () => {  
    ctx.drawImage(windows, 0, 0,window.innerWidth,window.innerHeight)
    ctx.drawImage(bomj, bomjRightLeft, bomjUpDown + 60,bomjWidh,bomjHight) 
 }