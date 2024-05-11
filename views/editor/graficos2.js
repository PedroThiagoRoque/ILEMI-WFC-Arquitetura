import * as THREE from 'three';
import * as OBC from '../../public/openbim-components.js'
import { OBJExporter } from 'three/examples/jsm/exporters/OBJExporter.js';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';



//Importando a matriz de representação do layout
//let matriz = window.grid; 
let matriz = window.grid
//0. Importando modelos com OpenBim Components
let blocos = [];
let objetos = [];
let modelID=0;
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
components.renderer = new OBC.PostproductionRenderer(components, containerCena);
components.camera = new OBC.SimpleCamera(components);
components.raycaster = new OBC.SimpleRaycaster(components);

components.init();

let fragments = new OBC.FragmentManager(components);
let fragmentIfcLoader = new OBC.FragmentIfcLoader(components);

async function  Init() {
    //configura fragment
    

    
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

components.renderer.postproduction.enabled = true;
const postproduction = components.renderer.postproduction;
const custompass = postproduction.newCustomPass(scene, camera);
//postproduction.setPasses(custompass); //outline


Init();

////////////////////////////////////////////////////////////////////////////////////
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

    const novoMaterial = new THREE.MeshStandardMaterial({ color: 0xbcbcbc }); // Cinza claro

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
                        
            // Serializa o objeto para JSON
            const objetoJson = blocos[matriz[i][j]].toJSON();
            const stringJson = JSON.stringify(objetoJson);

            // Desserializa o JSON para um novo objeto Three.js
            const objectLoader = new THREE.ObjectLoader();
            const blocoClone = objectLoader.parse(JSON.parse(stringJson));

            // Posiciona o bloco clone de acordo com sua posição na matriz
            blocoClone.position.set(j - Math.floor(matriz[i].length / 2), 0, i - Math.floor(matriz.length / 2));
            blocoClone.name = "bloco" + i + j;
                        
            // Adiciona o bloco clonado ao vetor de objetos e à cena
            objetos.push(blocoClone);
            scene.add(blocoClone);
        
        }
    }
    
        
}
document.getElementById('criaCena').addEventListener('click', criaLayout);


////////////////////////////////////////////////////////////////////////////////////

//Adicionar Raycaster e Mouse - Clicando objetos na cena
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

        intersects[0].object.parent.parent.rotation.y += Math.PI / 2; // 90 graus em radianos
        modelID = intersects[0].object.id;
        }
            
});

////////////////////////////////////////////////////////////////////////////////////
//Highlight no hover do mouse

const greenMaterial = new THREE.MeshStandardMaterial({ color: '#BCF124' });
let previousSelection;
let materialFilhos = [];

window.onmousemove = () => {
    const result = components.raycaster.castRay(objetos);

    if (!result) {
        if (previousSelection) {
            // Restaura os materiais dos irmãos anteriores
            previousSelection.parent.children.forEach((child, index) => {
                if (materialFilhos[index]) {
                    child.material = materialFilhos[index];
                }
            });
            materialFilhos = []; // Limpa o array após a restauração
        }
        return;
    }

    if (previousSelection) {
        // Restaura os materiais dos irmãos anteriores
        previousSelection.parent.children.forEach((child, index) => {
            if (materialFilhos[index]) {
                child.material = materialFilhos[index];
            }
        });
        materialFilhos = []; // Limpa o array após a restauração
    }

    // Salva os materiais originais dos irmãos do objeto atual
    result.object.parent.children.forEach((child) => {
        materialFilhos.push(child.material);
    });

    // Aplica o material verde ao objeto atual e aos seus irmãos
    result.object.parent.children.forEach((child) => {
        child.material = greenMaterial;
        child.material.side = THREE.DoubleSide;
        child.material.needsUpdate = true;
    });

    previousSelection = result.object;
};

////////////////////////////////////////////////////////////////////////////////////
function exportGLTF( input ) {

    const gltfExporter = new GLTFExporter();
    const params = {
        trs: true,
        onlyVisible: true,
        binary: false,
        maxTextureSize: 4096
    };

    const options = {
        trs: params.trs,
        onlyVisible: params.onlyVisible,
        binary: params.binary,
        maxTextureSize: params.maxTextureSize
    };
    gltfExporter.parse(
        input,
        function ( result ) {

            if ( result instanceof ArrayBuffer ) {
                saveArrayBuffer( result, 'scene.glb' );
            } else {
                const output = JSON.stringify( result, null, 2 );
                console.log( output );
                saveString( output, 'scene.gltf' );
            }

        },
        function ( error ) {
            console.log( 'An error happened during parsing', error );
        },
        options
    );

}

const link = document.createElement( 'a' );
link.style.display = 'none';
document.body.appendChild( link ); // Firefox workaround, see #6594

function save( blob, filename ) {

    link.href = URL.createObjectURL( blob );
    link.download = filename;
    link.click();

    // URL.revokeObjectURL( url ); breaks Firefox...

}

function saveString( text, filename ) {
    save( new Blob( [ text ], { type: 'text/plain' } ), filename );
}


function saveArrayBuffer( buffer, filename ) {
    save( new Blob( [ buffer ], { type: 'application/octet-stream' } ), filename );
}

document.getElementById('exportaModelo').addEventListener('click', () => { 
    exportGLTF(components.scene.get());
});

////////////////////////////////////////////////////////////////////////////////////
// 6. Função de animação
function animate() {
    requestAnimationFrame(animate);
    //renderer.render(scene, camera);
}

// 7. Posicionar a câmera e iniciar a animação
animate();
