



const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")


let size = {w: 0, h: 0, cx: 0, cy: 0}
setCanvasSize()
function setCanvasSize() {
    size.w = canvas.width = window.innerWidth;
    size.h = canvas.height = window.innerHeight;
    size.cx = size.w / 2;
    size.cy = size.h / 2;
}
console.log(size.w)





const windows = new Image();
const bomj = new Image();
const bottonHomeImg = new Image();
const bottonPerehodImg = new Image();
const magazin = new Image();
const kopeyka = new Image();
const blue = new Image();
const drova = new Image()
const fire = new Image()
const vodkaSrc = new Image()
const spichkiSrc = new Image()
const spichkiNumber = new Image()
const vodkaNumber = new Image()
 
spichkiNumber.src = ""
vodkaNumber.src = ""
let vodkaImage = true
let spichkiImage = true
vodkaSrc.src = "img/vodka.png"
spichkiSrc.src ="img/spichki.png"

const one = "img/1.png"
const two = "img/2.png"
const three = "img/3.png"
const four = "img/4.png"
const five = "img/5.png"


const numbers = [one,two,three,four,five]



let bomjSkelet = {
    spichki:2,
    vodka: 0,
    money: 0,
    width :400,
    height :650,
    x : 500,
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

function numberItem(symbol){

    if(symbol === 0){
        spichkiNumber.src = ""
    }

    if(symbol === 1){
        spichkiNumber.src = numbers[0]
    }
    if(symbol === 2){
        spichkiNumber.src = numbers[1]
    }
    if(symbol === 3){
        spichkiNumber.src = numbers[2]
    }
    if(symbol === 4){
        spichkiNumber.src = numbers[3]
    }
    if(symbol === 5){
        spichkiNumber.src = numbers[4]
    }
}



drova.src = "img/drova.png"

const fire1 = "img/ogon1.png"

const fire2 = "img/ogon2.png"

const fire3 = "img/ogon3.png"

const fireAnimation = [fire1,fire2,fire3]


let fireParams = 0

fire.src = fireAnimation[fireParams]

let fireFucktor = false

let spichki = false  // если true есть спичьки




let fireHpfuctor = 100
function fireHp(){
  



    const minusFireHp = setInterval(() => {
        if(fireFucktor === false){
            clearInterval(minusFireHp)
            fireHpfuctor = 100
        }
        fireHpfuctor -= 1
        console.log(fireHpfuctor)
        if(fireHpfuctor === 0){
            clearInterval(minusFireHp)
            fireHpfuctor = 100
            fireFucktor = false
            bomjSkelet.spichki -= 1
        }
    },100)
    // if(fireFucktor === true){
    //     fireHp()
    // }
}




    document.addEventListener('keydown', function(event) {
        if (event.code == 'KeyE') {
            bomjSkelet.spichki > 0  ? spichki = true : spichki = false
            if(spichki === true && childParams === 2){ 
               
                if(fireFucktor === true){
                    
                    fireFucktor = false
                   
                    console.log(bomjSkelet.spichki,spichki)
                }
                else{
                    fireFucktor =  true 
                    bomjSkelet.spichki -= 1 
                }
                   
                        
            }
            if(spichki === false && childParams === 2){
                fireFucktor =  false  
            }
            fireHp()
            }

            
      });       
            
    function fireStart(){
        let p = setInterval(()=>{
            fire.src = fireAnimation[fireParams]
            
            fireParams += 1
            
            if(fireParams === 3){
                clearInterval(p)
                fireParams = 0
                fireStart()
                
            }
        },150)
    } 
    fireStart()


blue.src = "img/blue.jpg"
bomj.src = "img/bomj.png"
kopeyka.src ="img/uan.png"

console.log(innerWidth + 'ширина')
const maxWight = window.innerWidth

let blueWidth = 200

let timeLocation = 0

 


let childParams = 2 //локации 


// --холод переменная 

let holod = 0

let holodMove = 0

let walk = 0  


let randomSpawnMonetka = 0


function leftSpawn(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    randomSpawnMonetka = Math.floor(Math.random() * (max - min + 1)) + min 

  
  }

  function rigthSpawn(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomSpawnMonetka =  Math.floor(Math.random() * (max - min + 1)) + min 

  }


const proverka = 50 

if (bomjSkelet.x === proverka ){
    alert('hui')
}


function randomSpawn(){ // рандомно выдает число слева от бомжа
        let random = Math.floor(Math.random() * 100)
        
        if(random < 50 ){
            leftSpawn(1,bomjSkelet.x / 50) 
            randomSpawnMonetka = randomSpawnMonetka * 50
            
            if(randomSpawnMonetka <= 0){
                rigthSpawn((bomjSkelet.x + bomjSkelet.width) / 50, 33)
                randomSpawnMonetka = randomSpawnMonetka * 50

            }
            
        }if(random > 50){
            rigthSpawn((bomjSkelet.x + bomjSkelet.width) / 50, 33) 
            randomSpawnMonetka = randomSpawnMonetka * 50
            if(randomSpawnMonetka >= window.innerWidth ){
                leftSpawn(1,bomjSkelet.x / 50) 
                randomSpawnMonetka = randomSpawnMonetka * 50
                
            }
            
}
}



let xx = undefined
let yy = undefined
setInterval(() => {
    xx = bomjSkelet.x // / 50
    yy = bomjSkelet.x + bomjSkelet.width
   


}, 1);


let spawnFucktor = false

let monetka = false
 




    randomSpawn()
    setInterval(()=>{
        if(randomSpawnMonetka > xx && randomSpawnMonetka < yy){
            if(childParams === 4){
                bomjSkelet.money += 1
                randomSpawn()
                console.log(bomjSkelet.money)
            }
        
            
        }
    },1)





document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyA') {

          bomjSkelet.x -= 50
          
    }
  });

  
