"use strict"

let canvas = document.getElementById("tela")
let ctx = canvas.getContext("2d")

// variáveis
let x = 700, y = 350, larg = 30, alt = 50, ang = 0

// inicia um vetor de 256 teclas
let teclas = []
for(let i = 0; i < 256; i++) {
    teclas[i] = false
}

function desenhar(){
    processaTeclas()
    // carro
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)
    ctx.fillStyle = "rgb(255, 0, 0)"
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(ang)
    ctx.fillRect(-larg/2, -alt/2, larg, alt)
    ctx.restore()

    requestAnimationFrame(desenhar)
}


// movimentação
document.onkeydown = (evt) => { teclas[evt.keyCode] = true }

document.onkeyup = (evt) => { teclas[evt.keyCode] = false }

function processaTeclas(){
    // Movimentação do carro
    if (teclas[38]) { // cima - frente
        y -= Math.cos(ang) * 5
        x += Math.sin(ang) * 5
    }  if (teclas[40]) { // baixo - trás
        y += 5
    }  if (teclas[39]) { // direita
        ang += 0.1
    }  if (teclas[37] ) { // esquerda
        ang -= 0.1
    }
}

requestAnimationFrame(desenhar)