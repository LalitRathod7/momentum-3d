import { specs } from "../data/content";
import Reveal from "./Reveal";

export default function Specs() {
  return (
    <section id="specs" className="border-y border-graphite-700 bg-graphite-800 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {specs.map((spec) => (
              <div key={spec.id} className="text-center">
                <p className="font-mono text-3xl font-bold text-concrete">{spec.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-graphite-300">{spec.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
