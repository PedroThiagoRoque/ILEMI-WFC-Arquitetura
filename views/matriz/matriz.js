import * as THREE from 'three';

let grid;
let rules = {
    0: [0, 1, 2, 3, 4, 5, 6],
    1: [0, 1, 2, 3, 4, 5, 6],
    2: [0, 1, 3, 4],
    3: [0, 1, 2, 3, 6],
    4: [0, 1, 2, 4, 5],
    5: [0, 1, 4, 5],
    6: [0, 1, 3]
};


function initializeWFC() {
    grid = createGrid(5, 5);
    renderGrid(grid);
}

function createGrid(rows, cols) {
    let grid = new Array(rows);
    for (let i = 0; i < rows; i++) {
        grid[i] = new Array(cols);
        for (let j = 0; j < cols; j++) {
            grid[i][j] = [0, 1, 2, 3, 4, 5, 6];
        }
    }
    return grid;
}

function renderGrid(grid) {
    let tableHtml = "";
    for(let i = 0; i < grid.length; i++) {
        tableHtml += "<tr>";
        for(let j = 0; j < grid[i].length; j++) {
            const cellValues = grid[i][j];
            let buttonsHtml = cellValues.map(val => `<button onclick="onCellClick(${i}, ${j}, ${val})">${val}</button>`).join("");
            tableHtml += `<td>${buttonsHtml}</td>`;
        }
        tableHtml += "</tr>";
    }
    document.getElementById('grid').innerHTML = tableHtml;
}

function onCellClick(i, j, value) {
    grid[i][j] = [value];
    propagate(i, j, value);
    renderGrid(grid);
}

function propagate(i, j, value) {
    const neighbours = getNeighbours(i, j);
    for(let neighbour of neighbours) {
        let [ni, nj] = neighbour;
        grid[ni][nj] = grid[ni][nj].filter(v => rules[value].includes(v));
        if (grid[ni][nj].length === 0) {
            alert("Configuração inválida! Reiniciando...");
            initializeWFC();
        }
    }
}

function getNeighbours(i, j) {
    let neighbours = [];
    if (i > 0) neighbours.push([i-1, j]);
    if (j > 0) neighbours.push([i, j-1]);
    if (i < 4) neighbours.push([i+1, j]);
    if (j < 4) neighbours.push([i, j+1]);
    return neighbours;
}

//CRIAÇÃO DE SOLUÇÕES ALEATÓRIAS
function collapseRandomCell() {
    // Pega as células não colapsadas e as ordena pelo número de opções restantes
    let openCells = [];
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if (grid[i][j].length > 1) {
                openCells.push({ coords: [i, j], options: grid[i][j].length });
            }
        }
    }

    openCells.sort((a, b) => a.options - b.options);

    if(openCells.length === 0) return false;

    // Escolhe a célula com o menor número de opções
    let [i, j] = openCells[0].coords;

    let possibleValues = grid[i][j];
    let value = possibleValues[Math.floor(Math.random() * possibleValues.length)];

    grid[i][j] = [value];

    // Propaga as restrições
    propagate(i, j, value);

    return true; // Uma célula foi colapsada
}


function generateRandomSolution() {
    initializeWFC(); // Começa com uma grid limpa

    let keepGoing = true;
    while(keepGoing) {
        keepGoing = collapseRandomCell(); // Continua até que todas as células estejam colapsadas ou uma configuração inválida seja atingida
    }

    renderGrid(grid);
}

/*//THREE.JS - CRIAÇÃO DE 3D
function renderScene() {
    // Atribuir cores aos números
    const colors = [null, 'red', 'green', 'blue', 'yellow', 'purple', 'cyan'];

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xFFFFFF); 
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.up.set(0, 0, 1);  // Define a direção 'para cima' da câmera ao longo do eixo x
    //camera.lookAt(0, 0, 0);  // Faz a câmera olhar para o centro da cena
    
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('three-scene').appendChild(renderer.domElement);

    // Adicionar um plano 2D (grid)
    const planeGeometry = new THREE.PlaneGeometry(5, 5);  // Adjust size as needed
    const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x000, side: THREE.DoubleSide });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = Math.PI / 2;  // Rotate the plane to be horizontal
    scene.add(plane);

    // Percorrendo grid para criar cubosComo deixar a renderizaç
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            const cellValue = grid[i][j][0]; // Pegando a primeira (e única) cor de cada célula
            if(cellValue === 0) continue;  // Skip rendering for empty cells
    
            const cubeColor = colors[cellValue];
            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial({ color: cubeColor });
            const cube = new THREE.Mesh(geometry, material);
            cube.position.x = i;
            cube.position.y = j;
            scene.add(cube);

        
            }
    }   

    camera.position.z = 10;

    const animate = function () {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };

    animate();
}*/

let renderer, scene, camera;

function initializeScene() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xFFFFFF);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.up.set(0, 0, 1);
    camera.position.z = 10;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('three-scene').appendChild(renderer.domElement);
}

function clearScene() {
    while(scene.children.length > 0){ 
        scene.remove(scene.children[0]); 
    }
}

function renderScene() {
    clearScene();
    
    // Atribuir cores aos números
    const colors = [null, 'red', 'green', 'blue', 'yellow', 'purple', 'cyan'];

    // Adicionar um plano 2D (grid)
    const planeGeometry = new THREE.PlaneGeometry(5, 5);  // Adjust size as needed
    const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x000, side: THREE.DoubleSide });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = Math.PI / 2;  // Rotate the plane to be horizontal
    scene.add(plane);

    // Percorrendo grid para criar cubosComo deixar a renderizaç
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            const cellValue = grid[i][j][0]; // Pegando a primeira (e única) cor de cada célula
            if(cellValue === 0) continue;  // Skip rendering for empty cells
    
            const cubeColor = colors[cellValue];
            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial({ color: cubeColor });
            const cube = new THREE.Mesh(geometry, material);
            cube.position.x = i;
            cube.position.y = j;
            scene.add(cube);
            }
    }   

    camera.position.z = 10;

    const animate = function () {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };

    animate();
}

// Chame initializeScene uma vez para configurar a cena, a câmera e o renderer
initializeScene();

///////////////////////////////////////////////////////////////////////////////////////////////////
const btnRecomeçar = document.getElementById("Reset");
const btnAleatorio = document.getElementById("Aleatorio");
const btnRender = document.getElementById("Renderizar");

btnRecomeçar.addEventListener("click", initializeWFC);
btnAleatorio.addEventListener("click", generateRandomSolution);
btnRender.addEventListener("click", renderScene);

initializeWFC();

export default function() { initializeWFC, generateRandomSolution, renderScene, collapseRandomCell, getNeighbours, propagate, onCellClick, createGrid, renderGrid, rules, grid };
