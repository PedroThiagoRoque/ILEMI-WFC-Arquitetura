
const tamanho = 10;
let roomMatrix = Array.from({ length: tamanho }, () => Array(tamanho).fill(0));
window.grid = roomMatrix;

//////////////////////////////////////////////////////////////////////

//let roomMatrix = Array.from({ length: 10 }, () => Array(10).fill(0));
let roomCounter = 1;
const colors = ['#FFC0CB', '#FFD700', '#ADFF2F', '#40E0D0', '#FFA500', '#20B2AA', '#9370DB', '#FF6347', '#4682B4', '#D7BDE2'];
let currentSelection = [];
let currentRoomType = 1;

function createTable(rows, cols) {
  const container = document.getElementById('table-container');
  container.innerHTML = '';
  const table = document.createElement('table');
  table.className = 'table table-bordered';

  let startRow, startCol, dragging = false;

  for (let i = 0; i < rows; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < cols; j++) {
      const td = document.createElement('td');
      td.dataset.row = i;
      td.dataset.col = j;

      td.addEventListener('mousedown', function(e) {
        dragging = true;
        startRow = i;
        startCol = j;
        clearSelection();
        selectCells(i, j, i, j);
        e.preventDefault();
      });

      td.addEventListener('mouseenter', function() {
        if (dragging) {
          clearSelection();
          selectCells(startRow, startCol, i, j);
        }
      });

      td.addEventListener('mouseup', function(e) {
        dragging = false;
        displayRoomTypeMenu(e.clientX, e.clientY);
      });

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  container.appendChild(table);
}

function selectCells(r1, c1, r2, c2) {
  const minRow = Math.min(r1, r2);
  const maxRow = Math.max(r1, r2);
  const minCol = Math.min(c1, c2);
  const maxCol = Math.max(c1, c2);
  currentSelection = [];

  for (let r = minRow; r <= maxRow; r++) {
    for (let c = minCol; c <= maxCol; c++) {
      const cell = document.querySelector(`td[data-row="${r}"][data-col="${c}"]`);
      cell.classList.add('selected');
      currentSelection.push(cell);
    }
  }
}

function clearSelection() {
  document.querySelectorAll('td').forEach(cell => cell.classList.remove('selected'));
}

function addRoom(roomType) {
 
  const color = colors[roomType - 101];
  currentSelection.forEach(cell => {
    cell.style.backgroundColor = color;
    roomMatrix[cell.dataset.row][cell.dataset.col] = roomType;
  });
  roomCounter++;
  updateMatrixDisplay();
}


function displayRoomTypeMenu(x, y) {
  const menu = document.getElementById('room-type-menu');
  menu.style.left = `${x}px`;
  menu.style.top = `${y}px`;
  menu.style.display = 'grid';

  menu.querySelectorAll('.room-type').forEach(button => {
    button.onclick = function() {
      addRoom(this.dataset.type);
      menu.style.display = 'none';
    };
  });

  document.querySelector('#room-type-menu .close-btn').addEventListener('click', function() {
    document.getElementById('room-type-menu').style.display = 'none';
  });

}

function updateMatrixDisplay() {

  roomMatrix.forEach(row => {
    const tr = document.createElement('tr');
    row.forEach(cell => {
      const td = document.createElement('td');
      td.textContent = cell;
      tr.appendChild(td);
    });
    
  });
}

createTable(tamanho, tamanho);
//updateMatrixDisplay();

//////////////////////////////////////////////////////////////////////
//Transformaçação em layout ILÊMI

function transformMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let transformedMatrix = Array.from({ length: rows }, () => Array(cols).fill(0));

  // Inicializando as bordas externas apenas se tiver contato com um bloco de cômodo
  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] > 100) {
      transformedMatrix[i][0] = 1;
    }
    if (matrix[i][cols - 1] > 100) {
      transformedMatrix[i][cols - 1] = 1;
    }
  }
  for (let j = 0; j < cols; j++) {
    if (matrix[0][j] > 100) {
      transformedMatrix[0][j] = 1;
    }
    if (matrix[rows - 1][j] > 100) {
      transformedMatrix[rows - 1][j] = 1;
    }
  }

  // Marcação de bordas internas compartilhadas apenas uma vez
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i < rows - 1 && matrix[i][j] !== matrix[i + 1][j] && (matrix[i][j] > 100 || matrix[i + 1][j] > 100)) {
        transformedMatrix[i + 1][j] = 1; // Marca apenas a borda inferior
      }
      if (j < cols - 1 && matrix[i][j] !== matrix[i][j + 1] && (matrix[i][j] > 100 || matrix[i][j + 1] > 100)) {
        transformedMatrix[i][j + 1] = 1; // Marca apenas a borda direita
      }
    }
  }  

  // Adiciona a última célula na ultima borda dos blocos, gambiarra da braba ( ͡° ͜ʖ ͡°)
  // Verificar cada linha exceto a última
  for (let i = 1; i < rows - 1; i++) {
      for (let j = 0; j < cols; j++) {
          // Verificar se a célula atual é '1' e se é a última linha do bloco
          if (transformedMatrix[i][j] === 1 && transformedMatrix[i][j-1] === 1 && transformedMatrix[i + 1][j] === 0) {
              // Identificar a última '1' na linha
              let lastOneIndex = j;
              while (lastOneIndex + 1 < cols && transformedMatrix[i][lastOneIndex + 1] === 1) {
                  lastOneIndex++;
              }

              // Verificar a condição para adicionar uma parede na borda inferior
              if (lastOneIndex + 1 < cols && transformedMatrix[i][lastOneIndex + 1] === 0) {
                  // Verificar se acima da próxima célula '0' há uma '1'
                  if (i > 0 && transformedMatrix[i - 1][lastOneIndex + 1] === 1) {
                    transformedMatrix[i][lastOneIndex + 1] = 1; // Adicionar '1' para fechar o bloco
                      break;
                  }
              }

              // Pular para a próxima seção após a última '1' encontrada
              j = lastOneIndex;
          }
      }
  }

