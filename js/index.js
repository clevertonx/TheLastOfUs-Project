console.log('mostrar o document', document);

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
const botaoClose = document.querySelector(".fechar-fungo");
let currentIndex = 0;
const classes = [".leftfungo.fungo1", ".rightfungo.fungo3", ".topfungo.fungo5", ".bottomfungo.fungo7", ".leftfungo.fungo2", ".rightfungo.fungo4", ".topfungo.fungo6", ".bottomfungo.fungo8"];
const button = document.querySelector(".botao-fungo");

button.addEventListener("click", function () {
  const currentElement = document.querySelector(classes[currentIndex]); currentElement.style.display = "block";
  currentIndex = (currentIndex + 1) % classes.length;
});

botaoClose.addEventListener("click", function () {
  classes.forEach(function (className) {
    const element = document.querySelector(className);
    element.style.display = "none";
  });
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










