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
const magazin = new Image();
const kopeyka = new Image();

// --- добавление src
// windows.src = "img/korobka.jpg"
bomj.src = "img/bomj.png"
kopeyka.src ="img/uan.png"


const maxWight = window.innerWidth



//--- добавление кнопок
// const meloch = document.getElementById("meloch")
const buttonPerehod = document.getElementById('buttonP')
const buttonHome = document.getElementById('buttonH')
const buttonMagazin = document.getElementById('magazin')  
//--- добавление src кнопок
bottonHomeImg.src = ""
bottonPerehodImg.src = "img/buttonRef.png"
// время перехода с локации

let timeLocation = 0
// -- кнопки действие 
 
let bomjSkelet = {
    money: 0,
    width :400,
    height :650,
    x : 552,
    y : 350,
    rightBomj: function (){
        let sum = this.x + this.width
        return sum //.toString() + "px"
    },
    leftBomj: function(){
        let sum = this.x 
        return sum //.toString() + "px" // лево 
    }
    
}


let money = 0

// --холод переменная 

let holod = 0

let holodMove = 0
 


// meloch.addEventListener("click", function(){
//     let melochRandom = (Math.random() * 100)
//     if(melochRandom <= 20){
//         money += 10
//         console.log(money)
//     } if(melochRandom <= 10){
//         money += 25
//         console.log(money)
//     }if(melochRandom <= 1){
//         money += 50
//         console.log(money)
//     }
        
    
// })


// getRandomWidthWindow

buttonHome.addEventListener("click", function (){ // пойти домой через переход и выключить холод, холод остается на том уровне на котором был
    // windows.src = "img/idemkperehody.jpg"
    setTimeout(() =>{
        windows.src = "img/korobka.jpg"
        bomjSkelet.x = 0
        bottonPerehodImg.src = "img/buttonRef.png"
    },3000)
        
        let sPerehoda = setInterval(()=>{
            bomjSkelet.x -=5
            timeLocation -= 1
            if(timeLocation  == 0){
                clearInterval(sPerehoda)
            }
        },10)

        bottonHomeImg.src = ""
        buttonHome.style.display = "none"
        buttonPerehod.style.display = 'block'
        windows.src = "img/idemkperehody.jpg"
        holodMove = 1 // выключатель холода
    })



buttonPerehod.addEventListener("click",function () { // пойти в переход и запустить действия, в частности холод 
    windows.src = "img/idemkperehody.jpg"
        setTimeout(() =>{
            windows.src = "img/perehod.jpg"
            bomjSkelet.x = 650
            holodUp()
            bottonHomeImg.src = "img/buttonRefHome.png"
            buttonHome.style.display = "block"
            holodMove = 0
        },3000)
        
    bottonPerehodImg.src = ""
    // windows.src = "img/perehod.jpg"
    bomjSkelet.x = 600
    let vPerehod = setInterval(()=>{
        bomjSkelet.x +=5
        timeLocation += 1
        if(timeLocation  == 300){
            clearInterval(vPerehod)
        }
    },10)
    buttonPerehod.style.display = 'none'
})


// --холод 




    


// --- добавление размеры бомжа
// const bomjWidh = 600
// const bomjHight = 800

// --- движение бомжа
// let bomjRightLeft = 0
// const bomjUpStandart = 0 //стандартная высота 
// let bomjUpDown =  functioxn(){ //высота бомжа меняется от высоты ширины экрана 
//     if(size.w <= 1280){
//         return -100
//     }else{
//         return 0
        
//     }
// }
let walk = 0  

