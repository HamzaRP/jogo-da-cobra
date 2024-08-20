// Seleciona o canvas e o contexto 2D
const canvas = document.getElementById('gameCanvas"');
const ctx = canvas.getContext('2D');

// Tamanho do blocos do jogo
const gridSize = 20;
const canvasSize = 400;

// Posição inicial do cobra
let snake = [{ x: gridSize *5, y: gridSize * 5}];
let direction = { x: 1, y:0 };

// Posicionaento da comida
let food = { x: gridSize * 10, y: gridSize * 10};

// Variavel para controlar o loop do jogo
let gameInterval;

// Função para desenhar a cobra
function drawSnake() {
    ctx.fillStyle = 'lime';
    snake.forEach(part => {
        ctx.fillRect(part.x, part.y, gridSize, gridSize)
    });
}

// Função para desenhar a comida
function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, gridSize, gridSize);
}
      // Função para mover a cobra
      function moveSnake() {
        const head = { x:snake[0].x = direction * gridSize, y: snake[0] .y + direction.y * gridSize};

        // Verifica se a cbora comeu a comida
        if (head.x === food.x && head.y === food.y){
            placeFood();
        } else{
}


// Verifica se a cobra colidiu com a parade ou com 
if(head.x < 0 || head.y < 0 || head.x >= canvasSize || 
    isSnakeCollision()) {
        clearInterval(gameInterval);
        alert('Game Over');
    }
}
    
// Função para verificar se a cobra colidiu com ela mesma
function isSnakeColision() {
    const head = snake [0];
    for(let i = 1; i < snake.length; i++) {
        if (snake[i]).x === head.x &&
        snake[i].y === head.y) {
            return true;
        }
    }
    return false;
}