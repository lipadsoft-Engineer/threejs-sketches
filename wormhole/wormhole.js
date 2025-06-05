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
scene.fog = new THREE.FogExp2(0x000000, 0.4);

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
const tubeMat = new THREE.MeshBasicMaterial({
    color: 0x0099ff, 
    side: THREE.DoubleSide,
    wireframe: true
});
const tube = new THREE.Mesh(tubeGeo, tubeMat);
// scene.add(tube);

// Edges geometry
const edgeGeo = new THREE.EdgesGeometry(tubeGeo, 0.05);
const lineMat = new THREE.LineBasicMaterial({color: 0xffffff});
const tubeLine = new THREE.LineSegments(edgeGeo, lineMat);
scene.add(tubeLine);


// update camera for fly thru animation
function updateCamera(t){
    const time = t * 0.05;
    const loopTime = 10 * 1000;
    const point = ( time % loopTime) / loopTime;
    const pos = tubeGeo.parameters.path.getPointAt(point);
    const lookAt = tubeGeo.parameters.path.getPointAt((point + 0.03) % 1);
    camera.position.copy(pos);
    camera.lookAt(lookAt);
}


// Boxes along the path
const numBoxes = 55;
const size = 0.075;
const boxGeo = new THREE.BoxGeometry(size, size, size);
for (let i = 0; i < numBoxes; i += 1){

}


// function to animate and render
function animate(t = 0){
    requestAnimationFrame(animate);
    updateCamera(t);
    renderer.render(scene, camera);
    control.update();
}
animate();




