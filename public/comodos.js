
const tamanho = 10;
let grid = new Array(tamanho).fill(null).map(() => new Array(tamanho).fill([0, 1, 2, 3, 4]));
window.grid = grid;

//////////////////////////////////////////////////////////////////////

let roomMatrix = Array.from({ length: 10 }, () => Array(10).fill(0));
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
 /* if (roomCounter > 10) {
    alert('Máximo de 10 cômodos atingido.');
    return;
  }*/
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

  // Inicializando as bordas externas com 1
  for (let i = 0; i < rows; i++) {
      transformedMatrix[i][0] = 1;
      transformedMatrix[i][cols - 1] = 1;
  }
  for (let j = 0; j < cols; j++) {
      transformedMatrix[0][j] = 1;
      transformedMatrix[rows - 1][j] = 1;
  }

  // Marcação de bordas internas compartilhadas apenas uma vez
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (i < rows - 1 && matrix[i][j] !== matrix[i + 1][j]) {
              transformedMatrix[i + 1][j] = 1; // Marca apenas a borda inferior
          }
          if (j < cols - 1 && matrix[i][j] !== matrix[i][j + 1]) {
              transformedMatrix[i][j + 1] = 1; // Marca apenas a borda direita
          }
      }
  }

  return transformedMatrix;
}

// Exemplo de uso:
let matrix = [
  [101, 101, 101, 101, 101, 102, 102, 102, 102, 102],
  [101, 101, 101, 101, 101, 102, 102, 102, 102, 102],
  [101, 101, 101, 101, 101, 102, 102, 102, 102, 102],
  [104, 104, 104, 104, 104, 103, 103, 103, 103, 103],
  [104, 104, 104, 104, 104, 103, 103, 103, 103, 103],
  [104, 104, 104, 104, 104, 103, 103, 103, 103, 103],
  [105, 105, 105, 106, 106, 106, 106, 106, 106, 106],
  [105, 105, 105, 106, 106, 106, 106, 106, 106, 106],
  [105, 105, 105, 106, 106, 106, 106, 106, 106, 106],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let transformedMatrix = transformMatrix(matrix);
console.log(transformedMatrix);


/*
let matrix = [
  [101, 101, 101, 101, 101, 102, 102, 102, 102, 102],
  [101, 101, 101, 101, 101, 102, 102, 102, 102, 102],
  [101, 101, 101, 101, 101, 102, 102, 102, 102, 102],
  [104, 104, 104, 104, 104, 103, 103, 103, 103, 103],
  [104, 104, 104, 104, 104, 103, 103, 103, 103, 103],
  [104, 104, 104, 104, 104, 103, 103, 103, 103, 103],
  [105, 105, 105, 106, 106, 106, 106, 106, 106, 106],
  [105, 105, 105, 106, 106, 106, 106, 106, 106, 106],
  [105, 105, 105, 106, 106, 106, 106, 106, 106, 106],
  [0,   0,   0,   0,   0,   0,   0,   0,   0,   0]
];

*/