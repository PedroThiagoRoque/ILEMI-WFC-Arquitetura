// O mundo é formado não apenas pelo que já existe, mas pelo que pode efetivamente existir. -Milton Santos

const tamanho = 5;
let grid = new Array(tamanho).fill(null).map(() => new Array(tamanho).fill([0, 1, 2, 3, 4]));
window.grid = grid;



function createTable() {
  var container = document.getElementById('table-container');
  container.innerHTML = '';
  var table = document.createElement('table');
  table.className = 'table-container';

  for (var i = 0; i < tamanho; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < tamanho; j++) {
      var td = document.createElement('td');
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'btn btn-light';
      button.id = `cell-${i}-${j}`;
      // Use uma função de fechamento para capturar os valores corretos de i e j
      (function(i, j) {
        button.onclick = function() {
          cellClick(i, j);
        };
      })(i, j);
      td.appendChild(button);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  container.appendChild(table);
}

  
  //document.getElementById('generate-table').addEventListener('click', createTable);
  
  // Chama a função ao iniciar
  createTable();
  
//////////////////////////////////////////////////////////////////////////////////
//Resetando a tabelinha

function resetGrid() {
  // Recria o grid com os valores iniciais
  grid = new Array(tamanho).fill(null).map(() => new Array(tamanho).fill([0, 1, 2, 3, 4, 5, 6]));
  window.grid = grid;
  createTable();
}

document.getElementById('generate-table').addEventListener('click', resetGrid);

//////////////////////////////////////////////////////////////////////////////////
const rules = {
  0: [0,1, 2, 3,4], // Piso
  1: [0,1, 2, 3,4],    // Parede
  2: [0,1, 2, 3,4],    // Canto
  3: [0,1, 2, 3,4],    // Porta
  4: [0,1, 2, 3,4],   // Janela
};

const comodos = {
  0: "Piso",
  1: "Parede",
  2: "Canto",
  3: "Porta",
  4: "Janela"
};

//////////////////////////////////////////////////////////////////////////////////

function cellClick(i, j) {
  const adjacentOptions = getValidOptionsFromAdjacent(i, j);
  let possibleValues = grid[i][j].length === 1 ? adjacentOptions : grid[i][j];
  possibleValues = possibleValues.filter(val => adjacentOptions.includes(val));

  if (possibleValues.length === 0) {
    alert("Não há opções válidas para esta célula.");
    return;
  }

  const popup = document.getElementById('popup-container');
  popup.innerHTML = '';
  popup.style.display = 'block';
  popup.style.left = `${event.clientX}px`;
  popup.style.top = `${event.clientY}px`;

  possibleValues.forEach(value => {
    const button = document.createElement('button');
    button.className = 'btn btn-light';
    button.innerText = comodos[value]; // Usar o nome do cômodo
    button.onclick = function() {
      collapseCell(i, j, value);
      updateCellUI(i, j, value);
      updateGridBasedOnRules(i, j, value);
      popup.style.display = 'none';
    };
    popup.appendChild(button);
  });
}


//////////////////////////////////////////////////////////////////////////////////

function getValidOptionsFromAdjacent(i, j) {
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  let validOptions = [0, 1, 2, 3, 4, 5, 6]; // Inicia com todas as opções

  directions.forEach(([di, dj]) => {
    const newI = i + di;
    const newJ = j + dj;

    if (newI >= 0 && newI < tamanho && newJ >= 0 && newJ < tamanho) {
      const adjacentCell = grid[newI][newJ];
      if (adjacentCell.length === 1) { // Se a célula adjacente já estiver colapsada
        const adjacentValue = adjacentCell[0];
        validOptions = validOptions.filter(val => rules[adjacentValue].includes(val));
      }
    }
  });

  return validOptions;
}

//////////////////////////////////////////////////////////////////////////////////

function collapseCell(i, j, value) {
  grid[i][j] = [value];
}

function updateCellUI(i, j, value) {
  const button = document.getElementById(`cell-${i}-${j}`);
  button.innerText = value;
}

//////////////////////////////////////////////////////////////////////////////////

function updateGridBasedOnRules(i, j, selectedValue) {
  // Direções para células adjacentes: cima, baixo, esquerda, direita
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  directions.forEach(([di, dj]) => {
      const newI = i + di;
      const newJ = j + dj;

      // Verificar se está dentro da grade
      if (newI >= 0 && newI < tamanho && newJ >= 0 && newJ < tamanho) {
          const adjacentCell = grid[newI][newJ];

          // Regras para o valor selecionado
          const validValues = rules[selectedValue];

          // Filtrar valores possíveis na célula adjacente com base nas regras
          const newPossibilities = adjacentCell.filter(value => validValues.includes(value));

          // Atualizar a célula adjacente com novas possibilidades
          grid[newI][newJ] = newPossibilities;

          // Se a célula adjacente agora tem apenas uma possibilidade, colapsá-la
          if (newPossibilities.length === 1) {
              collapseCell(newI, newJ, newPossibilities[0]);
              updateCellUI(newI, newJ, newPossibilities[0]);
          }
      }
  });
}

//////////////////////////////////////////////////////////////////////////////////


