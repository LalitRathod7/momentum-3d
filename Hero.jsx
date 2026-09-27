import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { ArrowRight, ArrowDown } from "lucide-react";
import RoboticArm from "./RoboticArm";
import SceneLighting from "./SceneLighting";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-graphite-900 pt-16">
      {/* 3D canvas fills the hero as a backdrop */}
      <div className="absolute inset-0">
        <Canvas shadows camera={{ position: [3, 1, 5], fov: 40 }} dpr={[1, 1.5]}>
          <Suspense fallback={null}>
            <SceneLighting />
            <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.4}>
              <RoboticArm scale={1.1} position={[0.6, 0, 0]} />
            </Float>
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient so text stays legible over the 3D scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-graphite-900 via-graphite-900/70 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl">
          <p className="font-mono text-xs text-copper-300">Physics-driven 3D product experiences</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-concrete sm:text-5xl">
            See how it moves before you build it.
          </h1>
          <p className="mt-5 text-lg text-graphite-300">
            Momentum turns a single 3D asset into a full interactive web experience —
            real lighting, real depth, and a model your visitors can actually spin around.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-copper-500 px-6 py-3 text-sm font-semibold text-graphite-900 transition-transform hover:-translate-y-0.5"
            >
              Explore the model
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-md border border-graphite-500/60 px-6 py-3 text-sm font-semibold text-concrete hover:bg-white/5"
            >
              What it can do
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-graphite-300 hover:text-concrete"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
}
