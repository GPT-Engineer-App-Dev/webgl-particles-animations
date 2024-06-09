import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const AnimationCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    const ducks = [];
    const numDucks = 10;

    loader.load("/models/duck/scene.gltf", (gltf) => {
      for (let i = 0; i < numDucks; i++) {
        const duck = gltf.scene.clone();
        duck.position.set(
          Math.random() * 20 - 10,
          Math.random() * 20 - 10,
          Math.random() * 20 - 10
        );
        duck.velocity = new THREE.Vector3(
          Math.random() * 0.1 - 0.05,
          Math.random() * 0.1 - 0.05,
          Math.random() * 0.1 - 0.05
        );
        scene.add(duck);
        ducks.push(duck);
      }
    });

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);

      ducks.forEach((duck) => {
        duck.position.add(duck.velocity);

        if (duck.position.x > 10 || duck.position.x < -10) duck.velocity.x = -duck.velocity.x;
        if (duck.position.y > 10 || duck.position.y < -10) duck.velocity.y = -duck.velocity.y;
        if (duck.position.z > 10 || duck.position.z < -10) duck.velocity.z = -duck.velocity.z;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

export default AnimationCanvas;