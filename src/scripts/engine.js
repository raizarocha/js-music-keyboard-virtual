// pega todas as teclas(key) do documento principal
const pianoKeys = document.querySelectorAll(".piano-keys .key");

// variável criada para acessar o caminho dos audios
let audio = new Audio("src/tunes/a.wav");

// recebe uma key e reproduz o audio correspondente
const playTune = (key) => {
  audio.src = `src/tunes/${key}.wav`;
  audio.play();

  // pega no elemento html a data-key equivalente a letra(tecla) tocada 
  const clickedKey = document.querySelector(`[data-key="${key}"]`);

  // adiciona dinamicamente a classe "active"
  clickedKey.classList.add("active");

  // cria um contador que a cada 150ms removerá a classe "active"
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

// para cada tecla clicada será reproduzido o audio capturado pela função playTune
pianoKeys.forEach((key) => {
  console.log(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
});

// captura o Keyboard Event e reproduz o som conforme as teclas que são tocadas
document.addEventListener("keydown", (e) => {
  playTune(e.key);
})