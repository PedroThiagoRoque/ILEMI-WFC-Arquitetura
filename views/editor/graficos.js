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

let scene;
let camera; 
let renderer;
let raycaster;


const container = document.getElementById('containerCena');
let comodos = [];

// Inicializa os componentes básico da cena com OpenBIM Components
    const components = new OBC.Components();
        
    components.scene = new OBC.SimpleScene(components);
    components._renderer = new OBC.SimpleRenderer(components, container);
    components.camera = new OBC.SimpleCamera(components);
    components.raycaster = new OBC.SimpleRaycaster(components);
    
    components.init();

/////////////////////////////////////////////////////////////////////////////////////

async function  Init() {
    //const grid = new OBC.SimpleGrid(components);
    scene = components.scene.get();
    camera = components.camera.get();
    renderer = components._renderer.get();
    raycaster = components.raycaster.get();
    
    components.scene.setup();
    
    //configura fragment
    
    let fragments = new OBC.FragmentManager(components);
    let fragmentIfcLoader = new OBC.FragmentIfcLoader(components);
    
    fragmentIfcLoader.settings.wasm = {
        path: "https://unpkg.com/web-ifc@0.0.46/",
        absolute: true
        }
    
    fragmentIfcLoader.settings.webIfc.COORDINATE_TO_ORIGIN = true;
    fragmentIfcLoader.settings.webIfc.OPTIMIZE_PROFILES = true;
    
    /*Carregamento dos modelos*/
    await carregaModelos(comodos, fragmentIfcLoader);
    console.log(comodos);
    }

/////////////////////////////////////////////////////////////////////////////////////

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

       // Adicionando luz ambiente
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // cor branca, intensidade de 0.5
        scene.add(ambientLight);

        // Adicionando luz direcional
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // cor branca, intensidade de 1
        directionalLight.position.set(1, 1, 1); // posição da luz direcional
        scene.add(directionalLight);
        
       const size = 5;
       const divisions = 5;
       const gridHelper = new THREE.GridHelper(size, divisions);
       scene.add(gridHelper);

        let currentX = 0;
        let currentZ = 0;
        let nextRowZ = 0;

        for (let i = 0; i < matriz.length; i++) {
            currentX = 0; // Reiniciar a posição X para cada nova linha
            for (let j = 0; j < matriz[i].length; j++) {
                const comodo = comodos[matriz[i][j]]; // Clonar o objeto para uso
                const bounds = comodo.boundingBox;
        
                // Calcular largura e profundidade do comodo baseado na bounding box
                const width = bounds.max.x - bounds.min.x;
                const depth = bounds.max.z - bounds.min.z;
        
                // Posicionar o comodo
                comodo.position.set(currentX + width / 2, 0, currentZ + depth / 2);
                //gambiarra braba
                const objectJson = comodo.toJSON();
                const newObject = new THREE.ObjectLoader().parse(objectJson);
                scene.add(newObject); //adiciona o comodo na cena

                const boxHelper = new THREE.BoxHelper(comodo, 0x00ff00); // Usando cor verde para a bounding box
                scene.add(boxHelper);

                // Atualizar a posição X para o próximo comodo na linha
                currentX += width;
        
                // Atualizar nextRowZ com a profundidade do comodo se for maior que o valor atual
                nextRowZ = Math.max(nextRowZ, depth);
            }
        
            // Ao final de cada linha, atualizar currentZ para a próxima linha e resetar nextRowZ
            currentZ += nextRowZ;
            nextRowZ = 0;
        }

       
       camera.position.z = 10;
       const animate = function () {
           requestAnimationFrame(animate);
           controls.update();
           renderer.render(scene, camera);
       };
       animate(); 
   
}

document.getElementById('criaCena').addEventListener('click', createScene);


/////////////////////////////////////////////////////////////////////////////////////

async function carregaModelos(comodos, fragmentIfcLoader){
    
    //Banheiro - comodo[0]
     let file = await fetch('../../public/IFC/Banheiro01.ifc');
     let data = await file.arrayBuffer();
     let buffer = new Uint8Array(data);
     let model = await fragmentIfcLoader.load(buffer, "Banheiro");
    comodos.push(model);

    //Cozinha -comodo[1]
     file = await fetch('../../public/IFC/Cozinha01.ifc');
     data = await file.arrayBuffer();
     buffer = new Uint8Array(data);
     model = await fragmentIfcLoader.load(buffer, "Cozinha");
    comodos.push(model);
    
    //Sala - comodo[2]
     file = await fetch('../../public/IFC/Sala01.ifc');
     data = await file.arrayBuffer();
     buffer = new Uint8Array(data);
     model = await fragmentIfcLoader.load(buffer, "Sala");
    comodos.push(model);

    //Quarto - comodo[3]
     file = await fetch('../../public/IFC/Quarto01.ifc');
     data = await file.arrayBuffer();
     buffer = new Uint8Array(data);
     model = await fragmentIfcLoader.load(buffer, "Quarto");
    comodos.push(model);

}

///////////////////////////////////////////////////////////////////////////////////






//Cria a cena e carrega os modelos para o array Cômodos
Init();