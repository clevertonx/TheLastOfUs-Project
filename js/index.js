/* objetivo 1 - quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer
objetivo 2 - quando o usuário clicar no X devemos fechar a modal

objetivo 1 - quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer

- passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
- passo 2 - dar um jeito de identificar quando o usuário clicar no botão
- passo 3 - dar um jeito de pegar o elemento da modal no js
- passo 4 - abrir a modal na tela

objetivo 2 - quando o usuário clicar no X devemos fechar a modal

*/

console.log('mostrar o document', document);

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
const botaoFungo = document.querySelector(".botao-fungo");
var fungos = ['fungo1', 'fungo2', 'fungo3', 'fungo4'];
var currentImage = 0;
  




function alternarModal() {
    modal.classList.toggle("aberto");
}
botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "")
});








