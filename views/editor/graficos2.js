import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as OBC from '../../public/openbim-components.js'

//Importando a matriz de representação do layout
let matriz = window.grid; 


//0. Importando modelos com OpenBim Components
let blocos = [];
let objetos = [];

async function carregaModelos(blocos, fragmentIfcLoader){

    //Base - bloco[0]
    let file = await fetch('../../public/IFC/Base.ifc');
    let data = await file.arrayBuffer();
    let buffer = new Uint8Array(data);
    let model = await fragmentIfcLoader.load(buffer, "Base");

    blocos.push(model);

    //Parede - bloco[1]
      file = await fetch('../../public/IFC/Parede.ifc');
      data = await file.arrayBuffer();
      buffer = new Uint8Array(data);
      model = await fragmentIfcLoader.load(buffer, "Parede");
    blocos.push(model);

    //Canto -bloco[2]
    file = await fetch('../../public/IFC/Canto.ifc');
     data = await file.arrayBuffer();
     buffer = new Uint8Array(data);
     model = await fragmentIfcLoader.load(buffer, "Canto");
    blocos.push(model);
    
    //Porta - bloco[3]
     file = await fetch('../../public/IFC/Porta.ifc');
     data = await file.arrayBuffer();
     buffer = new Uint8Array(data);
     model = await fragmentIfcLoader.load(buffer, "Porta");
    blocos.push(model);

    //Janela - bloco[4]
     file = await fetch('../../public/IFC/Janela.ifc');
     data = await file.arrayBuffer();
     buffer = new Uint8Array(data);
     model = await fragmentIfcLoader.load(buffer, "Janela");
    blocos.push(model);

}

async function  Init() {
    const components = new OBC.Components();
    components._renderer = new OBC.SimpleRenderer(components, containerCena);

    components.init();

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
    await carregaModelos(blocos, fragmentIfcLoader);
    console.log(blocos);
}


// 1. Inicializações básicas
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(400, 400); // Definir tamanho do renderizador para 400x400 pixels

// Selecionar o elemento div com id 'containerCena' e anexar o renderer a ele
const containerCena = document.getElementById('containerCena');
containerCena.appendChild(renderer.domElement);

// Adicionar o estilo para alinhar o canvas do renderizador
renderer.domElement.style.display = 'block';
renderer.domElement.style.margin = 'auto';
renderer.setClearColor(0xf0f0f0); // Cor cinza claro em hexadecimal
renderer.shadowMap.enabled = true; // Habilita o cálculo de sombras
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Tipo de sombreamento que pode ser mais suave

// Adicionando luz ambiente
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // cor branca, intensidade de 0.5
scene.add(ambientLight);

// Adicionando luz direcional
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7); // cor branca, intensidade de 1
directionalLight.position.set(5, 10, 7.5); // A posição depende do seu caso de uso
// posição da luz direcional
directionalLight.castShadow = true; // Habilita o lançamento de sombras pela luz

// Configuração adicional para refinar as sombras
directionalLight.shadow.mapSize.width = 128; // Resolução da textura de sombra
directionalLight.shadow.mapSize.height = 128;
directionalLight.shadow.camera.near = 0.5; // Câmera de sombra próxima
directionalLight.shadow.camera.far = 50; // Câmera de sombra distante

scene.add(directionalLight);

// Ajustar a câmera
camera.aspect = 1; // Manter a proporção quadrada
camera.updateProjectionMatrix(); // Atualizar a matriz de projeção da câmera
camera.position.z = 5; // Posicionar a câmera

//Inicia a importação
Init();

// 2. Adicionando Controle Orbital
const controls = new OrbitControls(camera, renderer.domElement);
   
// Ajustes opcionais nos controles
controls.minDistance = 1;
controls.maxDistance = 10;
controls.enablePan = true;
controls.enableDamping = true; // Opcional: para um efeito mais suave
controls.dampingFactor = 0.05;

// 3. Criar e adicionar cubos à cena
/*
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 }); //Phong aceita sombras
const cubes = [];

for (let i = 0; i < 3; i++) {
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = i * 2 - 2; // Posiciona os cubos lado a lado
    cube.castShadow = true; // O cubo lança sombras
    cube.receiveShadow = true; // O cubo recebe sombras
    scene.add(cube);
    cubes.push(cube);
}
*/

// 4. Adicionar Raycaster e Mouse - Clicando objetos na cena
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Função para converter coordenadas do clique do mouse para o espaço de coordenadas normalizado do Three.js (-1 a 1)
function getMousePos(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    return {
        x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
        y: - ((event.clientY - rect.top) / rect.height) * 2 + 1
    };
}

// Event listener para cliques no elemento do renderizador
renderer.domElement.addEventListener('click', (event) => {
    event.preventDefault();
    
    // Atualiza a posição do mouse usando a nova função getMousePos
    const pos = getMousePos(event);
    mouse.x = pos.x;
    mouse.y = pos.y;

    // Atualizar o raycaster com a posição do mouse e a câmera
    raycaster.setFromCamera(mouse, camera);

    // Calcular objetos que interceptam o raio lançado
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
        console.log('Clicado cubo', intersects);
        // Outras ações baseadas na interseção podem ser adicionadas aqui
    }
});

// 6. Função de animação para girar os cubos
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

// 7. Posicionar a câmera e iniciar a animação
camera.position.z = 5;
animate();
