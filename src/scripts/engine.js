// pega todas as teclas(key) do documento principal
const pianoKeys = document.querySelectorAll(".piano-keys .key");
// pega o input de volume
const volumeSlider = document.querySelector(".volume-slider input");
// pega o input da keys check (teclas)
const keysCheck = document.querySelector(".keys-check input");

// as teclas só serão tocadas se estiverem dentro desse array
let mapedKeys = [];
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
  key.addEventListener("click", () => playTune(key.dataset.key));
  // inclui no mapedKeys apenas as keys(letras) que possuem o dataset
  mapedKeys.push(key.dataset.key);
});

// captura o Keyboard Event e reproduz o som conforme as teclas que são tocadas
document.addEventListener("keydown", (e) => {
  // só reproduz o som/evento se a key estiver inclusa em mapedKeys
  if (mapedKeys.includes(e.key)) {
    playTune(e.key);
  }
});

// captura o valor do evento que irá determinar o volume dos audios
const handleVolume = (e) => {
  audio.volume = e.target.value;
};

// o toggle verifica se existe a classe hide na lista, se tiver ele remove, se não tiver ele adiciona
const showHideKeys = () => {
  pianoKeys.forEach(key => key.classList.toggle("hide"));
}

// quando o input de volume é manipulado, chama a função handleVolume
volumeSlider.addEventListener("input", handleVolume);

// quando o botão de teclas é clicado, chama a função showHideKeys
keysCheck.addEventListener("click", showHideKeys);