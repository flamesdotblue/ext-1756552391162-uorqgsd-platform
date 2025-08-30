import React from 'react';
import { ArrowRight, ShieldCheck, CreditCard, Globe } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="buy" className="relative mx-auto max-w-7xl px-6 pb-24 pt-4">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 p-6 sm:p-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h3 className="font-manrope text-2xl font-semibold text-white sm:text-3xl">Buy verified carbon removal credits</h3>
            <p className="mt-2 max-w-2xl text-white/70">Scale your decarbonization strategy with high-durability DAC removals. Transparent methodologies, third-party verification, and clear retirement certificates.</p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 text-emerald-300" />
                <div>
                  <div className="text-sm font-semibold text-white">Verified & traceable</div>
                  <div className="text-xs text-white/60">Every tonne is registry-tracked and auditable.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <CreditCard className="mt-0.5 h-5 w-5 text-emerald-300" />
                <div>
                  <div className="text-sm font-semibold text-white">Flexible purchasing</div>
                  <div className="text-xs text-white/60">Prepaid, monthly, or milestone-based plans.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <Globe className="mt-0.5 h-5 w-5 text-emerald-300" />
                <div>
                  <div className="text-sm font-semibold text-white">Global footprint</div>
                  <div className="text-xs text-white/60">Facilities across 3 regions for resilience.</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#" aria-label="Buy Carbon Credits"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-neutral-950 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
              >
                Buy Carbon Credits
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/90 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                Talk to sales
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-emerald-400/10 via-teal-300/10 to-cyan-300/10 blur-2xl" />
            <div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-5">
              <div className="text-sm font-semibold text-white">Estimate your impact</div>
              <p className="mt-1 text-xs text-white/60">Select tonnes to purchase and see projected removal impact.</p>

              <Calculator />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Calculator() {
  const [tonnes, setTonnes] = React.useState(500);
  const pricePerTonne = 405; // USD
  const years = 1000; // durability (DAC storage)
  const cost = tonnes * pricePerTonne;
  const treesEquivalent = Math.round(tonnes * 45); // rough illustrative metric

  return (
    <div className="mt-4 space-y-4">
      <div>
        <label htmlFor="tonnes" className="mb-1 block text-xs text-white/70">Tonnes of CO₂</label>
        <input
          id="tonnes"
          type="range"
          min={50}
          max={5000}
          step={50}
          value={tonnes}
          onChange={(e) => setTonnes(Number(e.target.value))}
          className="w-full accent-emerald-400"
        />
        <div className="mt-1 flex items-center justify-between text-xs text-white/60">
          <span>50</span>
          <span className="font-medium text-white">{tonnes.toLocaleString()} t</span>
          <span>5,000</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="text-white/60">Est. cost</div>
          <div className="mt-0.5 font-semibold text-white">${cost.toLocaleString()}</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="text-white/60">Storage durability</div>
          <div className="mt-0.5 font-semibold text-white">{years}+ years</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="text-white/60">DAC share</div>
          <div className="mt-0.5 font-semibold text-white">70%</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="text-white/60">Trees equivalent</div>
          <div className="mt-0.5 font-semibold text-white">{treesEquivalent.toLocaleString()} trees/year</div>
        </div>
      </div>

      <a
        href="#"
        className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-medium text-neutral-950 transition hover:bg-emerald-400"
        aria-label="Proceed to buy carbon credits"
      >
        Proceed to buy
        <ArrowRight className="h-4 w-4" />
      </a>
      <p className="text-[11px] leading-snug text-white/50">Illustrative pricing. Final pricing and certification provided at checkout. Trees equivalent is an estimate for communication only.</p>
    </div>
  );
}
