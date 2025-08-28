const gameContainer = document.getElementById("game-container");
const basket = document.getElementsByClassName("cesta-frutas");
const startScreen = document.getElementById("tela-inicio");
const gameOverScreen = document.getElementById("tela-fim-jogo");
const startButton = document.getElementById("inicio-btn");
const restartButton = document.getElementById("reiniciar-btn");
const scoreDisplay = document.getElementById("pontos");
const finalScoreDisplay = document.getElementById("pontos-final");

let basketPositionX = gameContainer.offsetWidth / 2; // Posição inicial centralizada
const basketSpeed = 15; // Velocidade de movimento
const gameWidth = gameContainer.offsetWidth;
const basketWidth = basket[0].offsetWidth;

let score = 0;
let gameInterval; // Para o loop principal do jogo
let fruitGenerationInterval; // Para gerar frutas
let allFruits = []; // Array para armazenar as frutas ativas
let gameStarted = false;

function moveBasket() {
  Array.from(basket).forEach((element) => {
    element.style.left = basketPositionX + "px";
  });
}
moveBasket(); // Define a posição inicial no HTML

function handleKeyDown(event) {
  if (!gameStarted) return; // Não move se o jogo não começou

  if (event.key === "ArrowLeft") {
    basketPositionX -= basketSpeed;
  } else if (event.key === "ArrowRight") {
    basketPositionX += basketSpeed;
  }

  // Limitar o movimento dentro do container do jogo
  if (basketPositionX < basketWidth / 2) {
    basketPositionX = basketWidth / 2;
  }
  if (basketPositionX + basketWidth / 2 > gameWidth) {
    basketPositionX = gameWidth - basketWidth / 1.9;
  }
  moveBasket();
}

// Adicionar o Event Listener
document.addEventListener("keydown", handleKeyDown);

const fruitImages = [
  "imgs/abacaxi.png",
  "imgs/banana.png",
  "imgs/laranja.png",
  "imgs/limao.png",
  "imgs/maca.png",
  "imgs/pera.png",
  "imgs/uva.png",
];

function createFruit() {
  const fruit = document.createElement("img"); // Usar <img> diretamente
  fruit.classList.add("fruta");

  // Escolher uma imagem de fruta aleatória
  const randomImage =
    fruitImages[Math.floor(Math.random() * fruitImages.length)];
  fruit.src = randomImage; // Define a fonte da imagem

  // Posição horizontal aleatória
  const randomLeft = Math.random() * (gameWidth - 50); // 50 é a largura da fruta
  fruit.style.left = randomLeft + "px";
  fruit.style.top = "0px"; // Começa no topo

  fruit.dataset.top = 0; // Armazena a posição Y em um dataset para manipulação numérica

  gameContainer.appendChild(fruit);
  allFruits.push(fruit); // Adiciona a fruta ao array de controle
}

const fruitSpeed = 2; // Velocidade de queda das frutas

function moveFruits() {
  if (!gameStarted) return;

  allFruits.forEach((fruit, index) => {
    let currentTop = parseFloat(fruit.dataset.top);
    currentTop += fruitSpeed;
    fruit.dataset.top = currentTop; // Atualiza a posição no dataset
    fruit.style.top = currentTop + "px"; // Aplica ao estilo

    // Lógica de colisão
    // Obter as coordenadas do cesto e da fruta
    const basketRect = basket[0].getBoundingClientRect();
    const fruitRect = fruit.getBoundingClientRect();
    const gameContainerRect = gameContainer.getBoundingClientRect();

    // Ajustar coordenadas para serem relativas ao gameContainer
    const basketX = basketRect.left - gameContainerRect.left;
    const basketY = basketRect.top - gameContainerRect.top;
    const fruitX = fruitRect.left - gameContainerRect.left;
    const fruitY = fruitRect.top - gameContainerRect.top;

    // Detecção de colisão (simplificada)
    if (
      fruitY + fruitRect.height >= basketY + 80 && // A fruta está na mesma altura ou abaixo do topo do cesto
      fruitY <= basketY + basketRect.height && // A fruta não passou completamente o cesto
      fruitX + fruitRect.width >= basketX && // A fruta está na mesma largura ou à direita da esquerda do cesto
      fruitX <= basketX + basketRect.width // A fruta não passou completamente a direita do cesto
    ) {
      // Colisão detectada!
      updateScore(10); // Aumenta a pontuação
      fruit.remove(); // Remove a fruta do DOM
      allFruits.splice(index, 1); // Remove do array
      return; // Pula para a próxima fruta
    }

    // Se a fruta saiu da tela
    if (currentTop + fruitRect.height > gameContainer.offsetHeight) {
      fruit.remove(); // Remove a fruta do DOM
      allFruits.splice(index, 1); // Remove do array
      // Opcional: Lógica de "vidas" ou fim de jogo por frutas perdidas
      endGame(); // Finaliza o jogo se uma fruta cair
    }
  });
}

function updateScore(points) {
  score += points;
  scoreDisplay.textContent = score;
}

function startGame() {
  gameStarted = true;
  score = 0;
  basketPositionX = gameContainer.offsetWidth / 2;
  moveBasket();
  updateScore(0); // Reinicia o placar
  allFruits.forEach((fruit) => fruit.remove()); // Remove qualquer fruta antiga
  allFruits = []; // Limpa o array de frutas

  startScreen.classList.add("hidden");
  gameOverScreen.classList.add("hidden");
  gameContainer.style.display = "block"; // Mostra o container do jogo

  // Inicia os temporizadores
  gameInterval = setInterval(moveFruits, 20); // Loop do jogo a cada 20ms
  fruitGenerationInterval = setInterval(createFruit, 1500); // Gera uma fruta a cada 1.5s
}

function endGame() {
  gameStarted = false;
  clearInterval(gameInterval);
  clearInterval(fruitGenerationInterval);

  finalScoreDisplay.textContent = score;
  gameOverScreen.classList.remove("hidden");
}

// Event Listeners para botões
startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", startGame);

// Estado inicial: exibir tela de início
startScreen.classList.remove("hidden");
