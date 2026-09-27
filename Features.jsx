import { features } from "../data/content";
import Reveal from "./Reveal";

export default function Features() {
  return (
    <section id="features" className="bg-graphite-900 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-wide text-copper-300">Capabilities</p>
          <h2 className="mt-2 max-w-xl font-display text-3xl font-semibold text-concrete sm:text-4xl">
            Why simulate it in the browser
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.id} delay={index * 0.1}>
              <div className="h-full rounded-2xl border border-graphite-700 bg-graphite-800 p-6 transition-transform hover:-translate-y-1">
                <span className="font-mono text-xs text-copper-400">0{index + 1}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-concrete">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite-300">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
