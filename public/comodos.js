// O mundo é formado não apenas pelo que já existe, mas pelo que pode efetivamente existir. -Milton Santos

const tamanho = 8;
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