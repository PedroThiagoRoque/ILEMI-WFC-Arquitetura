import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as OBC from '../../public/openbim-components.js'

let matriz = window.grid;

const roomColors = {
    0: 0xcccccc, // Branco para vazio
    1: 0xd90429, // Vermelho para quarto
    2: 0x4f772d, // Verde para sala
    3: 0x00b4d8, //azul
    4: 0xffbe0b, //amarelo
    5: 0x390099, //roxo
    6: 0xee2677, //rosa
};

/*function createScene (){
    function  createScene() {

        for (let i = 0; i < grid.length; i++) {
           for (let j = 0; j < grid[i].length; j++) {
               if (grid[i][j].length > 1) { // Se a célula tem mais de uma opção, não está colapsada
                   grid[i][j] = [0]; // Colapsar para zero
               }
           }
       }
   
       const scene = new THREE.Scene();
       const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        // Obter o container
        const container = document.getElementById('containerCena');
        while (container.firstChild) {
            container.removeChild(container.firstChild); // Limpar cena anterior
        }
    
        const renderer = new THREE.WebGLRenderer();
        const vhToPixels = (vh) => (window.innerHeight * vh) / 100;
        renderer.setSize(container.clientWidth - 15, vhToPixels(40));
        renderer.setClearColor(0xf0f0f0); // Cor cinza claro em hexadecimal
   
        container.appendChild(renderer.domElement); // Adicionar renderer ao container
   
       // Adicionando OrbitControls
       const controls = new OrbitControls(camera, renderer.domElement);
   
       // Ajustes opcionais nos controles
       controls.minDistance = 1;
       controls.maxDistance = 10;
       controls.enablePan = true;
       controls.enableDamping = true; // Opcional: para um efeito mais suave
       controls.dampingFactor = 0.05;
       
       const size = 5;
       const divisions = 5;
       const gridHelper = new THREE.GridHelper(size, divisions);
       scene.add(gridHelper);
       
       const cubeSize = size / divisions;
       for (let i = 0; i < matriz.length; i++) {
           for (let j = 0; j < matriz[i].length; j++) {
               const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
               const cubeMaterial = new THREE.MeshBasicMaterial({ color: roomColors[matriz[i][j]] });
               const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
   
               // Criar a geometria das bordas
               const edges = new THREE.EdgesGeometry(cubeGeometry);
               const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000000 }));
               cube.add(line); // Adiciona as bordas ao cubo
   
               cube.position.set(i - size / 2 + cubeSize / 2, cubeSize / 2, (matriz.length - 1 - j) - size / 2 + cubeSize / 2);
   
               scene.add(cube);
           }
       }
       
       camera.position.z = 10;
       const animate = function () {
           requestAnimationFrame(animate);
           controls.update();
           renderer.render(scene, camera);
       };
       animate(); 
   
}*/

async function  createScene() {

const container = document.getElementById('containerCena');

// Initialize the basic components needed to use this library

const components = new OBC.Components();
components.scene = new OBC.SimpleScene(components);
components._renderer = new OBC.SimpleRenderer(components, container);
components.camera = new OBC.SimpleCamera(components);
components.raycaster = new OBC.SimpleRaycaster(components);
components.init();

const scene = components.scene.get();
const renderer = components.renderer.get();


components.scene.setup();
renderer.setClearColor(0xf0f0f0); // Cor cinza claro em hexadecimal
//carrega ifc
//configura fragment

let fragments = new OBC.FragmentManager(components);
let fragmentIfcLoader = new OBC.FragmentIfcLoader(components);

fragmentIfcLoader.settings.wasm = {
    path: "https://unpkg.com/web-ifc@0.0.46/",
    absolute: true
    }

fragmentIfcLoader.settings.webIfc.COORDINATE_TO_ORIGIN = true;
fragmentIfcLoader.settings.webIfc.OPTIMIZE_PROFILES = true;

const file = await fetch('../../public/Casa 20203.ifc');
    const data = await file.arrayBuffer();
    const buffer = new Uint8Array(data);
    const model = await fragmentIfcLoader.load(buffer, "example");
    scene.add(model);
}

document.getElementById('criaCena').addEventListener('click', createScene);
