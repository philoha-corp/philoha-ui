export default function TimelineChart() {
  const weeks = ["Week 1", "Week 2", "Week 3"];
  const weekDays = ["M", "T", "W", "T", "F", "S", "S"];

  const tasks = [
    { name: "SYS - CORE", left: "0%", width: "45%", color: "bg-[#20B2AA]" },
    { name: "Phase 1", left: "30%", width: "20%", color: "bg-neu-primary", striped: true },
    { name: "Phase 2", left: "45%", width: "10%", color: "bg-neu-primary" },
    { name: "BETA", left: "40%", width: "15%", color: "bg-neu-primary" },
    { name: "PROD", left: "50%", width: "5%", color: "bg-neu-primary" },
  ];

  return (
    <div className="neu-flat rounded-3xl p-6 overflow-x-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 min-w-[800px]">
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
          <h3 className="text-lg font-bold text-gray-800">Timeline Chart</h3>
        </div>
        <div className="flex gap-3">
          <div className="neu-btn rounded-lg px-3 py-1.5 flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            1 Oct 23 - 30 Nov 23
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
          <div className="neu-btn rounded-lg p-1.5 flex items-center justify-center text-gray-600 cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="5" r="1" />
              <circle cx="12" cy="19" r="1" />
            </svg>
          </div>
          <div className="neu-btn rounded-lg p-1.5 flex items-center justify-center text-gray-600 cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
            </svg>
          </div>
        </div>
      </div>

      <div className="min-w-[800px]">
        {/* Column headers */}
        <div className="flex border-b border-gray-200/60 pb-2">
          <div className="w-48 flex-shrink-0 text-sm font-bold text-gray-800">Task</div>
          <div className="flex-1 grid grid-cols-3">
            {weeks.map((w) => (
              <div key={w} className="flex flex-col">
                <span className="text-xs font-semibold text-gray-500 mb-2">{w}</span>
                <div className="flex justify-between text-[10px] text-gray-400 px-1">
                  {weekDays.map((d, i) => (
                    <span key={i}>{d}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gantt rows */}
        <div className="py-2 space-y-4 relative">
          {/* Background grid */}
          <div className="absolute inset-0 left-48 flex">
            <div className="flex-1 grid grid-cols-3">
              {weeks.map((_, wi) => (
                <div key={wi} className="flex justify-between border-l border-gray-200/30 h-full">
                  {weekDays.map((_, di) => (
                    <div key={di} className="flex-1 border-r border-gray-200/30 h-full" />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Task bars */}
          {tasks.map((task) => (
            <div key={task.name} className="flex items-center relative z-10">
              <div className="w-48 flex-shrink-0 text-xs font-semibold text-gray-600">{task.name}</div>
              <div className="flex-1 relative h-6">
                <div
                  className={`absolute top-1 bottom-1 rounded-full ${task.color} shadow-sm flex items-center justify-end pr-1`}
                  style={{
                    left: task.left,
                    width: task.width,
                    backgroundImage: task.striped
                      ? "repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,0.3) 5px, rgba(255,255,255,0.3) 10px)"
                      : "none",
                  }}
                >
                  <div className="w-4 h-4 rounded-full bg-gray-800 border border-white shadow-sm flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
