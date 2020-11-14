const c = document.getElementById('canvas')
const ctx = c.getContext('2d')

let a = 0
let time = new Date()
let arry = []

const sen = a => Math.sin(a)
const cos = a => Math.cos(a)

console.log(ctx)

const circulo = (x, y, r, relleno, color)=>{
    ctx.lineWidth = 2
    ctx.fillStroke
    ctx.strokeStyle = color
    ctx.fillStyle = color
    if(!relleno)ctx.fillStyle = '#444444'
    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    ctx.fill()
    ctx.stroke()
}

const linea = (x1,y1,x2,y2)=>{
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke(); 
}

function dibujar(){
    ctx.clearRect(0,0,600,600); // limpiar canvas
    a += 0.05

    circulo(100, 300, 75, false,'#fff')
    let x = 75*cos(a)+100
    let y = 75*sen(a)+300
    linea(100,300,x,y)
    circulo(x,y,5,true,'#000')

    arry.unshift(y)
    for(let i=0;i<arry.length;i++){
        circulo(400+i,arry[i],5,true,'#000')
    }
    linea(x,y,400,arry[0])

    if(arry.length > 250){
        arry = arry.splice(0,250)
    }

    window.requestAnimationFrame(dibujar)
}

window.requestAnimationFrame(dibujar);