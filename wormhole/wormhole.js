// Wormhole imports
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

// create a Renderer and set its size
const renderer = new THREE.WebGLRenderer({ antialias: true });

const w = window.innerWidth;
const h = window.innerHeight;
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

// create a Camera and set its position
const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

// apply orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

// create a Scene
const scene = new THREE.Scene();




