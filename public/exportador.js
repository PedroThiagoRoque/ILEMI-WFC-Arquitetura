import { DxfWriter, point3d } from "@tarikjabiri/dxf";
import * as THREE from 'three'; //node_modules\@tarikjabiri\dxf\lib\index.d.ts

// Função auxiliar para converter a BufferGeometry Three.js para o formato DXF
function convertBufferGeometryToDXF(geometry) {
    const dxfWriter = new DxfWriter();
    const vertices = geometry.getAttribute('position');
    const faces = geometry.getIndex();

    // Caso tenha faces definidas, usar 3DFACE para representar a geometria
    if (faces !== null) {
        for (let i = 0; i < faces.count; i += 3) {
            // Obtém os índices dos vértices de cada face
            const indices = [faces.getX(i), faces.getX(i + 1), faces.getX(i + 2)];

            // Obtém os vértices usando os índices
            const points = indices.map(index => {
                return point3d(
                    vertices.getX(index),
                    vertices.getY(index),
                    vertices.getZ(index)
                );
            });

            // Adiciona a face ao DXF. Repetir o último ponto para faces planas.
            dxfWriter.add3dFace(points[0], points[1], points[2], points[2]);
        }
    } else {
        // Caso contrário, usar LINHAS para representar a geometria
        // Este exemplo assume que os vértices são pares de pontos de linha
        for (let i = 0; i < vertices.count; i += 6) {
            const start = point3d(vertices.getX(i), vertices.getY(i), vertices.getZ(i));
            const end = point3d(vertices.getX(i + 3), vertices.getY(i + 3), vertices.getZ(i + 3));
            dxfWriter.addLine(start, end);
        }
    }

    return dxfWriter.stringify();
}

// Exemplo de uso
//const geometry = new THREE.BoxGeometry(1, 1, 1); // Substituir por sua própria BufferGeometry
const geometry = new THREE.ConeGeometry(5, 10, 4); // raio, altura, e número de lados na base
geometry.rotateX(Math.PI / 4); // Rotacionar a pirâmide para alinhar um dos cantos com o eixo Y
geometry.scale(2, 2, 2); // Escala
const dxfData = convertBufferGeometryToDXF(geometry);
console.log(dxfData);


/////////////////////////////////////////////

function downloadDXF(content, filename) {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
}

/////////////////////////////////////////////
document.getElementById('exportBtn').addEventListener('click', function() {
    // Exemplo de criação de uma geometria simples Three.js
    //const geometry = new THREE.BoxGeometry(1, 1, 1);

    // Converter BufferGeometry para DXF
    const dxfContent = convertBufferGeometryToDXF(geometry);

    // Iniciar o download do arquivo DXF
    downloadDXF(dxfContent, 'geometria.dxf');
});