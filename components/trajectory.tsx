import type { Content } from "@/lib/content";

// Hospitadent'teki üç rol, zamana göre basamak çizgisi. Yatay eksen 06/2025'ten başlayan aylar.
const SPAN = 14;
const LEFT = 18;
const RIGHT = 342;
const BASE = 150;
const levelY = { 1: 128, 2: 86, 3: 44 } as const;
const x = (month: number) => LEFT + (month / SPAN) * (RIGHT - LEFT);

export function Trajectory({ t }: { t: Content["trajectory"] }) {
  const pts = t.steps.map((s) => ({ ...s, cx: x(s.month), cy: levelY[s.level] }));
  let line = `M${pts[0].cx} ${pts[0].cy}`;
  for (let i = 1; i < pts.length; i++) line += ` H${pts[i].cx} V${pts[i].cy}`;
  line += ` H${RIGHT}`;
  const area = `${line} V${BASE} H${LEFT} Z`;
  const last = pts.length - 1;

  return (
    <figure>
      <svg
        viewBox="0 0 360 172"
        className="w-full overflow-visible"
        role="img"
        aria-labelledby="traj-title"
      >
        <title id="traj-title">{t.title}</title>
        <defs>
          <linearGradient id="traj-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style={{ stopColor: "var(--accent)", stopOpacity: 0.18 }} />
            <stop offset="1" style={{ stopColor: "var(--accent)", stopOpacity: 0 }} />
          </linearGradient>
        </defs>

        {Object.values(levelY).map((y) => (
          <line key={y} x1={LEFT} x2={RIGHT} y1={y} y2={y} className="stroke-line" strokeDasharray="2 5" />
        ))}
        <line x1={LEFT} x2={RIGHT} y1={BASE} y2={BASE} className="stroke-line" />
        {[
          { m: 0, label: "2025" },
          { m: 7, label: "2026" },
        ].map((tick) => (
          <g key={tick.label}>
            <line x1={x(tick.m)} x2={x(tick.m)} y1={BASE} y2={BASE + 5} className="stroke-muted" />
            <text x={x(tick.m)} y={BASE + 18} className="fill-muted font-mono text-[10px]">
              {tick.label}
            </text>
          </g>
        ))}

        <path d={area} fill="url(#traj-fill)" />
        <path
          d={line}
          pathLength={1}
          fill="none"
          className="draw stroke-accent"
          strokeWidth={2.2}
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        <circle cx={pts[last].cx} cy={pts[last].cy} r={6} className="pulse fill-accent" />
        {pts.map((p, i) => (
          <g key={p.date} className="pop" style={{ ["--d" as string]: `${0.35 + i * 0.35}s` }}>
            <circle
              cx={p.cx}
              cy={p.cy}
              r={i === last ? 5.5 : 4.5}
              className={i === last ? "fill-accent stroke-surface" : "fill-surface stroke-accent"}
              strokeWidth={2}
            />
          </g>
        ))}
        {pts.map((p, i) => (
          <text
            key={p.short}
            x={i === 0 ? p.cx - 6 : p.cx}
            y={p.cy - 12}
            className={`font-mono text-[11px] ${i === last ? "fill-accent font-semibold" : "fill-muted"}`}
          >
            {p.short}
          </text>
        ))}
      </svg>

      <figcaption className="sr-only">{t.caption}</figcaption>
      <ol className="mt-4 grid gap-2.5 border-t border-line pt-4">
        {t.steps.map((s, i) => (
          <li key={s.date} className="flex items-baseline gap-3 text-sm">
            <span className="w-16 shrink-0 font-mono text-xs text-muted tabular-nums">{s.date}</span>
            <span className={i === last ? "font-medium text-ink" : "text-ink-2"}>{s.title}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}
