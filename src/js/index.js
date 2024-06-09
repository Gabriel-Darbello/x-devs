const btn_avancar = document.getElementById("btn-avancar");
const btn_voltar = document.getElementById("btn-voltar");
let cartao_atual = 0;
const cartoes = document.querySelectorAll(".cartao");

btn_avancar.addEventListener("click", function () {
    if (cartao_atual === cartoes.length - 1) return;

    esconder_cartao_selecionado();

    cartao_atual++;
    mudar_cartao_selecionado();
});

btn_voltar.addEventListener("click", function () {
    const primeiro_cartao = cartao_atual === 0;
    if (primeiro_cartao) return;

    esconder_cartao_selecionado();

    cartao_atual--;
    mudar_cartao_selecionado();
});

function mudar_cartao_selecionado() {
    cartoes[cartao_atual].classList.add("selecionado");
}

function esconder_cartao_selecionado() {
    const cartao_selecionado = document.querySelector(".selecionado");
    cartao_selecionado.classList.remove("selecionado");
}
