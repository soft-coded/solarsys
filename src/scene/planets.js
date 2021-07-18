import * as THREE from "three";

import {
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
} from "./textures";

// Meshes
const sphereGeom = new THREE.SphereBufferGeometry(1, 64, 64);

const sun = new THREE.Mesh(
  sphereGeom,
  new THREE.MeshStandardMaterial({ map: sunText, transparent: true })
);

const merc = new THREE.Mesh(
  sphereGeom,
  new THREE.MeshStandardMaterial({
    map: mercText,
    transparent: true,
    opacity: 0
  })
);
merc.scale.set(0.01, 0.01, 0.01);
merc.position.z = 4;
merc.visible = false;

const venus = new THREE.Mesh(
  sphereGeom,
  new THREE.MeshStandardMaterial({
    map: venusText,
    transparent: true,
    opacity: 0
  })
);
venus.scale.set(0.09, 0.09, 0.09);
venus.position.z = 8;
venus.visible = false;

const earth = new THREE.Mesh(
  sphereGeom,
  new THREE.MeshStandardMaterial({
    map: earthText,
    transparent: true,
    opacity: 0
  })
);
earth.scale.set(0.1, 0.1, 0.1);
earth.position.z = 12;
earth.visible = false;

const mars = new THREE.Mesh(
  sphereGeom,
  new THREE.MeshStandardMaterial({
    map: marsText,
    transparent: true,
    opacity: 0
  })
);
mars.scale.set(0.07, 0.07, 0.07);
mars.position.z = 16;
mars.visible = false;

const jupiter = new THREE.Mesh(
  sphereGeom,
  new THREE.MeshStandardMaterial({
    map: jupiterText,
    transparent: true,
    opacity: 0
  })
);
jupiter.scale.set(0.9, 0.9, 0.9);
jupiter.position.z = 20;
jupiter.visible = false;

const saturn = new THREE.Mesh(
  sphereGeom,
  new THREE.MeshStandardMaterial({
    map: saturnText,
    transparent: true,
    opacity: 0
  })
);
saturn.scale.set(0.88, 0.88, 0.88);
saturn.position.z = 24;
saturn.visible = false;
const saturnRing = new THREE.Mesh(
  new THREE.RingBufferGeometry(1.2, 1.7, 50),
  new THREE.MeshStandardMaterial({
    color: "grey",
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0
  })
);
saturnRing.rotation.x = Math.PI / 2 + 0.1;
saturn.add(saturnRing);

const uranus = new THREE.Mesh(
  sphereGeom,
  new THREE.MeshStandardMaterial({
    map: uranusText,
    transparent: true,
    opacity: 0
  })
);
uranus.scale.set(0.8, 0.8, 0.8);
uranus.position.z = 28;
uranus.visible = false;

const neptune = new THREE.Mesh(
  sphereGeom,
  new THREE.MeshStandardMaterial({
    map: neptuneText,
    transparent: true,
    opacity: 0
  })
);
neptune.scale.set(0.8, 0.8, 0.8);
neptune.position.z = 32;
neptune.visible = false;

export { sun, merc, venus, earth, mars, jupiter, saturn, uranus, neptune };
