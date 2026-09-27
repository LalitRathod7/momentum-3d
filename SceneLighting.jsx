import { ContactShadows, Environment } from "@react-three/drei";

/**
 * Shared lighting rig + ground contact shadow, used by both the hero
 * canvas and the interactive showcase canvas so the model is lit
 * consistently wherever it appears.
 */
export default function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[4, 6, 4]}
        intensity={1.4}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-4, 2, -3]} intensity={0.5} color="#5B8DEF" />
      <Environment preset="city" />
      <ContactShadows position={[0, -1.75, 0]} opacity={0.5} scale={8} blur={2.4} far={3} />
    </>
  );
}
