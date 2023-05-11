const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();
        selecionarBotaoCarrossel(botao);
        esconderImagemAtiva();
        mostrarImagemAtiva(indice);
    });
});

function mostrarImagemAtiva(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    if (imagemAtiva) {
        imagemAtiva.classList.remove('ativa');
    }
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove('selecionado');
    }
}