document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyD') {
 
        bomjSkelet.x += 50
    }
  });

let locationWalk = "img/korobka.jpg"

 
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



const idemKmagaziny = "img/idemkmagaziny.jpg"
const magazinSrc = "img/magazin.jpg"
const perehodSrc = "img/perehod.jpg"
const korobkaSrc = "img/korobka.jpg"
const idemkPerehodySrc = "img/idemkperehody.jpg"
const arrWindow = [magazinSrc,idemKmagaziny,korobkaSrc,idemkPerehodySrc,perehodSrc] // локации


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

let delayHolod = 600;
let setTimeHolod = setTimeout(function request() {
    if(fireFucktor === true && childParams === 2){
        delayHolod = 500
        holod -= 2
        blueWidth += 4
        if(holod < 0 || blueWidth > 200 ){
            holod = 0
            blueWidth = 200 
        }
    }else{
        holod += 1
        blueWidth -= 2  
    }
  
    
    if(holod === 100){
        alert('bomj pogip')
        setTimeHolod = NAN
    }
    if (childParams === 1,2,3) {
      // увеличить интервал для следующего запроса
      delayHolod = 600
      
      
      
    }
    if (childParams === 4) {
        // увеличить интервал для следующего запроса
        delayHolod = 100
        
        
      }

      if (childParams === 0) {
        delayHolod = 5000
        
        console.log(holod)
    }

    
    timerId = setTimeout(request, delayHolod);
  
  }, delayHolod);
  







        

setInterval(() =>{
    ctx.drawImage(windows, 0, 0,window.innerWidth,window.innerHeight)
    
    if(childParams === 2){
        ctx.drawImage(drova, 0, 580,400,400)
        if(fireFucktor === true){
            ctx.drawImage(fire, 0, 580,400,400)
        }
    }
    
    ctx.drawImage(bomj, bomjSkelet.x, bomjSkelet.y,bomjSkelet.width,bomjSkelet.height)
    


    if (spawnFucktor === true){
        ctx.drawImage(kopeyka,randomSpawnMonetka,900,100,80) 
        

    }
    ctx.drawImage(blue, bomjSkelet.x + 50, 300, blueWidth, 10)
    walkLokationSrc(arrWindow)
    if(childParams === 4){
        spawnFucktor = true
    }else{
        spawnFucktor = false
    }
    
    if(vodkaImage === true){
        ctx.drawImage(vodkaSrc,bomjSkelet.x +100,200,50,80)
    }
  
    if(spichkiImage === true){
        ctx.drawImage(spichkiSrc,bomjSkelet.x +50,200,50,80)
    }

    if(bomjSkelet.spichki <= 0){
        spichkiImage = false
    }else{
        spichkiImage = true
    }
    numberItem(bomjSkelet.spichki)
    ctx.drawImage(spichkiNumber,bomjSkelet.x,200,50,80,)
    
},1)





window.onload = () => {  
    ctx.drawImage(windows, 0, 0,window.innerWidth,window.innerHeight)
    ctx.drawImage(bomj, bomjSkelet.x, bomjSkelet.y,bomjSkelet.width,bomjSkelet.height)
     
 }


