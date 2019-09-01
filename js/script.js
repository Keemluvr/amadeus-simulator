"use strict"

let canvas = document.getElementById("tela")
let ctx = canvas.getContext("2d")

// Carro
let velocidade = 5
let x = 700,
    y = 350,
    larg = 50,
    alt = 90,
    ang = 0
// Faról esquerdo
let xFarolEsquerdo = x - larg + 30,
    yFarolEsquerdo = y - alt + 48,
    largFarolEsquerdo = 7,
    altFarolEsquerdo = 5,
    angFarolEsquerdo = 0
// Pneu
let xPneu = x - larg + 20,
    yPneu = y - alt + 59,
    largPneu = 7,
    altPneu = largPneu + 3



// inicia um vetor de 256 teclas
let teclas = []
for (let i = 0; i < 256; i++) {
    teclas[i] = false
}

function desenhar() {
    processaTeclas()

    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)
    ctx.save()

    // roda da frente (esquerda)
    // ctx.fillStyle = "rgb(0, 355, 0)"
    // ctx.rotate(ang)
    // ctx.fillRect(x, y, largPneu, altPneu)

    // carro
    ctx.fillStyle = "rgb(255, 0, 0)"
    ctx.translate(x, y)
    ctx.rotate(ang)
    ctx.fillRect(-larg / 2, -alt / 2, larg, alt)

    // farol esquerdo
    ctx.fillStyle = "rgb(255, 255, 255)"
    ctx.translate(-larg / 2 + 5,-alt / 2 + 4) // x y
    ctx.fillRect(-largFarolEsquerdo / 2, -altFarolEsquerdo / 2, largFarolEsquerdo, altFarolEsquerdo)
    
    // farol direito
    ctx.fillStyle = "rgb(255, 255, 255)"
    ctx.translate(alt - larg, 0) // x y
    ctx.fillRect(-largFarolEsquerdo / 2, -altFarolEsquerdo / 2, largFarolEsquerdo, altFarolEsquerdo)
    
    

    ctx.restore()

    requestAnimationFrame(desenhar)
}


// movimentação
document.onkeydown = (evt) => {
    teclas[evt.keyCode] = true
}

document.onkeyup = (evt) => {
    teclas[evt.keyCode] = false
}

function processaTeclas() {
    // Movimentação do carro
    if (teclas[38]) { // cima - frente
        // carro
        x += Math.sin(ang) * velocidade
        y -= Math.cos(ang) * velocidade

    }
    if (teclas[40]) { // baixo - trás
        // carro
        x -= Math.sin(ang) * velocidade
        y += Math.cos(ang) * velocidade

    }
    if (teclas[39]) { // direita
        // carro
        ang += 0.01

    }
    if (teclas[37]) { // esquerda
        // carro
        ang -= 0.01
        

    }
}

requestAnimationFrame(desenhar)