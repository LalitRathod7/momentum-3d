import { ArrowRight } from "lucide-react";
import { contactCopy } from "../data/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-graphite-900 py-24">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-wide text-copper-300">{contactCopy.eyebrow}</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-concrete sm:text-4xl">
            {contactCopy.heading}
          </h2>
          <p className="mt-4 text-graphite-300">{contactCopy.body}</p>
          <a
            href="https://algoryx.se/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-copper-500 px-6 py-3 text-sm font-semibold text-graphite-900 transition-transform hover:-translate-y-0.5"
          >
            Look up Algoryx
            <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
