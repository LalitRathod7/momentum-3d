import { useGLTF } from "@react-three/drei";

/**
 * EXAMPLE ONLY — not wired into the app.
 *
 * This shows the exact pattern for loading a real 3D asset you've
 * downloaded (from Algoryx Community, Sketchfab, or anywhere else that
 * gives you a .glb/.gltf file):
 *
 *   1. Put the file at /public/models/your-asset.glb
 *   2. Use it like this:
 *
 *        import { Suspense } from "react";
 *        import CustomAsset from "./CustomAssetExample";
 *
 *        <Suspense fallback={null}>
 *          <CustomAsset />
 *        </Suspense>
 *
 *   3. Delete RoboticArm.jsx (or keep it around as a fallback) once your
 *      real asset is in place, and swap the JSX in Hero.jsx / Showcase.jsx.
 *
 * useGLTF suspends while the file loads, which is why it must be
 * rendered inside a <Suspense> boundary — Canvas from @react-three/fiber
 * does NOT provide one automatically.
 */
export default function CustomAssetExample({ ...props }) {
  const { scene } = useGLTF("/models/your-asset.glb");
  return <primitive object={scene} {...props} />;
}

// Pre-loading (optional) — starts the fetch before the component mounts,
// useful if you know this asset will be needed soon (e.g. on route change).
useGLTF.preload("/models/your-asset.glb");
