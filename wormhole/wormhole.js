// Wormhole imports
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import spline from './spline';


// create a Renderer and set its size
const renderer = new THREE.WebGLRenderer();

const w = window.innerWidth;
const h = window.innerHeight;
renderer.setSize(w, h);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);

// create a Scene
const scene = new THREE.Scene();

// create a Camera and set its position
const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 5;

// apply orbit controls
const control = new OrbitControls(camera, renderer.domElement);
control.enableDamping = true;
control.dampingFactor = 0.03;

// create a line geometry from the spline
const points = spline.getPoints(100);
const geo = new THREE.BufferGeometry().setFromPoints(points);
const mat = new THREE.LineBasicMaterial({
    color: 0xff0000
});
const line = new THREE.Line(geo, mat);
scene.add(line);

// Add hemlight
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
scene.add(hemiLight);



// Define a function to animate and render
function animate(){

    renderer.render(scene, camera);
}
animate();