// левая граница x центр который не досегаем это от x 552 до x + width 952 , 952 это правая сторона
// создает элемент на рандомной длине width 
// 
let randomSpawnMonetka = 0
function leftSpawn(min, max) { // рандомно выдает число слева от бомжа 
    min = Math.ceil(min);
    max = Math.floor(max);
    randomSpawnMonetka = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

  function rigthSpawn(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomSpawnMonetka =  Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

// randomSpawn()
// leftSpawn(0,bomjSkelet.x)
// console.log(randomSpawnMonetka)
// rigthSpawn(bomjn(0,bomjSkelet.x))
// console.log(rigthSpawn(bomjSkelet.x + bomjSkelet.width,window.innerWidth))
 function monetkaImage(){
    ctx.drawImage(kopeyka,randomSpawnMonetka,300,100,80)
 }
//  let lef = bomjSkelet.x
// let right = bomjSkelet.x + bomjSkelet.width


let monetaMoney = randomSpawnMonetka



// randomSpawn()

// leftSpawn(0,bomjSkelet.x)
// rigthSpawn(bomjSkelet.x + bomjSkelet.width,window.innerWidth)

// выпадает по всей длине а если монетка > bomjSkelet.x || < bomjSkelet.x + bomjSkelet.wight 
function randomSpawn(){ // рандомно выдает число слева от бомжа
        let random = Math.floor(Math.random() * 100)
        if(random < 50){
            leftSpawn(0,bomjSkelet.leftBomj())
            if(randomSpawnMonetka < 0){
                rigthSpawn(bomjSkelet.rightBomj(),window.innerWidth)
            console.log('ПРАВАЯ МОНЕТКА')
            }
            console.log('ЛЕВАЯ МОНЕТКА')
        }if(random > 50){
            rigthSpawn(bomjSkelet.rightBomj(),window.innerWidth)
            if(randomSpawnMonetka >= window.innerWidth ){
                leftSpawn(0,bomjSkelet.leftBomj())
                console.log('ЛЕВАЯ МОНЕТКА')
            }
            console.log('ПРАВАЯ МОНЕТКА')
}
}


setInterval(() => {
    randomSpawn()
    console.log(randomSpawnMonetka)
    console.log(`${bomjSkelet.money} у вас денег`)
    if (randomSpawnMonetka >= bomjSkelet.leftBomj() ?? randomSpawnMonetka <= bomjSkelet.rightBomj()){
        bomjSkelet.money += 1

        alert('hui sosi')
    }
    console.log(`${bomjSkelet.x} левая граница + ${bomjSkelet.x + bomjSkelet.width} правая граница  + выпало ${randomSpawnMonetka}`)
}, 2000);

setInterval(() => {
    console.log(`${randomSpawnMonetka} --------------`)
}, 500);
// console.log(`${bomjSkelet.x} левая граница + ${bomjSkelet.x + bomjSkelet.width} правая граница `)
// если число бомжа справа или слева совпадает с числом денег то money +1 
// деньги не могут выпасть на месте где стоит бомж
// ctx.drawImage(money, randomSpawn(), 0,window.innerWidth,window.innerHeight)

// function spawnMoney(){
    
// }


// let money = function(){


// }



console.log(bomjSkelet.rightBomj() + ' лево')
console.log(bomjSkelet.leftBomj()  + ' право')

let blockRight = document.getElementById('block')
let blockLeft = document.getElementById('block2')

// let hui = bomjSkelet.leftBomj()

blockRight.style.left = bomjSkelet.rightBomj()
blockLeft.style.left = bomjSkelet.leftBomj()// hui.toString() + "px"
blockRight.style.backgroundColor = 'green'
blockLeft.style.backgroundColor = 'red'



// function getRandomWidthWindow(min, max) { // пример
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
//   }



function leftSpawn(min, max) { // рандомно выдает число справа от бомжа 
    min = Math.ceil(min);
    max = Math.floor(max);
    randomSpawnMonetka = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function rigthSpawn(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomSpawnMonetka =  Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
// delayHolod

// console.log(getRandomWidthWindow(0,window.innerWidth))
console.log(bomjSkelet.leftBomj())
console.log(bomjSkelet.rightBomj())




// let randomWidth = 
 
// function spawn(){
//     for(i = 0)
// }

// границы бомжа
 




const walkBomj = setInterval(() =>{
    if(walk <= 5){
        walk++
    }
    // console.log(walk)
    bomjSkelet.x -= 1
    if(walk >= 5){
        for(let i = 0; i < 5; i++){
            bomjSkelet.x += 1
            walk -= 1
        }
    }
    
},500)

// function b(){
//     g = Math.floor(Math.random() * 100)
//     if(g === 1){
//         ctx.drawImage(kopeyka,randomSpawn(),0)
//         console.log(g)
//     }
// }

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyA') {
      bomjSkelet.x  -= 50
    }
  });

  
document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyD') {
      bomjSkelet.x += 50
    }
  });

let locationWalk = "img/korobka.jpg"
// windows.src = locationWalk  
// function walkLokation(){
//     if(bomjSkelet.x < -400 ){
//         bomjSkelet.x = window.innerWidth
//     }if(bomjSkelet.x > window.innerWidth){
//         bomjSkelet.x = -400