console.log("matriz alterada: ", transformedMatrix);
addCorners(transformedMatrix); //Adiciona os cantos à matriz transformada

  //window.grid = transformedMatrix; // armazena a matriz transformada em uma variável global
  return transformedMatrix; 
}


document.getElementById('add-room').addEventListener("click", function() {
  transformMatrix(roomMatrix);
});


//////////////////////////////////////////////////////////////////////
//Adiciona os cantos

function addCorners(matrix) {
  let numRows = matrix.length;
  let numCols = matrix[0].length;
  let newMatrix = JSON.parse(JSON.stringify(matrix)); // Cópia profunda da matriz original

function matchesPattern(row, col) {
  let value = matrix[row][col];
  if (value !== 1 && value !== 0) return false;  // Processa apenas células que são 0 ou 1

  // Obtém valores dos vizinhos ou 0 se fora dos limites
  function get(r, c) {
      return (r >= 0 && r < numRows && c >= 0 && c < numCols) ? matrix[r][c] : 0;
  }

  // Vizinhos centrados em (row, col)
  let top = get(row - 1, col);
  let bottom = get(row + 1, col);
  let left = get(row, col - 1);
  let right = get(row, col + 1);

  // Todos os padrões para células 1
  let patterns = [
      [0, 0, 1, 1], [0, 1, 0, 1], [1, 1, 0, 0], [1, 0, 1, 0],
      [0, 1, 1, 1], [1, 1, 0, 1], [1, 1, 1, 0], [1, 0, 1, 1],
      [1, 1, 1, 1]
  ];

  // Padrão específico para células 0 em cantos
  let cornerPatterns = [
      //[1, 1, 0, 0]//, [0, 1, 1, 0], [0, 0, 1, 1], [1, 0, 0, 1] // detecta 0 a mais do que deveria
  ];

  // Converter para string para fácil comparação
  let neighborhood = [top, left, right, bottom];

  if (value === 1 && patterns.some(pattern => pattern.toString() === neighborhood.toString())) {
      return true;  // Mantém como 1
  }

  if (value === 0 && cornerPatterns.some(pattern => pattern.toString() === neighborhood.toString())) {
      matrix[row][col] = 2;  // Transforma 0 em 2 se é um canto
      return true;
  } //PARA PADRÕES EM FORMATO T PARA DIREITA, CAMINHAR O CANTO PARA CÉLULA [row][col+1]

  return false;
}

  // Percorrer a matriz e aplicar as regras de substituição
  for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
          if (matchesPattern(row, col)) {
              newMatrix[row][col] = 2;
          }
      }
  }

  window.grid = newMatrix; // armazena a matriz transformada em uma variável global
  console.log("matriz com cantos: ", newMatrix);
  return newMatrix;
}

let matrix = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
//console.log(addCorners(matrix));


//////////////////////////////////////////////////////////////////////
//Transformando com thresholding

