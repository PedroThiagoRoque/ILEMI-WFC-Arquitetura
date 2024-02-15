import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as SceneUtils from 'three/addons/utils/SceneUtils.js';
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

    // Calcula o centro da bounding box do modelo
    let boundingBox = new THREE.Box3().setFromObject(model);
    let centro = new THREE.Vector3();
    boundingBox.getCenter(centro);

    // Cria um objeto pivô
    let pivot = new THREE.Object3D();

    // Ajusta a posição do modelo para que o centro esteja na origem do pivô
    model.position.sub(new THREE.Vector3(centro.x, 0, centro.z));
    // Adiciona o modelo ao pivô
    pivot.add(model);
   // Adiciona o pivô ao array blocos
    blocos.push(pivot);
    scene.add(pivot);
    pivot.position.set(70, 50, 0);

    //Parede - bloco[1]
      file = await fetch('../../public/IFC/Parede.ifc');
      data = await file.arrayBuffer();
      buffer = new Uint8Array(data);
      model = await fragmentIfcLoader.load(buffer, "Parede");
    
    // Calcula o centro da bounding box do modelo
    boundingBox = new THREE.Box3().setFromObject(model);
    centro = new THREE.Vector3();
    boundingBox.getCenter(centro);

    // Cria um objeto pivô
    pivot = new THREE.Object3D();

    // Ajusta a posição do modelo para que o centro esteja na origem do pivô
    model.position.sub(new THREE.Vector3(centro.x, 0, centro.z));
    // Adiciona o modelo ao pivô
    pivot.add(model);

    // Adiciona o pivô ao array blocos
    blocos.push(pivot);
    scene.add(pivot);
    pivot.position.set(70, 50, 0);


    //Piso - bloco[2]
    // Carrega a base
    file = await fetch('../../public/IFC/Canto.ifc');
    data = await file.arrayBuffer();
    buffer = new Uint8Array(data);

    // Usando o fragmentIfcLoader para carregar o modelo
    model = await fragmentIfcLoader.load(buffer, "Canto");
    // Calcula o centro da bounding box do modelo
     boundingBox = new THREE.Box3().setFromObject(model);
     centro = new THREE.Vector3();
    boundingBox.getCenter(centro);

    // Cria um objeto pivô
     pivot = new THREE.Object3D();

    // Ajusta a posição do modelo para que o centro esteja na origem do pivô
    model.position.sub(new THREE.Vector3(centro.x, 0, centro.z));
    // Adiciona o modelo ao pivô
    pivot.add(model);

    // Adiciona o pivô ao array blocos
    blocos.push(pivot);
    scene.add(pivot);
    pivot.position.set(70, 50, 0);


    //Porta - bloco[3]
     file = await fetch('../../public/IFC/Porta.ifc');
     data = await file.arrayBuffer();
     buffer = new Uint8Array(data);
     model = await fragmentIfcLoader.load(buffer, "Porta");
     
    // Calcula o centro da bounding box do modelo
     boundingBox = new THREE.Box3().setFromObject(model);
     centro = new THREE.Vector3();
    boundingBox.getCenter(centro);

    // Cria um objeto pivô
     pivot = new THREE.Object3D();

    // Ajusta a posição do modelo para que o centro esteja na origem do pivô
    model.position.sub(new THREE.Vector3(centro.x, 0, centro.z)); //centro
    // Adiciona o modelo ao pivô
    pivot.add(model);

    // Adiciona o pivô ao array blocos
    blocos.push(pivot);
    scene.add(pivot);
    pivot.position.set(70, 50, 0);

    //Janela - bloco[4]
     file = await fetch('../../public/IFC/Janela.ifc');
     data = await file.arrayBuffer();
     buffer = new Uint8Array(data);
     model = await fragmentIfcLoader.load(buffer, "Janela");
    
    // Calcula o centro da bounding box do modelo
     boundingBox = new THREE.Box3().setFromObject(model);
     centro = new THREE.Vector3();
    boundingBox.getCenter(centro);

    // Cria um objeto pivô
     pivot = new THREE.Object3D();

    // Ajusta a posição do modelo para que o centro esteja na origem do pivô
    model.position.sub(new THREE.Vector3(centro.x, 0, centro.z));
    // Adiciona o modelo ao pivô
    pivot.add(model);

    // Adiciona o pivô ao array blocos
    blocos.push(pivot);
    scene.add(pivot);
    pivot.position.set(70, 50, 0);
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


function cloneObjeto(objeto) {
    //Gambiarra braba para funcionar o clone de objetos através da serealização do objeto BIM

    //serialização
    const objectJson = objeto.toJSON(); //pivot.toJSON();
    const newObject = new THREE.ObjectLoader().parse(objectJson);
    return newObject;
}


function criaLayout() {
    matriz = window.grid;
    console.log("objs:", objetos)
    console.log("matriz", matriz);
    objetos.forEach(objeto => {
        // Remove o objeto da cena
        scene.remove(objeto); 
    });

    objetos = []; // Reinicia o vetor de objetos para garantir que está vazio antes de começar
    
    //Zera posições não definidas
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j].length > 1) { // Se a célula tem mais de uma opção, não está colapsada
                matriz[i][j] = [0]; // Colapsar para zero
            }
        }
    }

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
                        
            // Serializa o objeto para JSON
            const objetoJson = blocos[matriz[i][j]].toJSON();
            const stringJson = JSON.stringify(objetoJson);

            // Desserializa o JSON para um novo objeto Three.js
            const objectLoader = new THREE.ObjectLoader();
            const blocoClone = objectLoader.parse(JSON.parse(stringJson));

            console.log("blocoClone", blocoClone);

            // Posiciona o bloco clone de acordo com sua posição na matriz
            
            blocoClone.position.set(j * 2 - (matriz[i].length - 1), 0, i * 2 - (matriz.length - 1));

            // Adiciona o bloco clonado ao vetor de objetos e à cena
            objetos.push(blocoClone);
            scene.add(blocoClone);
        }
    }
}
document.getElementById('criaCena').addEventListener('click', criaLayout);

////////////////////////////////////////////////////////////////////////////////////

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
        console.log('Clicado bloco', intersects[0]);
        //intersects[0].object.rotation.y += Math.PI / 2; // Math.PI / 2 radianos é igual a 90 graus

        intersects[0].object.parent.parent.rotation.y += Math.PI / 2; // 90 graus em radianos

        }
            
});

// 6. Função de animação
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// 7. Posicionar a câmera e iniciar a animação
animate();
