



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



// if(h > 300 && h < 400) {
//     alert(h)
// }

const windows = new Image();
const bomj = new Image();
const bottonHomeImg = new Image();
const bottonPerehodImg = new Image();
const magazin = new Image();
const kopeyka = new Image();
const blue = new Image();
const drova = new Image()
const fire = new Image()


let bomjSkelet = {
    spichki:1,
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


drova.src = "img/drova.png"

const fire1 = "img/ogon1.png"

const fire2 = "img/ogon2.png"

const fire3 = "img/ogon3.png"

const fireAnimation = [fire1,fire2,fire3]


let fireParams = 0

fire.src = fireAnimation[fireParams]

let fireFucktor = false

let spichki = false  // если true есть спичьки

// document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyF') {
//         if(pizda === true){
//             pizda = false

//         }else{
//             pizda = true
//         }
            

      
//     }
//   });

 // если true есть спичьки

bomjSkelet.spichki > 0 ? spichki = true : spichki = false


if(spichki === true){
    document.addEventListener('keydown', function(event) {
        if (event.code == 'KeyE') {
            if(fireFucktor === true){
                fireFucktor = false

                bomjSkelet.spichki - 1
            }
            else
                fireFucktor =  true              
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
}

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
// setInterval(() =>{
//     randomSpawnMonetka = 0
// },500)
function leftSpawn(min, max) { // рандомно выдает число слева от бомжа 
    min = Math.ceil(min);
    max = Math.floor(max);
    randomSpawnMonetka = Math.floor(Math.random() * (max - min + 1)) + min 
    //Максимум и минимум включаются
  
  }

  function rigthSpawn(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomSpawnMonetka =  Math.floor(Math.random() * (max - min + 1)) + min 

     //Максимум и минимум включаются
  }

// if(randomSpawnMonetka === bomjSkelet.x + 50 || bomjSkelet.x + 50 * 2 || bomjSkelet.x + 50 * 3 || bomjSkelet.x + 50 * 4 || 
//     bomjSkelet.x + 50 * 5 || bomjSkelet.x + 50 * 6 || bomjSkelet.x + 50 * 7 || bomjSkelet.x + 50 * 8)  

const proverka = 50 

if (bomjSkelet.x === proverka ){
    alert('hui')
}


// выпадает по всей длине а если монетка > bomjSkelet.x || < bomjSkelet.x + bomjSkelet.wight 
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
    // if(randomSpawnMonetka === xx || yy){
    //     bomjSkelet.money += 1
    //     MonetkaStart = 0
    //     alert('сработало')
    // } // / 50
}, 1);
// let o = 0
// считает то место где он был 
// 

// let monetkaDel = MonetkaStart / 50

// if(randomSpawnMonetka === bomjSkelet.x + 50 || bomjSkelet.x + 50 * 2 || bomjSkelet.x + 50 * 3 || bomjSkelet.x + 50 * 4 || 
//     bomjSkelet.x + 50 * 5 || bomjSkelet.x + 50 * 6 || bomjSkelet.x + 50 * 7 || bomjSkelet.x + 50 * 8){
//         bomjSkelet.money += 1
//         MonetkaStart = 0
// //     }
// if(randomSpawnMonetka === xx || yy){
//     bomjSkelet.money += 1
//     MonetkaStart = 0
//     alert('сработало')
// }

// setInterval(() =>{
//     if(randomSpawnMonetka === 50 ){
//         bomjSkelet.money += 1
//         console.log(xx)
//         console.log(randomSpawnMonetka)
//         // MonetkaStart = 0
//         // alert('сработало')
//         MonetkaStart = 1
//         alert('ссс')}
// },1)


// const intervalMonetka = setInterval(() =>{
//     if(childParams === 4){
//         randomSpawn()
//         if(randomSpawnMonetka === 50 ){
//             clearInterval(intervalMonetka)
//             bomjSkelet.money += 1
//             intervalMonetka()
//         }
        
//     }
// },500)

// function qweqwe() {
//     if(randomSpawnMonetka === 50){
//         clearInterval(intervalMonetka);
//     }

//     intervalMonetka = setInterval(function() {
//         randomSpawn()
//     }, 1000);
// }
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





// let MonetkaStart = 1000;
// setInterval(()=>{
    // randomSpawn()
// },5000)
// setInterval(()=>{
//     if(randomSpawnMonetka > xx && randomSpawnMonetka < yy){
//         bomjSkelet.money += 1
//         randomSpawn()
//         console.log(bomjSkelet.money)
        
//     }
// },1)

// function monetSpawn(MonetkaStart){
//     console.log(randomSpawnMonetka)
//     setTimeout(function request(){
//         randomSpawn()
//         if(randomSpawnMonetka > xx && randomSpawnMonetka < yy){
//             bomjSkelet.money += 1
//             monetSpawn(1)
            
//         }
//         console.log(randomSpawnMonetka)
//         timerId = setTimeout(request, MonetkaStart);    
//     },MonetkaStart)
// }

// monetSpawn(MonetkaStart)
    



// let MonetkaStart = 1000;
// let timeMonet = setTimeout(function request() { 
//                 MonetkaStart = 1000;
//                 console.log('-------------------')
//                 if(childParams === 4){                 
//                 randomSpawn()
//                 if(randomSpawnMonetka > xx && randomSpawnMonetka < yy){
//                     bomjSkelet.money += 1
//                     // alert(bomjSkelet.money)
//                     MonetkaStart = 100
//                 }
//                 console.log('-------------------')}
            
//                 timerId = setTimeout(request, MonetkaStart);
                
              
//               },MonetkaStart);
// qweqwe();
// randomSpawn()
// setInterval(() => {
//     randomSpawn()
//     if(randomSpawnMonetka > xx && randomSpawnMonetka < yy){
//         randomSpawn()
//         bomjSkelet.money += 1
//         console.log(bomjSkelet.money)
//     }
// }, 500);

// function randomMonet(){
//     if(randomSpawnMonetka > xx && randomSpawnMonetka < yy){
//         randomSpawn()
//         alert('овечка')
//     }
//     setTimeout(function request() {  
//             MonetkaStart = 2000
//             randomSpawn()
     
        
//             timerId = setTimeout(request, MonetkaStart);
          
//           },MonetkaStart);
// }

// randomMonet()
// let locationMonetkaStart = setTimeout(function request() {
//     // if(o === 1){
//     //     MonetkaStart = 100
//     //     o = 0
//     // }


//     if(childParams === 4){
       
//     MonetkaStart = 2000
//     randomSpawn()
//     console.log(randomSpawnMonetka)
//     console.log(`${bomjSkelet.money} у вас денег`)
//     // if (monetkaUmn > xx, monetkaUmn < yy ){
//     //     bomjSkelet.money += 1
//     //     randomSpawn()
//     // }

//     console.log(`${bomjSkelet.x} левая граница + ${bomjSkelet.x + bomjSkelet.width} правая граница  + выпало ${randomSpawnMonetka}`)
//     }


//     timerId = setTimeout(request, MonetkaStart);
  
//   }, MonetkaStart);


document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyA') {
        // for(let i = 0;i < 50; i++){
        //     bomjSkelet.x -= 1
        // }
          bomjSkelet.x -= 50
          
    }
  });

  
document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyD') {
        // for(let i = 0;i < 50; i++){
        //     bomjSkelet.x += 1
        // }
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
    if(fireFucktor === true){
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
    

    
    
},1)


window.onload = () => {  
    ctx.drawImage(windows, 0, 0,window.innerWidth,window.innerHeight)
    ctx.drawImage(bomj, bomjSkelet.x, bomjSkelet.y,bomjSkelet.width,bomjSkelet.height) 
 }