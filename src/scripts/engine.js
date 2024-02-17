// pega todas as teclas(key) do documento principal
const pianoKeys = document.querySelectorAll(".piano-keys .key");

// variável criada para acessar o caminho dos audios
let audio = new Audio("src/tunes/a.wav");

// recebe uma key e reproduz o audio correspondente
const playTune = (key) => {
  audio.src = `src/tunes/${key}.wav`;
  audio.play();
};

// para cada tecla clicada será reproduzido o audio capturado pela função playTune
pianoKeys.forEach((key) => {
  console.log(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
});