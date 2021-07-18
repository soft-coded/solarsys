import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
import { gsap } from "gsap";

import {
  sun,
  merc,
  venus,
  earth,
  mars,
  jupiter,
  saturn,
  uranus,
  neptune
} from "./scene/planets";
import { ambientLight } from "./scene/lights";
import { camera } from "./scene/camera";

/**
 * Base
 */
// Debug
const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Planets
 */
scene.add(sun, merc, venus, earth, mars, jupiter, saturn, uranus, neptune);

/**
 * Lights
 */
scene.add(ambientLight);
// scene.add(pointLight);

/**
 * Resize
 */
window.addEventListener("resize", () => {
  // Update camera
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
scene.add(camera);

/**
 * Controls
 */
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 2;
controls.maxDistance = 40;
// controls.zoomSpeed = 0.3;

const textSection = document.querySelector(".text");
const textNode = textSection.querySelector("h1");
function fadeIn(obj, name, colour) {
  obj.visible = true;
  gsap.to(obj.material, { duration: 0.5, opacity: 1 });
  // controls.enableZoom = false;
  // controls.target = obj.position;

  textNode.textContent = name;
  textNode.style.fontWeight = 400;
  textNode.style.color = colour;
  gsap.to(textSection, { duration: 0.5, display: "block", autoAlpha: 1 });

  setTimeout(() => {
    controls.enableZoom = true;
    gsap.to(textSection, { duration: 0.5, autoAlpha: 0, display: "none" });
  }, 2000);
}

let isAtSun = true,
  visitedMerc = false,
  visitedVenus = false,
  visitedEarth = false,
  visitedMars = false,
  visitedJupiter = false,
  visitedSaturn = false,
  visitedUranus = false,
  visitedNeptune = false,
  camPos;
controls.addEventListener("start", e => {
  camPos = e.target.object.position;
  // console.log(e);
  if (!visitedNeptune && camPos.z > neptune.position.z + 2) {
    fadeIn(neptune, "NEPTUNE", "#3e78ce");
    visitedNeptune = true;
  } else if (!visitedUranus && camPos.z > uranus.position.z + 2) {
    fadeIn(uranus, "URANUS", "#9dcdd4");
    visitedUranus = true;
  } else if (!visitedSaturn && camPos.z > saturn.position.z + 2) {
    fadeIn(saturn, "SATURN", "#fdebce");
    visitedSaturn = true;
  } else if (!visitedJupiter && camPos.z > jupiter.position.z + 2) {
    fadeIn(jupiter, "JUPITER", "#d3c8be");
    visitedJupiter = true;
  } else if (!visitedMars && camPos.z > mars.position.z) {
    fadeIn(mars, "MARS", "#ed703d");
    visitedMars = true;
  } else if (!visitedEarth && camPos.z > earth.position.z) {
    fadeIn(earth, "EARTH", "#1e3b75");
    visitedEarth = true;
  } else if (!visitedVenus && camPos.z > venus.position.z) {
    fadeIn(venus, "VENUS", "#edbb5c");
    visitedVenus = true;
  } else if (!visitedMerc && camPos.z > merc.position.z) {
    fadeIn(merc, "MERCURY", "#8f8f8f");
    visitedMerc = true;
  } else if (isAtSun) {
    gsap.to(textSection, { duration: 0.5, autoAlpha: 0, display: "none" });
    isAtSun = false;
  }
});

// Reset scroll position on refresh
// window.scrollTo(0, 0);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
(function animate() {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
})();
