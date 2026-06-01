import * as THREE from 'three';

const scene = new THREE.Scene();

const camera =
    new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

const renderer =
    new THREE.WebGLRenderer();

renderer.setSize(
    300,
    300
);

document.body.appendChild(
    renderer.domElement
);

camera.position.z = 5;

const geometry =
    new THREE.BoxGeometry();

const material =
    new THREE.MeshBasicMaterial({
        wireframe: true
    });

const cube =
    new THREE.Mesh(
        geometry,
        material
    );

scene.add(cube);

renderer.render(
    scene,
    camera
);