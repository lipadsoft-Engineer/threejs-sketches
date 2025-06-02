// Wormhole imports
import * as THREE from 'three';

// create a Renderer and set its size
const renderer = new THREE.WebGLRenderer({ antialias: true });

const w = window.innerWidth;
const h = window.innerHeight;
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);






