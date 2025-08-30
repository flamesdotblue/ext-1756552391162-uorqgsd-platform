import React, { useMemo } from 'react';

function LineChart({ data, height = 160 }) {
  const padding = 14;
  const width = 560;
  const { path, points } = useMemo(() => {
    const xs = data.map((_, i) => i);
    const ys = data;
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    const rangeY = maxY - minY || 1;
    const chartW = width - padding * 2;
    const chartH = height - padding * 2;
    const xStep = chartW / Math.max(1, xs.length - 1);

    const toX = (i) => padding + i * xStep;
    const toY = (v) => padding + chartH - ((v - minY) / rangeY) * chartH;

    const pts = xs.map((i) => [toX(i), toY(ys[i])]);
    const d = pts.map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)).join(' ');
    return { path: d, points: pts };
  }, [data, height]);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-40 w-full">
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g>
        <rect x="0" y="0" width={width} height={height} fill="none" />
        <path d={path}
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* area fill */}
        <path
          d={`${path} L ${points[points.length - 1]?.[0] ?? 0} ${height - 14} L ${points[0]?.[0] ?? 0} ${height - 14} Z`}
          fill="url(#fillGrad)"
          opacity="0.6"
        />
        {points.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r="2" fill="#a7f3d0" />
        ))}
      </g>
    </svg>
  );
}

function DonutChart({ segments, size = 160, stroke = 16 }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="mx-auto">
      <g transform={`translate(${size / 2} ${size / 2})`}>
        <circle r={radius} fill="transparent" stroke="#1f2937" strokeOpacity="0.4" strokeWidth={stroke} />
        {segments.map((s, i) => {
          const len = (s.value / 100) * circumference;
          const dash = `${len} ${circumference - len}`;
          const circle = (
            <circle
              key={s.label + i}
              r={radius}
              fill="transparent"
              stroke={s.color}
              strokeWidth={stroke}
              strokeDasharray={dash}
              strokeDashoffset={-offset}
              strokeLinecap="butt"
              transform="rotate(-90)"
            />
          );
          offset += len;
          return circle;
        })}
        <text textAnchor="middle" dominantBaseline="middle" className="fill-white" fontSize="16" fontWeight="600">
          Portfolio
        </text>
      </g>
    </svg>
  );
}

export default function DataVisuals() {
  const monthly = [220, 260, 300, 340, 420, 480, 560, 610, 690, 760, 840, 920];
  const segments = [
    { label: 'Direct Air Capture', value: 70, color: '#34d399' },
    { label: 'Reforestation', value: 20, color: '#22d3ee' },
    { label: 'Soil Carbon', value: 10, color: '#a78bfa' },
  ];

  const kpis = [
    { label: 'CO₂ removed this year', value: '6,160 t', change: '+22% YoY' },
    { label: 'Avg. removal cost', value: '$405 / t', change: '-8% YoY' },
    { label: 'Buyers with SBTi targets', value: '68%', change: '+12% YoY' },
  ];

  return (
    <section id="impact" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-manrope text-2xl font-semibold text-white sm:text-3xl">Impact at a glance</h2>
          <p className="mt-1 text-sm text-white/60">Real-time metrics from our DAC facilities and verified projects.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm text-white/60">{k.label}</div>
            <div className="mt-1 text-2xl font-semibold text-white">{k.value}</div>
            <div className="mt-1 text-xs text-emerald-300/90">{k.change}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 lg:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-white">Monthly CO₂ captured (t)</h3>
              <p className="text-xs text-white/60">Last 12 months</p>
            </div>
            <div className="text-xs text-white/50">Source: Sage Carbon facilities</div>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50 p-3">
            <LineChart data={monthly} />
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2 text-xs text-white/60">
            {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((m) => (
              <div key={m} className="text-center">{m}</div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-sm font-semibold text-white">Portfolio allocation</h3>
          <p className="text-xs text-white/60">Share of removal strategies</p>
          <div className="mt-3">
            <DonutChart segments={segments} />
          </div>
          <div className="mt-4 space-y-2">
            {segments.map((s) => (
              <div key={s.label} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: s.color }} />
                  <span className="text-white/80">{s.label}</span>
                </div>
                <span className="text-white/60">{s.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
