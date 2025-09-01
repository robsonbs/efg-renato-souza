const gameContainer = document.getElementById("game-container");
const cesta = document.getElementsByClassName("cesta-frutas");
const telaInicial = document.getElementById("tela-inicio");
const telaFinal = document.getElementById("tela-fim-jogo");
const inicioBtn = document.getElementById("inicio-btn");
const reinicioBtn = document.getElementById("reiniciar-btn");
const pontosTela = document.getElementById("pontos");
const pontuacaoFinal = document.getElementById("pontos-final");

let cestaPosX = gameContainer.offsetWidth / 2; // Posição inicial centralizada
const velocidadeCesta = 15; // Velocidade de movimento
const larguraTela = gameContainer.offsetWidth;
const larguraCesta = cesta[0].offsetWidth;

let pontos = 0;
let intervaloJogo; // Para o loop principal do jogo
let intervaloGeracaoFrutas; // Para gerar frutas
let frutasEmTela = []; // Array para armazenar as frutas ativas
let jogoComecou = false;

function moverCesta() {
  Array.from(cesta).forEach((element) => {
    element.style.left = cestaPosX + "px";
  });
}
moverCesta(); // Define a posição inicial no HTML

function capturaTeclas(event) {
  if (!jogoComecou) return; // Não move se o jogo não começou

  if (event.key === "ArrowLeft") {
    cestaPosX -= velocidadeCesta;
  } else if (event.key === "ArrowRight") {
    cestaPosX += velocidadeCesta;
  }

  // Limitar o movimento dentro do container do jogo
  if (cestaPosX < larguraCesta / 2) {
    cestaPosX = larguraCesta / 2;
  }
  if (cestaPosX + larguraCesta / 2 > larguraTela) {
    cestaPosX = larguraTela - larguraCesta / 1.9;
  }
  moverCesta();
}

// Adicionar o Event Listener
document.addEventListener("keydown", capturaTeclas);

const imagensFrutas = [
  "imgs/abacaxi.png",
  "imgs/banana.png",
  "imgs/laranja.png",
  "imgs/limao.png",
  "imgs/maca.png",
  "imgs/pera.png",
  "imgs/uva.png",
];

function criarFrutas() {
  const fruit = document.createElement("img"); // Usar <img> diretamente
  fruit.classList.add("fruta");

  // Escolher uma imagem de fruta aleatória
  const imagemSorteada =
    imagensFrutas[Math.floor(Math.random() * imagensFrutas.length)];
  fruit.src = imagemSorteada; // Define a fonte da imagem

  // Posição horizontal aleatória
  const posXSorteada = Math.random() * (larguraTela - 50); // 50 é a largura da fruta
  fruit.style.left = posXSorteada + "px";
  fruit.style.top = "0px"; // Começa no topo

  fruit.dataset.top = 0; // Armazena a posição Y em um dataset para manipulação numérica

  gameContainer.appendChild(fruit);
  frutasEmTela.push(fruit); // Adiciona a fruta ao array de controle
}

const velocidadeFruta = 2; // Velocidade de queda das frutas

function moveFrutas() {
  if (!jogoComecou) return;

  frutasEmTela.forEach((fruta, index) => {
    let topAtual = parseFloat(fruta.dataset.top);
    topAtual += velocidadeFruta;
    fruta.dataset.top = topAtual; // Atualiza a posição no dataset
    fruta.style.top = topAtual + "px"; // Aplica ao estilo

    // Lógica de colisão
    // Obter as coordenadas do cesto e da fruta
    const areaCesta = cesta[0].getBoundingClientRect();
    const areaFruta = fruta.getBoundingClientRect();
    const areaGameContainer = gameContainer.getBoundingClientRect();

    // Ajustar coordenadas para serem relativas ao gameContainer
    const cestaCoordenadaX = areaCesta.left - areaGameContainer.left;
    const cestaCoordenadaY = areaCesta.top - areaGameContainer.top;
    const frutaCoordenadaX = areaFruta.left - areaGameContainer.left;
    const frutaCoordenadaY = areaFruta.top - areaGameContainer.top;

    // Detecção de colisão (simplificada)
    if (
      frutaCoordenadaY + areaFruta.height >= cestaCoordenadaY + 80 && // A fruta está na mesma altura ou abaixo do topo do cesto
      frutaCoordenadaY <= cestaCoordenadaY + areaCesta.height && // A fruta não passou completamente o cesto
      frutaCoordenadaX + areaFruta.width >= cestaCoordenadaX && // A fruta está na mesma largura ou à direita da esquerda do cesto
      frutaCoordenadaX <= cestaCoordenadaX + areaCesta.width // A fruta não passou completamente a direita do cesto
    ) {
      // Colisão detectada!
      atualizaPontuacao(10); // Aumenta a pontuação
      fruta.remove(); // Remove a fruta do DOM
      frutasEmTela.splice(index, 1); // Remove do array
      return; // Pula para a próxima fruta
    }

    // Se a fruta saiu da tela
    if (topAtual + areaFruta.height > gameContainer.offsetHeight) {
      fruta.remove(); // Remove a fruta do DOM
      frutasEmTela.splice(index, 1); // Remove do array
      // Opcional: Lógica de "vidas" ou fim de jogo por frutas perdidas
      endGame(); // Finaliza o jogo se uma fruta cair
    }
  });
}

function atualizaPontuacao(points) {
  pontos += points;
  pontosTela.textContent = pontos;
}

function startGame() {
  jogoComecou = true;
  pontos = 0;
  cestaPosX = gameContainer.offsetWidth / 2;
  moverCesta();
  atualizaPontuacao(0); // Reinicia o placar
  frutasEmTela.forEach((fruit) => fruit.remove()); // Remove qualquer fruta antiga
  frutasEmTela = []; // Limpa o array de frutas

  telaInicial.classList.add("hidden");
  telaFinal.classList.add("hidden");
  gameContainer.style.display = "block"; // Mostra o container do jogo

  // Inicia os temporizadores
  intervaloJogo = setInterval(moveFrutas, 20); // Loop do jogo a cada 20ms
  intervaloGeracaoFrutas = setInterval(criarFrutas, 1500); // Gera uma fruta a cada 1.5s
}

function endGame() {
  jogoComecou = false;
  clearInterval(intervaloJogo);
  clearInterval(intervaloGeracaoFrutas);

  pontuacaoFinal.textContent = pontos;
  telaFinal.classList.remove("hidden");
}

// Event Listeners para botões
inicioBtn.addEventListener("click", startGame);
reinicioBtn.addEventListener("click", startGame);

// Estado inicial: exibir tela de início
telaInicial.classList.remove("hidden");
