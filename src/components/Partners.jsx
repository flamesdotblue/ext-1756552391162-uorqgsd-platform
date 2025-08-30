import React from 'react';

const logos = [
  { name: 'Acme Air', color: '#a3e635' },
  { name: 'NovaCloud', color: '#22d3ee' },
  { name: 'Greenly', color: '#34d399' },
  { name: 'TerraWorks', color: '#fbbf24' },
  { name: 'Bytewave', color: '#a78bfa' },
  { name: 'Northwind', color: '#60a5fa' },
];

function LogoBadge({ name, color }) {
  return (
    <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4 transition hover:scale-[1.01]">
      <svg width="140" height="36" viewBox="0 0 140 36" role="img" aria-label={name} className="opacity-70">
        <defs>
          <linearGradient id={`grad-${name.replace(/\s/g, '')}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor="#d1d5db" />
          </linearGradient>
        </defs>
        <g>
          <rect x="2" y="8" width="20" height="20" rx="4" fill={`url(#grad-${name.replace(/\s/g, '')})`} />
          <circle cx="12" cy="18" r="5" fill="white" fillOpacity="0.9" />
          <text x="28" y="23" fill="white" opacity="0.9" fontSize="16" fontWeight="600" fontFamily="Inter, ui-sans-serif, system-ui">{name}</text>
        </g>
      </svg>
    </div>
  );
}

export default function Partners() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-sm font-semibold tracking-wide text-white/70">Trusted by climate-leading teams</h3>
        <div className="text-xs text-white/40">Select partners</div>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {logos.map((l) => (
          <LogoBadge key={l.name} name={l.name} color={l.color} />
        ))}
      </div>
    </section>
  );
}
