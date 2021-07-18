import * as THREE from "three";

const tl = new THREE.TextureLoader();

const sunText = tl.load("/planet textures/sun.jpg");
const mercText = tl.load("/planet textures/mercury.jpg");
const venusText = tl.load("/planet textures/venus.jpg");
const earthText = tl.load("/planet textures/earth.jpg");
const marsText = tl.load("/planet textures/mars.jpg");
const jupiterText = tl.load("/planet textures/jupiter.jpg");
const saturnText = tl.load("/planet textures/saturn.jpg");
const saturnRingsText = tl.load("/planet textures/saturn rings.png");
const uranusText = tl.load("/planet textures/uranus.jpg");
const neptuneText = tl.load("/planet textures/neptune.jpg");

export {
  sunText,
  mercText,
  venusText,
  earthText,
  marsText,
  jupiterText,
  saturnText,
  saturnRingsText,
  uranusText,
  neptuneText
};
