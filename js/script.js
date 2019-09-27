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

let corCarro = "rgb(178,34,34)",
    corVidros = "rgb(255, 255, 255)"



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
    ctx.fillStyle = corCarro
    ctx.translate(x, y)
    ctx.rotate(ang)
    ctx.fillRect(-larg / 2, -alt / 2, larg, alt)

    // farol esquerdo
    ctx.fillStyle = corVidros
    ctx.translate(-larg / 2 + 5, -alt / 2 + 4) // x y
    ctx.fillRect(-largFarolEsquerdo / 2, -altFarolEsquerdo / 2, largFarolEsquerdo, altFarolEsquerdo)

    // farol direito
    ctx.fillStyle = corVidros
    ctx.translate(alt - larg, 0) // x y
    ctx.fillRect(-largFarolEsquerdo / 2, -altFarolEsquerdo / 2, largFarolEsquerdo, altFarolEsquerdo)

    // parabrisa da frente
    ctx.fillStyle = corVidros
    ctx.translate(-17, 15) // x y
    ctx.fillRect(-larg / 2, -altFarolEsquerdo / 2, larg / 2 + 17, alt / 2 - 23)

    // triangulo do parabrisa da frente 
    ctx.beginPath();
    ctx.fillStyle = corCarro
    ctx.moveTo(-25, 20);
    ctx.lineTo(-20, 20);
    ctx.lineTo(-25, -4);
    ctx.fill();

    // triangulo do parabrisa da frente 
    ctx.beginPath();
    ctx.fillStyle = corCarro
    ctx.moveTo(17,-5);
    ctx.lineTo(17, 20);
    ctx.lineTo(12, 20);
    ctx.fill();

    // parabrisa de trás
    ctx.fillStyle = corVidros
    ctx.translate(0, 49) // x y
    ctx.fillRect(-larg / 2, -altFarolEsquerdo / 2 , larg / 2 + 17, alt / 2 - 33)

    // triangulo do parabrisa de tras
    ctx.beginPath();
    ctx.fillStyle = corCarro
    ctx.moveTo(-25, -3);
    ctx.lineTo(-20, -3);
    ctx.lineTo(-25, 15);
    ctx.fill();

    // triangulo do parabrisa de tras
    ctx.beginPath();
    ctx.fillStyle = corCarro
    ctx.moveTo(18, -3);
    ctx.lineTo(18, 15);
    ctx.lineTo(12, -3);
    ctx.fill();

    // vidro do motorista
    ctx.beginPath();
    ctx.fillStyle = corVidros
    ctx.moveTo(-21, -23);
    ctx.lineTo(-26, -47);
    ctx.lineTo(-25, -17);
    ctx.lineTo(-21, -17);
    ctx.fill();

    // vidro do caroneiro
    ctx.beginPath();
    ctx.fillStyle = corVidros
    ctx.moveTo(14, -24);
    ctx.lineTo(18, -47);
    ctx.lineTo(18, -17);
    ctx.lineTo(14, -17);
    ctx.fill();

    // vidro do caroneiro
    ctx.beginPath();
    ctx.fillStyle = corVidros
    ctx.moveTo(14,-14);
    ctx.lineTo(18, -14);
    ctx.lineTo(18, 7);
    ctx.lineTo(14, -4);
    ctx.fill();

    // vidro do caroneiro
    ctx.beginPath();
    ctx.fillStyle = corVidros
    ctx.moveTo(-21,-14);
    ctx.lineTo(-25, -14);
    ctx.lineTo(-25, 7);
    ctx.lineTo(-21, -5);
    ctx.fill();

    // retrovisor esquerdo
    ctx.beginPath();
    ctx.fillStyle = corCarro
    ctx.moveTo(-27, -47);
    ctx.lineTo(-27, -51); 
    ctx.lineTo(-35, -45);
    ctx.lineTo(-34, -43);
    ctx.fill();

    // retrovisor direito
    ctx.beginPath();
    ctx.fillStyle = corCarro
    ctx.moveTo(22, -47);
    ctx.lineTo(22, -51); 
    ctx.lineTo(30, -45);
    ctx.lineTo(29, -43);
    ctx.fill();
    
    // escada
    ctx.beginPath();
    ctx.fillStyle = "rgb(169,169,169)"
    ctx.moveTo(-9, 8);
    ctx.lineTo( -6, 8); 
    ctx.lineTo(-6, -40);
    ctx.lineTo(-9, -40);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "rgb(169,169,169)"
    ctx.moveTo(7, 8);
    ctx.lineTo(4, 8); 
    ctx.lineTo(4, -40);
    ctx.lineTo(7, -40);
    ctx.fill();
    ctx.beginPath(); // degrau
    ctx.fillStyle = "rgb(169,169,169)"
    ctx.moveTo(-6, -3);
    ctx.lineTo(4, -3); 
    ctx.lineTo(4, 0);
    ctx.lineTo(-6, 0);
    ctx.fill();
    ctx.beginPath(); // degrau
    ctx.fillStyle = "rgb(169,169,169)"
    ctx.moveTo(-6, -12);
    ctx.lineTo(4, -12); 
    ctx.lineTo(4, -9);
    ctx.lineTo(-6, -9);
    ctx.fill();
    ctx.beginPath(); // degrau
    ctx.fillStyle = "rgb(169,169,169)"
    ctx.moveTo(-6, -21);
    ctx.lineTo(4, -21); 
    ctx.lineTo(4, -18);
    ctx.lineTo(-6, -18);
    ctx.fill();
    ctx.beginPath(); // degrau
    ctx.fillStyle = "rgb(169,169,169)"
    ctx.moveTo(-6, -31);
    ctx.lineTo(4, -31); 
    ctx.lineTo(4, -28);
    ctx.lineTo(-6, -28);
    ctx.fill();
    




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