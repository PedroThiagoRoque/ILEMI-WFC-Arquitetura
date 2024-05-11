
const tamanho = 10;
let roomMatrix = Array.from({ length: 10 }, () => Array(10).fill(0));
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
  const matrixDisplay = document.querySelector('.matrix-display');
  matrixDisplay.innerHTML = '';
  roomMatrix.forEach(row => {
    const tr = document.createElement('tr');
    row.forEach(cell => {
      const td = document.createElement('td');
      td.textContent = cell;
      tr.appendChild(td);
    });
    matrixDisplay.appendChild(tr);
  });
}

createTable(10, 10);
updateMatrixDisplay();

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

  // Adiciona a última célula na ultima borda dos blocos
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

function addWallAtBlockEnds(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Verificar cada linha exceto a última
  for (let i = 1; i < rows - 1; i++) {
      for (let j = 0; j < cols; j++) {
          // Verificar se a célula atual é '1' e se é a última linha do bloco
          if (matrix[i][j] === 1 && matrix[i][j-1] === 1 && matrix[i + 1][j] === 0) {
              // Identificar a última '1' na linha
              let lastOneIndex = j;
              while (lastOneIndex + 1 < cols && matrix[i][lastOneIndex + 1] === 1) {
                  lastOneIndex++;
              }

              // Verificar a condição para adicionar uma parede na borda inferior
              if (lastOneIndex + 1 < cols && matrix[i][lastOneIndex + 1] === 0) {
                  // Verificar se acima da próxima célula '0' há uma '1'
                  if (i > 0 && matrix[i - 1][lastOneIndex + 1] === 1) {
                      matrix[i][lastOneIndex + 1] = 1; // Adicionar '1' para fechar o bloco
                      break;
                  }
              }

              // Pular para a próxima seção após a última '1' encontrada
              j = lastOneIndex;
          }
      }
  }
}

// Matriz de exemplo com vários blocos
let matrix2 = [
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 1, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

addWallAtBlockEnds(matrix2);
console.log("oiotó: ",matrix2);







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