// Teste da função com a matriz exemplo
let inputMatrix2 = [
  [101, 101, 101, 101, 101, 102, 102, 102, 102, 102],
  [101, 101, 101, 101, 101, 102, 102, 102, 102, 102],
  [101, 101, 101, 101, 101, 102, 102, 102, 102, 102],
  [104, 104, 104, 104, 104, 103, 103, 103, 103, 103],
  [104, 104, 104, 104, 104, 103, 103, 103, 103, 103],
  [104, 104, 104, 104, 104, 103, 103, 103, 103, 103],
  [105, 105, 105, 106, 106, 106, 106, 0, 0, 0],
  [105, 105, 105, 106, 106, 106, 106, 0, 0, 0],
  [105, 105, 105, 106, 106, 106, 106, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

//transformMatrix(inputMatrix2)

function transformMatrix2(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let transformedMatrix = Array.from({ length: m }, () => Array(n).fill(0));

  function applyRulesForBlock(i1, j1, i2, j2, value) {
      // Aplicar regras para centros e bordas internas
      for (let i = i1; i <= i2; i++) {
          for (let j = j1; j <= j2; j++) {
              if (i === i1 || i === i2 || j === j1 || j === j2) {
                  transformedMatrix[i][j] = 1; // Bordas
              } else {
                  transformedMatrix[i][j] = 0; // Centro
              }
          }
      }

      // Aplicar regras para os cantos
      transformedMatrix[i1][j1] = 2; // Canto superior esquerdo
      transformedMatrix[i1][j2] = 2; // Canto superior direito
      transformedMatrix[i2][j1] = 2; // Canto inferior esquerdo
      transformedMatrix[i2][j2] = 2; // Canto inferior direito
  }

  // Função para marcar as bordas compartilhadas de forma correta
  function markSharedBorders() {
      for (let i = 0; i < m - 1; i++) {
          for (let j = 0; j < n - 1; j++) {
              if (matrix[i][j] !== matrix[i + 1][j]) {
                  transformedMatrix[i + 1][j] = Math.max(transformedMatrix[i + 1][j], 1); // Borda inferior
              }
              if (matrix[i][j] !== matrix[i][j + 1]) {
                  transformedMatrix[i][j + 1] = Math.max(transformedMatrix[i][j + 1], 1); // Borda direita
              }
          }
      }
  }

  // Detectar blocos usando DFS e aplicar regras
  let visited = Array.from({ length: m }, () => Array(n).fill(false));
  function dfs(i, j, value, blockBounds) {
      if (i < 0 || j < 0 || i >= m || j >= n || visited[i][j] || matrix[i][j] !== value) return;
      visited[i][j] = true;
      blockBounds.minI = Math.min(blockBounds.minI, i);
      blockBounds.maxI = Math.max(blockBounds.maxI, i);
      blockBounds.minJ = Math.min(blockBounds.minJ, j);
      blockBounds.maxJ = Math.max(blockBounds.maxJ, j);
      dfs(i - 1, j, value, blockBounds);
      dfs(i + 1, j, value, blockBounds);
      dfs(i, j - 1, value, blockBounds);
      dfs(i, j + 1, value, blockBounds);
  }

  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (!visited[i][j]) {
              let blockBounds = { minI: i, maxI: i, minJ: j, maxJ: j };
              dfs(i, j, matrix[i][j], blockBounds);
              applyRulesForBlock(blockBounds.minI, blockBounds.minJ, blockBounds.maxI, blockBounds.maxJ, matrix[i][j]);
          }
      }
  }

  markSharedBorders();

  return transformedMatrix;
}


console.log("Geração a partir de gramática: ", transformMatrix2(inputMatrix2));
//Ainda deixa bordas duplicadas, talvez combinar a remoção de bordas duplicadas internas com as regras da gramática, ou aprimorar as regras né ¯\_(ツ)_/¯



//////////////////////////////////////////////////////////////////////
/*
let matrix = [
  [101, 101, 101, 101, 101, 102, 102, 102, 102, 102],
  [101, 101, 101, 101, 101, 102, 102, 102, 102, 102],
  [101, 101, 101, 101, 101, 102, 102, 102, 102, 102],
  [104, 104, 104, 104, 104, 103, 103, 103, 103, 103],
  [104, 104, 104, 104, 104, 103, 103, 103, 103, 103],
  [104, 104, 104, 104, 104, 103, 103, 103, 103, 103],
  [105, 105, 105, 106, 106, 106, 106, 0, 0, 0],
  [105, 105, 105, 106, 106, 106, 106, 0, 0, 0],
  [105, 105, 105, 106, 106, 106, 106, 0, 0, 0],
  [0,   0,   0,   0,   0,   0,   0,   0,   0,   0]
];

*/