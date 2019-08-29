"use strict"

let canvas = document.getElementById("tela")
let ctx = canvas.getContext("2d")

// variáveis
let velocidade = 5
let x = 700,
    y = 350,
    larg = 50,
    alt = 90,
    ang = 0
let xFarolEsquerdo = x - larg + 30,
    yFarolEsquerdo = y - alt + 48,
    largFarolEsquerdo = 7,
    altFarolEsquerdo = 5,
    angFarolEsquerdo = 0

// inicia um vetor de 256 teclas
let teclas = []
for (let i = 0; i < 256; i++) {
    teclas[i] = false
}

function desenhar() {
    processaTeclas()

    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)
    ctx.save()

    // carro
    ctx.fillStyle = "rgb(255, 0, 0)"
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(ang)
    ctx.fillRect(-larg / 2, -alt / 2, larg, alt)
    ctx.restore()

    // farol esquerdo
    ctx.fillStyle = "rgb(255, 255, 255)"
    ctx.save()
    ctx.translate(xFarolEsquerdo, yFarolEsquerdo)
    ctx.rotate(ang)
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

        // farol esquerdo
        xFarolEsquerdo += Math.sin(ang) * velocidade
        yFarolEsquerdo -= Math.cos(ang) * velocidade


    }
    if (teclas[40]) { // baixo - trás
        // carro
        y += velocidade

        // farol esquerdo
        yFarolEsquerdo += velocidade

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