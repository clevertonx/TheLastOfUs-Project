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
let currentIndex = 0;
  const elements = document.querySelectorAll(".leftfungo.fungo1, .rightfungo.fungo3, .topfungo.fungo5, .bottomfungo.fungo7,");
  const button = document.querySelector(".botao-fungo");

  button.addEventListener("click", function() {
    elements[currentIndex].style.display = "block";
    currentIndex = (currentIndex + 1) % elements.length;
  });




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








