import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type ChartSeries = {
  name: string;
  color: string; // CSS color or var(--chart-X)
  values: number[]; // length = days
};

export type ChartCardProps = {
  title: string;
  caption?: string;
  days: string[]; // x-axis labels (display 3 of them)
  series: ChartSeries[];
  mode?: "grouped" | "stacked";
  legend?: boolean;
  height?: number;
};

const PADDING_X = 8;
const PADDING_TOP = 12;
const PADDING_BOTTOM = 22;

export function ChartCard({
  title,
  caption,
  days,
  series,
  mode = "grouped",
  legend = false,
  height = 140,
}: ChartCardProps) {
  const width = 360;
  const innerW = width - PADDING_X * 2;
  const innerH = height - PADDING_TOP - PADDING_BOTTOM;

  const max = Math.max(
    1,
    ...(mode === "stacked"
      ? days.map((_, i) =>
          series.reduce((acc, s) => acc + (s.values[i] ?? 0), 0),
        )
      : series.flatMap((s) => s.values)),
  );

  const slotW = innerW / days.length;
  const groupGap = 2;
  const barW =
    mode === "stacked"
      ? Math.max(4, slotW * 0.55)
      : Math.max(2, (slotW - groupGap * (series.length + 1)) / series.length);

  // x-axis ticks: first, middle, last
  const ticks = [0, Math.floor(days.length / 2), days.length - 1];

  // gridlines (4 horizontal)
  const gridLines = [0.25, 0.5, 0.75, 1].map((p) => PADDING_TOP + innerH * (1 - p));

  return (
    <Card className="gradient-card border-border/70 p-5 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
          {caption ? (
            <p className="text-[11px] text-muted-foreground">{caption}</p>
          ) : null}
        </div>
      </div>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="mt-3 h-[140px] w-full"
        role="img"
        aria-label={`${title} chart`}
      >
        {/* gridlines */}
        {gridLines.map((y, i) => (
          <line
            key={i}
            x1={PADDING_X}
            x2={width - PADDING_X}
            y1={y}
            y2={y}
            stroke="currentColor"
            className="text-border"
            strokeOpacity={0.5}
            strokeDasharray="2 3"
          />
        ))}

        {/* bars */}
        {days.map((_, i) => {
          const slotX = PADDING_X + slotW * i;

          if (mode === "stacked") {
            let acc = 0;
            return (
              <g key={i}>
                {series.map((s, si) => {
                  const v = s.values[i] ?? 0;
                  const total = series.reduce(
                    (a, ss) => a + (ss.values[i] ?? 0),
                    0,
                  );
                  if (total === 0) return null;
                  const h = (v / max) * innerH;
                  const y = PADDING_TOP + innerH - acc - h;
                  acc += h;
                  const isTop = si === series.length - 1 || acc >= (total / max) * innerH;
                  return (
                    <rect
                      key={si}
                      x={slotX + (slotW - barW) / 2}
                      y={y}
                      width={barW}
                      height={Math.max(0, h)}
                      rx={isTop ? 3 : 0}
                      ry={isTop ? 3 : 0}
                      fill={s.color}
                    />
                  );
                })}
              </g>
            );
          }

          return (
            <g key={i}>
              {series.map((s, si) => {
                const v = s.values[i] ?? 0;
                if (v === 0) return null;
                const h = (v / max) * innerH;
                const y = PADDING_TOP + innerH - h;
                const x =
                  slotX + groupGap + si * (barW + groupGap);
                return (
                  <rect
                    key={si}
                    x={x}
                    y={y}
                    width={barW}
                    height={h}
                    rx={3}
                    ry={3}
                    fill={s.color}
                  />
                );
              })}
            </g>
          );
        })}

        {/* x-axis labels */}
        {ticks.map((t, idx) => {
          const x =
            PADDING_X +
            slotW * t +
            slotW / 2;
          const anchor =
            idx === 0 ? "start" : idx === ticks.length - 1 ? "end" : "middle";
          const tx = idx === 0 ? PADDING_X : idx === ticks.length - 1 ? width - PADDING_X : x;
          return (
            <text
              key={t}
              x={tx}
              y={height - 6}
              textAnchor={anchor}
              className="fill-muted-foreground text-[10px]"
            >
              {days[t]}
            </text>
          );
        })}
      </svg>

      {legend ? (
        <div className="mt-1 flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground">
          {series.map((s) => (
            <span key={s.name} className="inline-flex items-center gap-1.5">
              <span
                aria-hidden
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: s.color }}
              />
              {s.name}
            </span>
          ))}
        </div>
      ) : null}
    </Card>
  );
}

export function makeDayLabels(): string[] {
  // 14 daily slots ending today (Apr 21, 2026)
  const start = new Date("2026-04-09");
  return Array.from({ length: 14 }).map((_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    return `${d.getMonth() + 1}/${d.getDate()}`;
  });
}

// helper to read CSS variable
export const cssVar = (name: string) => `var(--${name})`;

export function classedBars({ className }: { className?: string }) {
  return cn("h-[140px] w-full", className);
}
