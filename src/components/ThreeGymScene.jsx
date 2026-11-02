import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Eye, Sparkles, Move3d } from 'lucide-react';

export default function ThreeGymScene() {
  const containerRef = useRef(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeLighting, setActiveLighting] = useState('red-fusion'); // 'red-fusion' | 'pure-chrome'
  const [isInteracting, setIsInteracting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // References to keep animation loop clean
  const sceneStateRef = useRef({
    autoRotate: true,
    mouseX: 0,
    mouseY: 0,
    targetRotationX: 0.3,
    targetRotationY: 0.6,
    isDragging: false,
    previousMousePosition: { x: 0, y: 0 },
    pointLight: null,
    rimLight: null,
    particles: null,
    gridHelper: null,
    kineticRing1: null,
    kineticRing2: null,
    kineticRing3: null,
    dumbbellGroup: null,
  });

  // Sync autoRotate state to ref
  useEffect(() => {
    sceneStateRef.current.autoRotate = autoRotate;
  }, [autoRotate]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x08080a, 0.04);

    // 2. Camera setup
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 9.5);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0x181824, 1.4);
    scene.add(ambientLight);

    const mainKeyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    mainKeyLight.position.set(5, 7, 6);
    scene.add(mainKeyLight);

    const redRimLight = new THREE.PointLight(0xe50914, 5.0, 30);
    redRimLight.position.set(-6, 3, -4);
    scene.add(redRimLight);
    sceneStateRef.current.rimLight = redRimLight;

    const interactiveCursorLight = new THREE.PointLight(0xff2a35, 4.0, 18);
    interactiveCursorLight.position.set(0, 0, 5);
    scene.add(interactiveCursorLight);
    sceneStateRef.current.pointLight = interactiveCursorLight;

    const fillCoolLight = new THREE.DirectionalLight(0x38bdf8, 0.8);
    fillCoolLight.position.set(4, -5, -3);
    scene.add(fillCoolLight);

    // 5. Build High-End 3D Dumbbell / Barbell Sculpture
    const dumbbellGroup = new THREE.Group();
    sceneStateRef.current.dumbbellGroup = dumbbellGroup;
    scene.add(dumbbellGroup);

    // Materials
    const gunmetalMat = new THREE.MeshStandardMaterial({
      color: 0x181920,
      metalness: 0.92,
      roughness: 0.22,
    });

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xebedf2,
      metalness: 0.98,
      roughness: 0.12,
    });

    const redAnodizedMat = new THREE.MeshStandardMaterial({
      color: 0xcc0712,
      metalness: 0.88,
      roughness: 0.25,
      emissive: 0x550208,
      emissiveIntensity: 0.35,
    });

    const goldAccentMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.9,
      roughness: 0.28,
    });

    const glowingRedLaserMat = new THREE.MeshBasicMaterial({
      color: 0xff1e28,
      wireframe: false,
    });

    // Central Grip Bar
    const barGeo = new THREE.CylinderGeometry(0.16, 0.16, 4.2, 32);
    barGeo.rotateZ(Math.PI / 2);
    const barMesh = new THREE.Mesh(barGeo, chromeMat);
    dumbbellGroup.add(barMesh);

    // Knurling Grip Textured Bands
    const knurlCount = 6;
    for (let i = 0; i < knurlCount; i++) {
      const offset = (i - (knurlCount - 1) / 2) * 0.32;
      const knurlRingGeo = new THREE.TorusGeometry(0.168, 0.016, 16, 32);
      knurlRingGeo.rotateY(Math.PI / 2);
      const knurlRing = new THREE.Mesh(knurlRingGeo, gunmetalMat);
      knurlRing.position.x = offset;
      dumbbellGroup.add(knurlRing);
    }

    // Inner Collars / Stops
    const leftCollar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.3, 0.3, 0.16, 32),
      redAnodizedMat
    );
    leftCollar.geometry.rotateZ(Math.PI / 2);
    leftCollar.position.x = -1.25;
    dumbbellGroup.add(leftCollar);

    const rightCollar = leftCollar.clone();
    rightCollar.position.x = 1.25;
    dumbbellGroup.add(rightCollar);

    // Helper to create Hexagonal Olympic Weight Plates
    const createPlateAssembly = (isRight = false) => {
      const sideGroup = new THREE.Group();
      const sign = isRight ? 1 : -1;

      // Plate 1: Heavy Primary Hexagon Plate (Large)
      const p1Geo = new THREE.CylinderGeometry(1.5, 1.5, 0.36, 6);
      p1Geo.rotateZ(Math.PI / 2);
      const p1 = new THREE.Mesh(p1Geo, gunmetalMat);
      p1.position.x = sign * 1.55;
      sideGroup.add(p1);

      // Plate 1 Rim Bevel
      const p1Rim = new THREE.Mesh(
        new THREE.TorusGeometry(1.52, 0.04, 16, 6),
        redAnodizedMat
      );
      p1Rim.geometry.rotateY(Math.PI / 2);
      p1Rim.position.x = sign * 1.55;
      sideGroup.add(p1Rim);

      // Plate 2: Mid Hexagon Plate
      const p2Geo = new THREE.CylinderGeometry(1.22, 1.22, 0.28, 6);
      p2Geo.rotateZ(Math.PI / 2);
      const p2 = new THREE.Mesh(p2Geo, chromeMat);
      p2.position.x = sign * 1.92;
      sideGroup.add(p2);

      // Plate 3: Outer Accent Hexagon Plate
      const p3Geo = new THREE.CylinderGeometry(0.96, 0.96, 0.22, 6);
      p3Geo.rotateZ(Math.PI / 2);
      const p3 = new THREE.Mesh(p3Geo, gunmetalMat);
      p3.position.x = sign * 2.22;
      sideGroup.add(p3);

      // Outer Red Laser Ring Groove
      const laserRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.72, 0.03, 16, 32),
        glowingRedLaserMat
      );
      laserRing.geometry.rotateY(Math.PI / 2);
      laserRing.position.x = sign * 2.34;
      sideGroup.add(laserRing);

      // Lock Collar Nut with Gold Fastener
      const lockNut = new THREE.Mesh(
        new THREE.CylinderGeometry(0.38, 0.38, 0.24, 8),
        goldAccentMat
      );
      lockNut.geometry.rotateZ(Math.PI / 2);
      lockNut.position.x = sign * 2.5;
      sideGroup.add(lockNut);

      // Chrome End Cap Pin
      const endPin = new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 16, 16),
        chromeMat
      );
      endPin.position.x = sign * 2.65;
      sideGroup.add(endPin);

      return sideGroup;
    };

    dumbbellGroup.add(createPlateAssembly(false));
    dumbbellGroup.add(createPlateAssembly(true));

    // 6. Kinetic 3D Energy Halos / Gyroscopic Orbit Rings
    const ring1Geo = new THREE.TorusGeometry(2.3, 0.025, 16, 100);
    const kineticRing1 = new THREE.Mesh(ring1Geo, redAnodizedMat);
    dumbbellGroup.add(kineticRing1);
    sceneStateRef.current.kineticRing1 = kineticRing1;

    const ring2Geo = new THREE.TorusGeometry(2.7, 0.018, 16, 100);
    const kineticRing2 = new THREE.Mesh(ring2Geo, chromeMat);
    kineticRing2.rotation.x = Math.PI / 3;
    dumbbellGroup.add(kineticRing2);
    sceneStateRef.current.kineticRing2 = kineticRing2;

    const ring3Geo = new THREE.TorusGeometry(3.1, 0.015, 16, 80);
    const kineticRing3 = new THREE.Mesh(ring3Geo, glowingRedLaserMat);
    kineticRing3.rotation.y = Math.PI / 4;
    dumbbellGroup.add(kineticRing3);
    sceneStateRef.current.kineticRing3 = kineticRing3;

    // 7. 3D Floating Particle Embers / Sparks
    const particleCount = 750;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);
    const colors = new Float32Array(particleCount * 3);

    const redColor = new THREE.Color(0xe50914);
    const goldColor = new THREE.Color(0xf59e0b);
    const whiteColor = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 32;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      particleSpeeds[i] = 0.008 + Math.random() * 0.025;

      const choice = Math.random();
      const c = choice > 0.4 ? redColor : choice > 0.15 ? goldColor : whiteColor;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.14,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    sceneStateRef.current.particles = particles;

    // 8. 3D Perspective Athletic Floor Grid
    const gridHelper = new THREE.GridHelper(50, 45, 0xe50914, 0x1f1f2a);
    gridHelper.position.y = -4.5;
    gridHelper.position.z = -2;
    scene.add(gridHelper);
    sceneStateRef.current.gridHelper = gridHelper;

    // Default positioning for responsive layout
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;

    if (isMobile) {
      dumbbellGroup.position.set(0, 0.4, -1.5);
      dumbbellGroup.scale.set(0.68, 0.68, 0.68);
    } else if (isTablet) {
      dumbbellGroup.position.set(1.4, 0.2, 0);
      dumbbellGroup.scale.set(0.85, 0.85, 0.85);
    } else {
      // Desktop: positioned elegantly to the right of hero text
      dumbbellGroup.position.set(2.8, 0.1, 0.4);
      dumbbellGroup.scale.set(1.08, 1.08, 1.08);
    }

    setIsLoaded(true);

    // 9. Mouse and Interaction Listeners
    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);

      sceneStateRef.current.mouseX = x;
      sceneStateRef.current.mouseY = y;

      if (sceneStateRef.current.isDragging) {
        const deltaX = event.clientX - sceneStateRef.current.previousMousePosition.x;
        const deltaY = event.clientY - sceneStateRef.current.previousMousePosition.y;

        sceneStateRef.current.targetRotationY += deltaX * 0.008;
        sceneStateRef.current.targetRotationX += deltaY * 0.008;

        sceneStateRef.current.previousMousePosition = {
          x: event.clientX,
          y: event.clientY,
        };
      }
    };

    const handleMouseDown = (event) => {
      sceneStateRef.current.isDragging = true;
      setIsInteracting(true);
      sceneStateRef.current.previousMousePosition = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    const handleMouseUp = () => {
      sceneStateRef.current.isDragging = false;
      setTimeout(() => setIsInteracting(false), 2000);
    };

    // Touch Support for Mobile Drag
    const handleTouchStart = (event) => {
      if (event.touches.length === 1) {
        sceneStateRef.current.isDragging = true;
        setIsInteracting(true);
        sceneStateRef.current.previousMousePosition = {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY,
        };
      }
    };

    const handleTouchMove = (event) => {
      if (sceneStateRef.current.isDragging && event.touches.length === 1) {
        const deltaX = event.touches[0].clientX - sceneStateRef.current.previousMousePosition.x;
        const deltaY = event.touches[0].clientY - sceneStateRef.current.previousMousePosition.y;

        sceneStateRef.current.targetRotationY += deltaX * 0.009;
        sceneStateRef.current.targetRotationX += deltaY * 0.009;

        sceneStateRef.current.previousMousePosition = {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY,
        };
      }
    };

    const handleTouchEnd = () => {
      sceneStateRef.current.isDragging = false;
      setTimeout(() => setIsInteracting(false), 2000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // 10. Responsive Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      if (newWidth < 768) {
        dumbbellGroup.position.set(0, 0.4, -1.5);
        dumbbellGroup.scale.set(0.68, 0.68, 0.68);
      } else if (newWidth < 1024) {
        dumbbellGroup.position.set(1.4, 0.2, 0);
        dumbbellGroup.scale.set(0.85, 0.85, 0.85);
      } else {
        dumbbellGroup.position.set(2.8, 0.1, 0.4);
        dumbbellGroup.scale.set(1.08, 1.08, 1.08);
      }
    };

    window.addEventListener('resize', handleResize);

    // 11. Animation Loop with Performance Optimization
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const state = sceneStateRef.current;

      // Rotate Dumbbell
      if (state.autoRotate && !state.isDragging) {
        state.targetRotationY += 0.006;
        state.targetRotationX = 0.25 + Math.sin(elapsedTime * 0.5) * 0.15;
      }

      // Smooth damping interpolation (lerp)
      dumbbellGroup.rotation.y += (state.targetRotationY - dumbbellGroup.rotation.y) * 0.06;
      dumbbellGroup.rotation.x += (state.targetRotationX - dumbbellGroup.rotation.x) * 0.06;
      dumbbellGroup.rotation.z = Math.sin(elapsedTime * 0.4) * 0.08;

      // Floating breathing motion
      dumbbellGroup.position.y += (Math.sin(elapsedTime * 1.2) * 0.18 - (dumbbellGroup.position.y - (width < 768 ? 0.4 : 0.1))) * 0.05;

      // Kinetic Ring Spin
      if (kineticRing1) {
        kineticRing1.rotation.x += 0.012;
        kineticRing1.rotation.y += 0.008;
      }
      if (kineticRing2) {
        kineticRing2.rotation.y -= 0.014;
        kineticRing2.rotation.z += 0.009;
      }
      if (kineticRing3) {
        kineticRing3.rotation.x += 0.007;
        kineticRing3.rotation.z -= 0.012;
      }

      // Dynamic Interactive Light Follow
      if (interactiveCursorLight) {
        interactiveCursorLight.position.x += (state.mouseX * 7 - interactiveCursorLight.position.x) * 0.08;
        interactiveCursorLight.position.y += (state.mouseY * 5 - interactiveCursorLight.position.y) * 0.08;
      }

      // Animate Particles Floating Upwards
      if (particles) {
        const pos = particles.geometry.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
          pos[i * 3 + 1] += particleSpeeds[i];
          pos[i * 3] += Math.sin(elapsedTime + i) * 0.003;

          // Wrap back around if particle escapes view
          if (pos[i * 3 + 1] > 12) {
            pos[i * 3 + 1] = -12;
          }
        }
        particles.geometry.attributes.position.needsUpdate = true;
      }

      // Grid Wave Motion
      if (gridHelper) {
        gridHelper.position.z = (elapsedTime * 1.5) % 2.5 - 2.5;
      }

      // Parallax Camera Sway
      camera.position.x += (state.mouseX * 0.7 - camera.position.x) * 0.04;
      camera.position.y += (state.mouseY * 0.5 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // 12. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);

      // Dispose Three.js objects to prevent memory leaks
      renderer.dispose();
      barGeo.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Lighting mode switcher
  const toggleLighting = () => {
    const next = activeLighting === 'red-fusion' ? 'pure-chrome' : 'red-fusion';
    setActiveLighting(next);
    if (sceneStateRef.current.rimLight) {
      if (next === 'pure-chrome') {
        sceneStateRef.current.rimLight.color.setHex(0x38bdf8);
        sceneStateRef.current.pointLight.color.setHex(0xffffff);
      } else {
        sceneStateRef.current.rimLight.color.setHex(0xe50914);
        sceneStateRef.current.pointLight.color.setHex(0xff2a35);
      }
    }
  };

  const resetView = () => {
    sceneStateRef.current.targetRotationX = 0.3;
    sceneStateRef.current.targetRotationY = 0.6;
    setAutoRotate(true);
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
      {/* 3D WebGL Canvas Mount */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        title="Interactive 3D Fitness Core — Drag to rotate"
      />

      {/* Atmospheric Gradients to seamlessly blend 3D with page contents */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#08080a] via-transparent to-[#08080a]/70" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#08080a] via-[#08080a]/75 to-transparent lg:w-2/3" />
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-red-600/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Interactive 3D Control Pill (Allows the client to interact directly and be impressed) */}
      <div className="absolute bottom-6 right-6 z-20 hidden md:flex items-center gap-2 bg-[#121218]/90 backdrop-blur-md border border-white/15 px-3.5 py-2 rounded-2xl shadow-2xl text-xs text-gray-300">
        <div className="flex items-center gap-2 border-r border-white/10 pr-3">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span className="font-semibold text-white tracking-wide flex items-center gap-1.5">
            <Move3d className="w-3.5 h-3.5 text-red-500" />
            3D Interactive
          </span>
        </div>

        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors ${
            autoRotate
              ? 'bg-red-600/20 text-red-400 border border-red-500/30'
              : 'bg-white/5 text-gray-400 hover:text-white'
          }`}
          title="Toggle Auto 3D Orbit"
        >
          <RotateCw className={`w-3 h-3 ${autoRotate ? 'animate-spin' : ''}`} />
          <span>{autoRotate ? 'Orbiting' : 'Paused'}</span>
        </button>

        <button
          onClick={toggleLighting}
          className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
          title="Switch 3D Lighting Atmosphere"
        >
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>{activeLighting === 'red-fusion' ? 'Red Fusion' : 'Ice Chrome'}</span>
        </button>

        <button
          onClick={resetView}
          className="px-2 py-1 rounded-lg text-[11px] text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          title="Reset 3D Angle"
        >
          Reset
        </button>
      </div>

      {/* Floating Drag Hint Pill */}
      <div className="absolute top-28 right-6 z-20 hidden xl:flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-[11px] text-gray-400 pointer-events-none">
        <Move3d className="w-3 h-3 text-red-400" />
        <span>Click & drag to inspect 3D core in 360°</span>
      </div>
    </div>
  );
}
