import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as OBC from '../../public/openbim-components.js'

//Importando a matriz de representação do layout
let matriz = window.grid; 


//0. Importando modelos com OpenBim Components
let blocos = [];
let objetos = [];
const containerCena = document.getElementById('containerCena');

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
     console.log("Janela:", model)
    blocos.push(model);

}

const components = new OBC.Components();

components.scene = new OBC.SimpleScene(components);
components.renderer = new OBC.SimpleRenderer(components, containerCena);
components.camera = new OBC.SimpleCamera(components);
components.raycaster = new OBC.SimpleRaycaster(components);

components.init();

async function  Init() {
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
    console.log("blocos", blocos);
}


// 1. Inicializações básicas
const scene = components.scene.get();
let camera = components.camera.get(); 
let renderer = components.renderer.get();

components.scene.setup();

renderer.setSize(400,400);
// Adicionar o estilo para alinhar o canvas do renderizador
renderer.domElement.style.display = 'block';
renderer.domElement.style.margin = 'auto';

// Ajustar a câmera
camera.aspect = 1; // Manter a proporção quadrada
camera.updateProjectionMatrix(); // Atualizar a matriz de projeção da câmera
camera.position.z = 5; // Posicionar a câmera

//Inicia a importação de blocos
Init();

// 3. Criar e adicionar cubos à cena
function  criaLayout() {
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 }); //Phong aceita sombras
const cubes = [];

for (let i = 0; i < 5; i++) {
    /*
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = i * 2 - 2; // Posiciona os cubos lado a lado
    cube.castShadow = true; // O cubo lança sombras
    cube.receiveShadow = true; // O cubo recebe sombras
    cube.updateMatrixWorld(true);
    scene.add(cube); 
    */

    blocos[i].position.x = i * 2 - 2;
    scene.add(blocos[i]);
    
    }
}
document.getElementById('criaCena').addEventListener('click', criaLayout);


// 4. Adicionar Raycaster e Mouse - Clicando objetos na cena
const raycaster = components.raycaster.get();
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
        console.log('Clicado cubo', intersects[0]);
        // Outras ações baseadas na interseção podem ser adicionadas aqui
    }
});

// 6. Função de animação
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// 7. Posicionar a câmera e iniciar a animação
animate();
