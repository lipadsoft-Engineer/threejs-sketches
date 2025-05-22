console.log("Hello, Icosahedron!");
import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer({antialias: true});

const w = window.innerWidth;
const h = window.innerHeight;
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

