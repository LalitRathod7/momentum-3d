import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { RotateCcw } from "lucide-react";
import RoboticArm from "./RoboticArm";
import SceneLighting from "./SceneLighting";
import Reveal from "./Reveal";

export default function Showcase() {
  const [resetKey, setResetKey] = useState(0);

  return (
    <section id="showcase" className="bg-graphite-800 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-wide text-copper-300">Try it yourself</p>
          <h2 className="mt-2 max-w-xl font-display text-3xl font-semibold text-concrete sm:text-4xl">
            Drag to rotate. Scroll to zoom.
          </h2>
          <p className="mt-3 max-w-lg text-graphite-300">
            This is the actual asset rendered live in your browser — not a video. Swap it for
            your own downloaded model without touching the surrounding layout.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-10 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-graphite-700 bg-gradient-to-b from-graphite-900 to-graphite-800 sm:aspect-video">
            <Canvas shadows camera={{ position: [3.2, 1.4, 3.2], fov: 42 }} dpr={[1, 1.5]}>
              <Suspense fallback={null}>
                <SceneLighting />
                <RoboticArm key={resetKey} interactive scale={1.2} />
                <OrbitControls
                  enablePan={false}
                  minDistance={2.5}
                  maxDistance={6}
                  minPolarAngle={0.4}
                  maxPolarAngle={Math.PI / 1.8}
                />
              </Suspense>
            </Canvas>

            <button
              onClick={() => setResetKey((k) => k + 1)}
              className="absolute bottom-4 right-4 flex items-center gap-2 rounded-md border border-graphite-500/50 bg-graphite-900/80 px-3 py-2 text-xs font-medium text-concrete backdrop-blur hover:bg-graphite-900"
            >
              <RotateCcw size={14} /> Reset view
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
