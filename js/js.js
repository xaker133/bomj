const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let home = true 

const korobka = new Image()

const perehod = new Image()

const bomj = new Image()

let buttonBomjRef = new Image()

let buttonRefHome = new Image()



// let buttonBomj = getElementById('#buttonP')

// buttonBomj.addEventListener('click', function(){
//     home = false
// })
// buttonBomj.addEventListener("click",function(){
//     home = false
//     console.log('hi')
// })
// const korobkaSrc = "img/korobka.jpg"
// const perehodSrc = "img/perehod.jpg"

// let buttonBomj = getElementById('buttonP')


// buttonBomj.addEventListener("click",function(){
//     home = false
//     console.log('hi')
// })


let bomjX = 0
let bomjY = 0

const location1 = function(){
    if(home === true){
       return  "img/korobka.jpg"
       
    }else{
        return "img/perehod.jpg"
    }
}
        korobka.addEventListener("load", function(){
        ctx.drawImage(korobka, 0, 0, 600,450)
            location1()

            ctx.drawImage(bomj, bomjY, bomjX = 50)
            ctx.drawImage(buttonBomjRef , 450, 150)
            ctx.drawImage(buttonRefHome,53, 150 )
            // ctx.drawImage(bomj, 250, 90)
        })

let buttonBomjRefSrs = () => home === true ? "img/buttonRef.png" : ''  
// buttonBomjRef.src = buttonBomjRefSrs()

let buttonRefHomeSrs = () => home === false ? 'img/buttonRefHome.png' : '' // показывает кнопку домой слева
// buttonRefHome.src = buttonRefHomeSrs()
bomj.src = "img/bomj.png" // бомж скин

setInterval(() => {
    korobka.src = location1()
    buttonRefHome.src = buttonRefHomeSrs()
    buttonBomjRef.src = buttonBomjRefSrs()
}, 1); // обновление игры // сделать промис который будет выполнять переход
// а потом перйти в переход

const buttonH = document.getElementById('buttonH')
const buttonBomj = document.getElementById('buttonP')

buttonH.style.display = 'none'

buttonH.addEventListener('click',function(){
    // buttonRefHome.src = buttonRefHomeSrs()
    home = true
    bomjY = 0
    bomjX = 50
    console.log(home)
    buttonBomj.style.display = 'inline-block'
    buttonH.style.display = 'none'
    // setTimeout(() => {
    //     setInterval(() => {
    //         korobka.src = location1()
    //         buttonRefHome.src = buttonRefHomeSrs()
    //         buttonBomjRef.src = buttonBomjRefSrs()
    //     }, 1);  сделать чтоб он спускался в переход
    // }, 2000);
    
})

let time = 1;
buttonBomj.addEventListener('click',function(){
    // buttonRefHome.src = buttonRefHomeSrs() // сходить в переход
    // buttonBomjRef.src = buttonBomjRefSrs()
    buttonBomj.style.display = 'none'
    let interval = setInterval(function() { 
    if (time <= 3) {  
        buttonBomjRef.src = "img/idemkperehody.jpg"
    time++;
    }
    else { 
      clearInterval(interval);
    }
        }, 1000);
    // buttonBomj.style.display = 'none'
    buttonH.style.display = 'inline-block'
    // buttonBomjRef.src = ""
    bomjY = 300
    bomjX = 200 
    home = false
    console.log('hi')
    console.log(home)
    // ctx.drawImage(buttonBomjRef , 450, 150)

})

