import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.160.0/examples/jsm/controls/OrbitControls.js?module';

// Icosahedron I - Try using Normal material mesh
const renderer = new THREE.WebGLRenderer({antialias: true});

const w = window.innerWidth;
const h = window.innerHeight;
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 10; 
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;
const scene = new THREE.Scene();

const control = new OrbitControls(camera, renderer.domElement);

const geo = new THREE.IcosahedronGeometry(1.0, 2);
const mat = new THREE.MeshNormalMaterial(
    { 
        wireframe: true,
    }
);
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

function move() {
    requestAnimationFrame(move);
    mesh.rotation.y += 0.001
    renderer.render(scene, camera);
}
move();


// Icosahedron II - Try using Standard material mesh
const renderer1 = new THREE.WebGLRenderer({antialias: true});

const w1 = window.innerWidth;
const h1 = window.innerHeight;
renderer1.setSize(w1, h1);
document.body.appendChild(renderer1.domElement);

const fov1 = 75;
const aspect1 = w1 / h1;
const near1 = 0.1;
const far1 = 10; 
const camera1 = new THREE.PerspectiveCamera(fov1, aspect1, near1, far1);
camera1.position.z = 2;
const scene1 = new THREE.Scene();

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); 
scene1.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1); 
directionalLight.position.set(1, 1, 1);
scene1.add(directionalLight);

const controls = new OrbitControls(camera1, renderer1.domElement);

const geo1 = new THREE.IcosahedronGeometry(1.0, 2);
const mat1 = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    flatShading: true,
    roughness: 0.8,
    metalness: 0.2,
  });
const mesh1 = new THREE.Mesh(geo1, mat1);
scene1.add(mesh1);

function animate() {
    requestAnimationFrame(animate);
    mesh1.rotation.x += 0.005;
    mesh1.rotation.y += 0.01;
    renderer1.render(scene1, camera1);
}
animate();


// Icosa hedron III - Add a white wireframe mesh with HemisphereLight 
const rendererIII = new THREE.WebGLRenderer({antialias: true});

const wIII = window.innerWidth ;
const hIII = window.innerHeight;
rendererIII.setSize(wIII, hIII);
document.body.appendChild(rendererIII.domElement);

const fovIII = 75;
const aspectIII = wIII / hIII;
const nearIII = 0.1;
const farIII = 10; 
const cameraIII = new THREE.PerspectiveCamera(fovIII, aspectIII, nearIII, farIII);
cameraIII.position.z = 2;

const sceneIII = new THREE.Scene();

const hemiLight = new THREE.HemisphereLight(0x00009a, 0x6b2299);
sceneIII.add(hemiLight);

const geoIII = new THREE.IcosahedronGeometry(1.0, 2);
const matIII = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    flatShading: true,
    roughness: 0.8,
    metalness: 0.2,
  });
const meshIII = new THREE.Mesh(geoIII, matIII);
sceneIII.add(meshIII);

const wireMat = new THREE.MeshBasicMaterial({
    wireframe: true,
})
const wireMesh = new THREE.Mesh(geoIII, wireMat);
sceneIII.add(wireMesh);


function animateIII() {
    requestAnimationFrame(animateIII);
    meshIII.rotation.x += 0.005;
    meshIII.rotation.y += 0.01;
    rendererIII.render(sceneIII, cameraIII);
}
animateIII();