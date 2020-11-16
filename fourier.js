const c = document.getElementById('canvas')
const ctx = c.getContext('2d')
const nslider = document.getElementById('n')
const w0slider = document.getElementById('w0')
const rslider = document.getElementById('r')
const tslider = document.getElementById('t')

let x = 0
let y = 0

let t = 0
let time = new Date()
let arry = []

const sen = a => Math.sin(a)
const cos = a => Math.cos(a)

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

ctx.translate(100,300)
function dibujar(){
    ctx.clearRect(-100,-300,5000,3000); // limpiar canvas
    x = 0
    y = 0
    for(let j =0;j<nslider.value;j++){
        let w = w0slider.value
        let auxx = x
        let auxy = y
        let n = j * 2 + 1

        let r = rslider.value/n

        x += r*cos(n*w*t)
        y += r*sen(n*w*t)

        circulo(auxx,auxy,r,false,'#000')
        linea(auxx,auxy,x,y)

    }

    arry.unshift(y)
    for(let i=0;i<arry.length;i++){
        circulo(250+i, arry[i], 1, true, '#000')
    }

    linea(x,y,250,arry[0])

    t -= tslider.value
    if(arry.length > 250){
        arry = arry.splice(0,250)
    }

    window.requestAnimationFrame(dibujar)
}

window.requestAnimationFrame(dibujar);