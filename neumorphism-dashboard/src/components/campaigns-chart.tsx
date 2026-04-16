export default function CampaignsChart() {
  const yLabels = [70, 60, 40, 30, 20, 10, 0];
  const xLabels = Array.from({ length: 22 }, (_, i) => i + 1);

  return (
    <div className="neu-flat rounded-3xl p-6 xl:col-span-2 flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
          <h3 className="text-lg font-bold text-gray-800">Campaigns</h3>
        </div>
        <div className="flex gap-3">
          <div className="neu-btn rounded-lg px-3 py-1.5 flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            24 Oct 23
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
          <div className="neu-btn rounded-lg px-3 py-1.5 flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            View
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
          <div className="neu-btn rounded-lg p-1.5 flex items-center justify-center text-gray-600 cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Chart area */}
      <div className="flex-1 w-full h-64 relative mt-4">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-8 w-8 flex flex-col justify-between text-xs text-gray-400 font-medium">
          {yLabels.map((v) => (
            <span key={v}>{v}</span>
          ))}
        </div>

        {/* Chart body */}
        <div className="absolute left-10 right-0 top-2 bottom-8">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {yLabels.map((_, i) => (
              <div key={i} className="w-full border-t border-gray-200/60" />
            ))}
          </div>

          {/* SVG lines */}
          <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 200">
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--neu-primary)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="var(--neu-primary)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Area fill */}
            <path
              d="M0,160 Q100,140 200,150 T400,80 T500,40 T600,120 T800,140 T1000,120 L1000,200 L0,200 Z"
              fill="url(#lineGrad)"
            />
            {/* Primary line */}
            <path
              d="M0,160 Q100,140 200,150 T400,80 T500,40 T600,120 T800,140 T1000,120"
              fill="none"
              stroke="var(--neu-primary)"
              strokeWidth="4"
              vectorEffect="non-scaling-stroke"
            />
            {/* Secondary line */}
            <path
              d="M0,120 Q100,110 200,130 T400,100 T500,160 T600,150 T800,170 T1000,140"
              fill="none"
              stroke="#C4C9D4"
              strokeWidth="4"
              vectorEffect="non-scaling-stroke"
            />
            {/* Dashed vertical line */}
            <line
              x1="500" y1="40" x2="500" y2="200"
              stroke="#C4C9D4" strokeWidth="2" strokeDasharray="8 8"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Tooltip dot */}
          <div className="absolute left-1/2 top-[20%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-neu-primary border-2 border-neu-bg shadow-sm z-10" />
          <div className="absolute left-1/2 top-[20%] -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-neu-primary opacity-50 z-0" />
          <div className="absolute left-1/2 top-[20%] -translate-x-1/2 -translate-y-10 neu-flat rounded-lg px-3 py-1 text-xs font-bold text-gray-700 z-10">
            42
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-neu-bg rotate-45 border-r border-b border-white/40" />
          </div>
        </div>

        {/* X-axis labels */}
        <div className="absolute left-10 right-0 bottom-0 flex justify-between text-[10px] text-gray-400 font-medium px-2">
          {xLabels.map((v) => (
            <span key={v}>{v}</span>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-neu-primary" />
          <span className="text-xs text-gray-500 font-medium">Metric A</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C4C9D4]" />
          <span className="text-xs text-gray-500 font-medium">Metric B</span>
        </div>
      </div>
    </div>
  );
}
