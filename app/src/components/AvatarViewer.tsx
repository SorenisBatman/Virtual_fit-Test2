
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { useMeasurements } from '@/contexts/MeasurementContext';

function buildUpgradedSmoothAvatar(measurements: any): THREE.Group {
  const avatar = new THREE.Group();
  const skin = new THREE.MeshStandardMaterial({ color: 0xd9b99b, flatShading: false });

  const height = measurements?.height || 170;
  const chest = measurements?.chest || 95;
  const waist = measurements?.waist || 80;
  const hips = measurements?.hips || 90;
  const inseam = measurements?.inseam || 80;
  const shoulderWidth = measurements?.shoulderWidth || 45;
  const neck = measurements?.neck || 38;
  const bicep = measurements?.bicep || 32;
  const forearm = measurements?.forearm || 28;
  const thigh = measurements?.thigh || 55;
  const calf = measurements?.calf || 38;

  const scale = height / 170;
  const chestRad = (chest / 100) * 0.23;
  const waistRad = (waist / 100) * 0.19;
  const hipRad = (hips / 100) * 0.20;
  const shoulderX = (shoulderWidth / 100) * 0.35;

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.15 * scale, 32, 32), skin);
  head.position.set(0, 1.75 * scale, 0);
  avatar.add(head);

  const neckMesh = new THREE.Mesh(new THREE.CapsuleGeometry((neck / 100) * 0.12, 0.05 * scale, 8, 16), skin);
  neckMesh.position.set(0, 1.65 * scale, 0);
  avatar.add(neckMesh);

  const upperChest = new THREE.Mesh(new THREE.CapsuleGeometry(chestRad, 0.2 * scale, 8, 16), skin);
  upperChest.position.set(0, 1.45 * scale, 0);
  avatar.add(upperChest);

  const midTorso = new THREE.Mesh(new THREE.CylinderGeometry(waistRad, chestRad, 0.25 * scale, 24), skin);
  midTorso.position.set(0, 1.2 * scale, 0);
  avatar.add(midTorso);

  const pelvis = new THREE.Mesh(new THREE.CapsuleGeometry(hipRad, 0.15 * scale, 8, 16), skin);
  pelvis.position.set(0, 0.95 * scale, 0);
  avatar.add(pelvis);

  const shoulderL = new THREE.Mesh(new THREE.SphereGeometry(0.09 * scale, 16, 16), skin);
  shoulderL.position.set(-shoulderX, 1.45 * scale, 0);
  const shoulderR = shoulderL.clone(); shoulderR.position.x = shoulderX;
  avatar.add(shoulderL, shoulderR);

  const upperArmL = new THREE.Mesh(new THREE.CapsuleGeometry((bicep / 100) * 0.2, 0.25 * scale, 8, 16), skin);
  upperArmL.rotation.z = Math.PI / 2;
  upperArmL.position.set(-shoulderX - 0.2 * scale, 1.45 * scale, 0);
  const upperArmR = upperArmL.clone(); upperArmR.position.x = shoulderX + 0.2 * scale;
  avatar.add(upperArmL, upperArmR);

  const forearmL = new THREE.Mesh(new THREE.CapsuleGeometry((forearm / 100) * 0.18, 0.23 * scale, 8, 16), skin);
  forearmL.rotation.z = Math.PI / 2;
  forearmL.position.set(-shoulderX - 0.45 * scale, 1.45 * scale, 0);
  const forearmR = forearmL.clone(); forearmR.position.x = shoulderX + 0.45 * scale;
  avatar.add(forearmL, forearmR);

  const hipJointL = new THREE.Mesh(new THREE.SphereGeometry(0.09 * scale, 16, 16), skin);
  hipJointL.position.set(-0.14 * scale, 0.82 * scale, 0);
  const hipJointR = hipJointL.clone(); hipJointR.position.x = 0.14 * scale;
  avatar.add(hipJointL, hipJointR);

  const thighL = new THREE.Mesh(new THREE.CapsuleGeometry((thigh / 100) * 0.18, 0.4 * scale, 8, 16), skin);
  thighL.position.set(-0.14 * scale, 0.45 * scale, 0);
  const thighR = thighL.clone(); thighR.position.x = 0.14 * scale;
  avatar.add(thighL, thighR);

  const kneeL = new THREE.Mesh(new THREE.SphereGeometry(0.075 * scale, 16, 16), skin);
  kneeL.position.set(-0.14 * scale, 0.25 * scale, 0);
  const kneeR = kneeL.clone(); kneeR.position.x = 0.14 * scale;
  avatar.add(kneeL, kneeR);

  const calfL = new THREE.Mesh(new THREE.CapsuleGeometry((calf / 100) * 0.16, 0.35 * scale, 8, 16), skin);
  calfL.position.set(-0.14 * scale, 0.0, 0);
  const calfR = calfL.clone(); calfR.position.x = 0.14 * scale;
  avatar.add(calfL, calfR);

  return avatar;
}

export const AvatarViewer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { measurements } = useMeasurements();

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a2a);

    const camera = new THREE.PerspectiveCamera(45, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    camera.position.set(0, 1.6, 4);
    camera.lookAt(0, 1, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 0.8);
    mainLight.position.set(5, 10, 7.5);
    mainLight.castShadow = true;
    scene.add(mainLight);

    const avatar = buildUpgradedSmoothAvatar(measurements);
    scene.add(avatar);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, [measurements]);

  return <div ref={containerRef} className="w-full h-[500px] rounded-md border" />;
};
