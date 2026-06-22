let contador = 0;

function changeText() {
    let botao = document.querySelector('.botao');
    botao.textContent = contador;
}

function mudaTexto() {
    contador++;
    changeText();
}
