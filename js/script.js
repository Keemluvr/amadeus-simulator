"use strict"

let canvas = document.getElementById("tela")
let ctx = canvas.getContext("2d")

// variáveis
let x = 200, y = 100, larg =50, alt = 10, ang = 0

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

// movimentação
function processaTeclas(){
    // Primeiro objeto
    if (teclas[87]) { // W  cima
        x += 5 * 0.1
        y += 5 * 0.1

        console.log(" ^ ", y)
    } else if (teclas[83]) { // S baixo
        y += 5
        console.log(" v ", y)
    } else if (teclas[68]) { // D direita
        //x += Math.cos(Math.PI /3)
        ang += 0.1
        console.log(" > ", x)
    } else if (teclas[65] ) { // A esquerda
        ang -= 0.1
        console.log(" < ", x)
    }
    // } else if (teclas[69]) { // E gira horario
    //     ang += 0.1
    //     console.log(" horario ", ang)
    // } else if (teclas[81]) { // Q gira horario
    //     ang -= 0.1
    //     console.log(" anti-horario ", ang)
    // }

}

requestAnimationFrame(desenhar)