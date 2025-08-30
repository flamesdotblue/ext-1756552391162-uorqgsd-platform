import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ShoppingCart, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]">
        <div className="absolute -top-40 left-1/2 h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-500/20 via-teal-400/10 to-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-28 sm:pb-28 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-sm"
        >
          <Leaf className="h-3.5 w-3.5 text-emerald-400" />
          <span>Direct Air Capture for a net-zero future</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 text-center font-manrope text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Sage Carbon
          <span className="block bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-200 bg-clip-text text-transparent">Remove carbon. Restore balance.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-white/70"
        >
          We deliver high-quality, measurable carbon removal through next‑generation Direct Air Capture (DAC). Buy verified credits and accelerate your path to net zero.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#buy"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-neutral-950 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
          >
            <ShoppingCart className="h-4 w-4" />
            Buy Carbon Credits
          </a>
          <a
            href="#impact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/90 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            Learn more
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="mt-14 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: 'CO₂ removed', value: '128,420 t' },
            { label: 'Corporate buyers', value: '210+' },
            { label: 'DAC facilities', value: '6' },
            { label: 'Countries', value: '9' },
          ].map((kpi) => (
            <div key={kpi.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs uppercase tracking-wide text-white/50">{kpi.label}</div>
              <div className="mt-1 text-lg font-semibold text-white">{kpi.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
