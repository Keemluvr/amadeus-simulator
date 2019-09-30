"use strict"

let canvas = document.getElementById("tela")
let ctx = canvas.getContext("2d")

// Carro
let velocidade = 4,
    x = 700,
    y = 350,
    larg = 50,
    alt = 90,
    ang = 0,
    escalaX = 1,
    escalaY = 1,
    addEscada = false,
    ligarFarol = false

// Cores
let corCarro = "rgb(178,34,34)",
    corVidros = "rgb(255, 255, 255)",
    corFarol = "rgb(249, 242, 154)",
    corFarolLigado = "rgb(249, 242, 1)"

// inicia um vetor de 256 teclas
let teclas = []
for (let i = 0; i < 256; i++) {
    teclas[i] = false
}

// ---------------------------  Desenhos  ---------------------------

function desenhar() {
    processaTeclas()

    ctx.clearRect(0, 0, canvas.clientWidth + 470, canvas.height)
    carro()

    requestAnimationFrame(desenhar)
}

function carro() {
    ctx.save()
    ctx.translate(x, y)
    ctx.scale(escalaX, escalaY)

    // carro
    ctx.fillStyle = corCarro
    ctx.rotate(ang)
    ctx.fillRect(-larg / 2, -alt / 2, larg, alt)

    // farol esquerdo
    if(!ligarFarol){
        ctx.fillStyle = corVidros
    } else {
        ctx.fillStyle = corFarolLigado
    }
    ctx.translate(-larg / 2 + 5, -alt / 2 + 4) // x y
    ctx.fillRect(-7 / 2, -5 / 2, 7, 5)

    // farol direito
    if(!ligarFarol){
        ctx.fillStyle = corVidros
    } else {
        ctx.fillStyle = corFarolLigado
    }
    ctx.translate(alt - larg, 0) // x y
    ctx.fillRect(-7 / 2, -5 / 2, 7, 5)

    // parabrisa da frente
    ctx.fillStyle = corVidros
    ctx.translate(-17, 15) // x y
    ctx.fillRect(-larg / 2, -5 / 2, larg / 2 + 17, alt / 2 - 23)

    // triangulo do parabrisa da frente 
    ctx.beginPath();
    ctx.fillStyle = corCarro
    ctx.moveTo(-25, 20)
    ctx.lineTo(-20, 20)
    ctx.lineTo(-25, -4)
    ctx.fill()

    // triangulo do parabrisa da frente 
    ctx.beginPath();
    ctx.fillStyle = corCarro
    ctx.moveTo(17, -5)
    ctx.lineTo(17, 20)
    ctx.lineTo(12, 20)
    ctx.fill()

    // parabrisa de trás
    ctx.fillStyle = corVidros
    ctx.translate(0, 49) // x y
    ctx.fillRect(-larg / 2, -5 / 2, larg / 2 + 17, alt / 2 - 33)

    // triangulo do parabrisa de tras
    ctx.beginPath()
    ctx.fillStyle = corCarro
    ctx.moveTo(-25, -3)
    ctx.lineTo(-20, -3)
    ctx.lineTo(-25, 15)
    ctx.fill()

    // triangulo do parabrisa de tras
    ctx.beginPath()
    ctx.fillStyle = corCarro
    ctx.moveTo(18, -3)
    ctx.lineTo(18, 15)
    ctx.lineTo(12, -3)
    ctx.fill()

    // vidro do motorista
    ctx.beginPath();
    ctx.fillStyle = corVidros
    ctx.moveTo(-21, -23)
    ctx.lineTo(-26, -47)
    ctx.lineTo(-25, -17)
    ctx.lineTo(-21, -17)
    ctx.fill()

    // vidro do caroneiro
    ctx.beginPath();
    ctx.fillStyle = corVidros
    ctx.moveTo(14, -24)
    ctx.lineTo(18, -47)
    ctx.lineTo(18, -17)
    ctx.lineTo(14, -17)
    ctx.fill()

    // vidro do caroneiro
    ctx.beginPath();
    ctx.fillStyle = corVidros
    ctx.moveTo(14, -14)
    ctx.lineTo(18, -14)
    ctx.lineTo(18, 7)
    ctx.lineTo(14, -4)
    ctx.fill()

    // vidro do caroneiro
    ctx.beginPath();
    ctx.fillStyle = corVidros
    ctx.moveTo(-21, -14)
    ctx.lineTo(-25, -14)
    ctx.lineTo(-25, 7)
    ctx.lineTo(-21, -5)
    ctx.fill()

    // retrovisor esquerdo
    ctx.beginPath();
    ctx.fillStyle = corCarro
    ctx.moveTo(-27, -47)
    ctx.lineTo(-27, -51)
    ctx.lineTo(-35, -45)
    ctx.lineTo(-34, -43)
    ctx.fill()

    // retrovisor direito
    ctx.beginPath();
    ctx.fillStyle = corCarro
    ctx.moveTo(22, -47)
    ctx.lineTo(22, -51)
    ctx.lineTo(30, -45)
    ctx.lineTo(29, -43)
    ctx.fill()

    if (addEscada) {
        escada()
    }

    if (ligarFarol) {
        farol()
    }

    ctx.restore()
}

