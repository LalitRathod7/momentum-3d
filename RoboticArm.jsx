import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

/**
 * STAND-IN 3D ASSET
 * -----------------
 * This is a procedurally-built robotic arm (plain Three.js primitives —
 * no external file needed), used as a placeholder for the real asset this
 * task asks you to download from Algoryx Community.
 *
 * Once you have a real .glb/.gltf file:
 *   1. Drop it in /public/models/your-asset.glb
 *   2. See src/components/CustomAssetExample.jsx for the exact
 *      useGLTF + Suspense pattern to load it
 *   3. Replace <RoboticArm /> with your loaded model in Hero.jsx and
 *      Showcase.jsx
 *
 * Everything else in this project (lighting, camera, scroll animation,
 * OrbitControls) works the same regardless of which model is inside.
 */
export default function RoboticArm({ interactive = false, ...props }) {
  const shoulderRef = useRef(null);
  const elbowRef = useRef(null);
  const wristRef = useRef(null);
  const groupRef = useRef(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Gentle idle motion so the model feels alive even before interaction
    if (shoulderRef.current) shoulderRef.current.rotation.z = Math.sin(t * 0.5) * 0.15 - 0.1;
    if (elbowRef.current) elbowRef.current.rotation.z = Math.sin(t * 0.6 + 1) * 0.25 + 0.3;
    if (wristRef.current) wristRef.current.rotation.z = Math.sin(t * 0.8 + 2) * 0.3;

    // Slow overall turntable rotation when not being dragged by the user
    if (groupRef.current && !interactive) {
      groupRef.current.rotation.y = t * 0.15;
    }
  });

  const metal = { color: "#B9B6AE", metalness: 0.6, roughness: 0.35 };
  const copper = { color: "#C9793C", metalness: 0.7, roughness: 0.3 };
  const dark = { color: "#232219", metalness: 0.4, roughness: 0.6 };

  return (
    <group ref={groupRef} {...props} dispose={null}>
      {/* Base plate */}
      <mesh position={[0, -1.6, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.9, 1, 0.3, 32]} />
        <meshStandardMaterial {...dark} />
      </mesh>

      {/* Rotating column */}
      <mesh position={[0, -1.1, 0]} castShadow>
        <cylinderGeometry args={[0.5, 0.6, 0.7, 32]} />
        <meshStandardMaterial {...metal} />
      </mesh>

      {/* Shoulder joint + upper arm */}
      <group ref={shoulderRef} position={[0, -0.7, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.35, 24, 24]} />
          <meshStandardMaterial {...copper} />
        </mesh>
        <mesh position={[0, 0.7, 0]} castShadow>
          <boxGeometry args={[0.32, 1.4, 0.32]} />
          <meshStandardMaterial {...metal} />
        </mesh>

        {/* Elbow joint + forearm */}
        <group ref={elbowRef} position={[0, 1.4, 0]}>
          <mesh castShadow>
            <sphereGeometry args={[0.28, 24, 24]} />
            <meshStandardMaterial {...copper} />
          </mesh>
          <mesh position={[0, 0.6, 0]} castShadow>
            <boxGeometry args={[0.26, 1.2, 0.26]} />
            <meshStandardMaterial {...metal} />
          </mesh>

          {/* Wrist joint + gripper */}
          <group ref={wristRef} position={[0, 1.2, 0]}>
            <mesh castShadow>
              <sphereGeometry args={[0.22, 20, 20]} />
              <meshStandardMaterial {...copper} />
            </mesh>
            <mesh position={[-0.12, 0.35, 0]} rotation={[0, 0, 0.2]} castShadow>
              <boxGeometry args={[0.1, 0.45, 0.12]} />
              <meshStandardMaterial {...dark} />
            </mesh>
            <mesh position={[0.12, 0.35, 0]} rotation={[0, 0, -0.2]} castShadow>
              <boxGeometry args={[0.1, 0.45, 0.12]} />
              <meshStandardMaterial {...dark} />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
}
