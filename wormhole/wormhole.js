// Wormhole imports
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import spline from './spline';
import { texture3D } from 'three/tsl';


// Renderer and set its size
const renderer = new THREE.WebGLRenderer();

const w = window.innerWidth;
const h = window.innerHeight;
renderer.setSize(w, h);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);

// create a Scene
const scene = new THREE.Scene();

// Camera and set its position
const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 5;

// applying orbit controls
const control = new OrbitControls(camera, renderer.domElement);
control.enableDamping = true;
control.dampingFactor = 0.03;

// line geometry from the spline
const points = spline.getPoints(100);
const geo = new THREE.BufferGeometry().setFromPoints(points);
const mat = new THREE.LineBasicMaterial({
    color: 0xff0000
});
const line = new THREE.Line(geo, mat);

// tube geometry from the spline
const tubeGeo = new THREE.TubeGeometry(spline, 222, 0.5, 16, texture3D);
const tubeMat = new THREE.MeshStandardMaterial({
    color: 0x0099ff, 
    side: THREE.DoubleSide,
    wireframe: true
});
const tube = new THREE.Mesh(tubeGeo, tubeMat);
scene.add(tube);

// hemlight
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
scene.add(hemiLight);


// function to update camera for fly thru animation


// function to animate and render
function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();