function escada() {
    // escada
    ctx.beginPath();
    ctx.fillStyle = "rgb(169,169,169)"
    ctx.moveTo(-9, 8);
    ctx.lineTo(-6, 8);
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
}

function farol() {
    // farol direito
    ctx.beginPath()
    ctx.fillStyle = corFarol
    ctx.moveTo(21, -66)
    ctx.lineTo(32, -97)
    ctx.lineTo(0, -97)
    ctx.lineTo(13, -66)
    ctx.fill()

    // farol esquerdo
    ctx.beginPath()
    ctx.fillStyle = corFarol
    ctx.moveTo(-27, -66)
    ctx.lineTo(-39, -97)
    ctx.lineTo(-7, -97)
    ctx.lineTo(-19, -66)
    ctx.fill()
}

// ---------------------------  Controles  ---------------------------

function aumentarZoom() {
    if (escalaX <= 5) {
        escalaX += 0.01
        escalaY += 0.01
    }
}

function diminuirZoom() {
    if (escalaX > 1) {
        escalaX -= 0.01
        escalaY -= 0.01
    }
}

// --------------------------  movimentação  ---------------------------

document.onkeydown = (evt) => {
    teclas[evt.keyCode] = true
}

document.onkeyup = (evt) => {
    teclas[evt.keyCode] = false
}

// Pega enquanto a pessoa pressiona a tecla
function processaTeclas() {
    // Movimentação do carro
    if (teclas[87]) { // W - frente
        // carro
        x += Math.sin(ang) * velocidade
        y -= Math.cos(ang) * velocidade
    }
    if (teclas[83]) { // S - trás
        // carro
        x -= Math.sin(ang) * velocidade
        y += Math.cos(ang) * velocidade
    }
    if (teclas[68]) { // D - direita
        // carro
        ang += 0.01
    }
    if (teclas[65]) { // A - esquerda
        // carro
        ang -= 0.01
    }
    
    if (teclas[79]) { // O - Aproximar
        aumentarZoom()
    }
    if (teclas[80]) { // P - Aproximar
        diminuirZoom()
    }

}

// Pega somente o primeiro clique
document.addEventListener('keydown', (event) => {
    if (event.keyCode == 70) { // F - farois
        if (ligarFarol) {
            ligarFarol = false
        } else {
            ligarFarol = true
        }
    }
    if (event.keyCode == 69) { // E - escada
        if (addEscada) {
            addEscada = false
            velocidade = 4
        } else {
            addEscada = true
            velocidade = 10
        }
        
    }
})

requestAnimationFrame(desenhar)