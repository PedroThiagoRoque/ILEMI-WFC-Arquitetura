
let grid = new Array(5).fill(null).map(() => new Array(5).fill([0, 1, 2, 3, 4, 5, 6]));
window.grid = grid;



function createTable() {
  var container = document.getElementById('table-container');
  container.innerHTML = '';
  var table = document.createElement('table');
  table.className = 'table-container';

  for (var i = 0; i < 5; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 5; j++) {
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

  
  document.getElementById('generate-table').addEventListener('click', createTable);
  
  // Chama a função ao iniciar
  createTable();
  
//////////////////////////////////////////////////////////////////////////////////

const rules = {
  0: [0,1, 2, 3,4], // 0 pode estar próximo a 1, 2 ou 3
  1: [0,1, 2, 3,4],    // 1 pode estar próximo a 0 ou 4
  2: [0,1, 2, 3,4],    // 2 pode estar próximo a 3 ou 5
  3: [0,1, 2, 3,4],    // 3 pode estar próximo a 2 ou 6
  4: [0,1, 2, 3,4]    // 4 pode estar próximo a 1 ou 5
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

    if (newI >= 0 && newI < 5 && newJ >= 0 && newJ < 5) {
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
      if (newI >= 0 && newI < 5 && newJ >= 0 && newJ < 5) {
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


