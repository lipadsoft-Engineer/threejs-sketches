// Wormhole imports
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import spline from './spline';


// create a Renderer and set its size
const renderer = new THREE.WebGLRenderer({ antialias: true });

const w = window.innerWidth;
const h = window.innerHeight;
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

// create a Scene
const scene = new THREE.Scene();

// create a Camera and set its position
const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

// apply orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;

// create a line geometry from the spline
const points = spline.getPoints(100);
const geo = new THREE.BufferGeometry().setFromPoints(points);
const mat = new THREE.LineBasicMaterial({
    color: 0x00ff00
});
const line = new THREE.Line(geo, mat);
scene.add(line);



// Define a function to animate and render
function animate(){

    renderer.render(scene, camera);
}
animate();