//     }
// }
 
function walkLokationRight(){
    if(bomjSkelet.x < -400 ){
        bomjSkelet.x = window.innerWidth
    }
}

function walkLokationLeft(){
    if(bomjSkelet.x > window.innerWidth){
    bomjSkelet.x = -400
    }
    
}

let monetkaSetSpawn = null;
let monetkaSpawnTime = setTimeout(function request() {

    if(childParams === 2){// moneaz
        delayHolod = 400
        
    }

    timerId = setTimeout(request, monetkaSetSpawn);
  
  }, monetkaSetSpawn);




const perehodSrc = "img/perehod.jpg"
const korobkaSrc = "img/korobka.jpg"
const idemkPerehodySrc = "img/idemkperehody.jpg"
const arrWindow = [korobkaSrc,idemkPerehodySrc,perehodSrc]

let childParams = 0
let childLenght = arrWindow.length
console.log(childLenght)
function walkLokationSrc(params) {
    
    let locationSrc = params[0 + childParams]
    windows.src = locationSrc
    if(bomjSkelet.x > window.innerWidth){
        childParams += 1
        bomjSkelet.x = -400
        console.log(locationSrc)
        console.log(childParams)
       
        console.log(windows.src)
        
        }
        if(bomjSkelet.x < -400 ){
            bomjSkelet.x = window.innerWidth
            childParams -= 1
        }if(childParams < 0){
            childParams = 0
        }if(childParams === childLenght){
            childParams = childLenght - 1
        }
    }
 
// добавить интервал холода если это дом то меньше елси переход и так далее




let randomXmonetka = 0



// lokationHolod(arrWindow)






// monetkaRandom()
let delayHolod = 100;
let setTimeHolod = setTimeout(function request() {
    holod += 1
    console.log(delayHolod)
    if(holod === 100){
        alert('bomj pogip')
        setTimeHolod = NAN
    }
    if (childParams === 0) {
      // увеличить интервал для следующего запроса
      delayHolod = 600
      
      console.log(holod)
      
    }
    if (childParams === 1) {
        // увеличить интервал для следующего запроса
        delayHolod = 200
        
        console.log(holod)
      }
    if (childParams === 2) {
        // увеличить интервал для следующего запроса
        delayHolod = 100
        
        console.log(holod)
    }

    
    timerId = setTimeout(request, delayHolod);
  
  }, delayHolod);
  

// let intervalHolod = setInterval(() => {
//     console.log(holod)
//     holod += 1
//     if(holod === 100){
//         alert('БОМЖ ПОГИБ')
//         clearInterval(intervalHolod)
//     }if(holodMove === 1){ // holodMove включить / выключить отнимание жизней 
//         clearInterval(intervalHolod)
//     }
// },lokationHolod())






        

setInterval(() =>{
    ctx.drawImage(windows, 0, 0,window.innerWidth,window.innerHeight)
    ctx.drawImage(bomj, bomjSkelet.x, bomjSkelet.y,bomjSkelet.width,bomjSkelet.height)
    ctx.drawImage(bottonPerehodImg,1550, 345,200,150) // верхний слой
    ctx.drawImage(bottonHomeImg,130,345,200,150)
    blockLeft.style.left = bomjSkelet.leftBomj()
    blockRight.style.left = bomjSkelet.rightBomj()
    monetkaImage()
   

    // walkLokationSrc()
    // walkLokationRight()
    // walkLokationLeft()
    walkLokationSrc(arrWindow)
    // walkLokation()
    // if(windows.src = "img/korobka.jpg"){
    //     ctx.drawImage(kopeyka,randomSpawnMonetka,880,180,100)
    // }
    // if(bomjSkelet.x < -400 ){
    //     bomjSkelet.x = window.innerWidth
    //     windows.src =  "img/korobka.jpg"
    // }
    // if(bomjSkelet.x > window.innerWidth){
    //     windows.src = "img/idemkperehody.jpg"
    //     bomjSkelet.x = -400
    // }
    // if()

    // b()
    
    
    
},1)


window.onload = () => {  
    ctx.drawImage(windows, 0, 0,window.innerWidth,window.innerHeight)
    ctx.drawImage(bomj, bomjSkelet.x, bomjSkelet.y,bomjSkelet.width,bomjSkelet.height) 
 }