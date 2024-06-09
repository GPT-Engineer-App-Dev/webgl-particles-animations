import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const AnimationCanvas = ({ animationType, color }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const geometry = animationType === "particles" ? new THREE.BufferGeometry() : new THREE.CircleGeometry(5, 32);
    const material = new THREE.PointsMaterial({ color: color });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    camera.position.z = 5;

    const mouse = new THREE.Vector2();
    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMouseMove);

    const animate = function () {
      requestAnimationFrame(animate);
      points.rotation.x += 0.01;
      points.rotation.y += 0.01;

      points.position.x = mouse.x * 5;
      points.position.y = mouse.y * 5;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      mount.removeChild(renderer.domElement);
    };
  }, [animationType, color]);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

export default AnimationCanvas;