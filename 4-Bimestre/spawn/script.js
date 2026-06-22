let corpo = document.querySelector('body')

document.addEventListener('click', adicionaElementos)

function adicionaElementos(evento){
   
    let posicaoDoMouseX = evento.pageX
    let posicaoDoMouseY = evento.pageY

    corpo.innerHTML += criaElemento(posicaoDoMouseX, posicaoDoMouseY)
}

function criaElemento(x, y){
    
    let estilo = 
    `
    position: absolute;
    top: ${y}px;
    left: ${x}px;
    font-size: 300px; 
    `

    let elemento = `<div style="${estilo}"><i class="ph ph-airplane-tilt"></i></div>`

    return elemento
}


