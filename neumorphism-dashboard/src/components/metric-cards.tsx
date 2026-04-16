export default function MetricCards() {
  const cards = [
    { label: "Expenses", value: "₹125,400", change: "+8.5%", up: false },
    { label: "Income", value: "₹42,850", change: "+12.3%", up: true },
    { label: "Expenses", value: "₹132,600", change: "+9.2%", up: false },
    { label: "Income", value: "₹48,200", change: "+15.1%", up: true },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {cards.map((card, i) => (
        <div
          key={i}
          className="neu-flat rounded-2xl p-5 flex flex-col justify-between h-36 relative overflow-hidden group transition-all"
        >
          <div className="flex items-start gap-3 relative z-10">
            <div className="w-10 h-10 rounded-xl neu-pressed flex items-center justify-center text-gray-600">
              {card.up ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              )}
            </div>
            <h4 className="text-sm font-semibold text-gray-600 mt-2">{card.label}</h4>
          </div>
          <div className="relative z-10">
            <p className="text-2xl font-bold text-gray-800 tracking-tight">{card.value}</p>
            <div className={`flex items-center gap-1 mt-1 text-xs font-bold ${card.up ? "text-[#16A34A]" : "text-[#DC2626]"}`}>
              {card.up ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              )}
              {card.change}
            </div>
          </div>
          {/* Mini sparkline */}
          <div className="absolute right-0 top-4 w-24 h-16 opacity-40">
            <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id={`gradUp${i}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#16A34A" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#16A34A" stopOpacity="0" />
                </linearGradient>
                <linearGradient id={`gradDown${i}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#DC2626" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
                </linearGradient>
              </defs>
              {card.up ? (
                <>
                  <path d="M0,40 Q25,30 50,45 T100,10" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" />
                  <path d="M0,40 Q25,30 50,45 T100,10 L100,50 L0,50 Z" fill={`url(#gradUp${i})`} />
                </>
              ) : (
                <>
                  <path d="M0,10 Q25,20 50,15 T100,40" fill="none" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
                  <path d="M0,10 Q25,20 50,15 T100,40 L100,50 L0,50 Z" fill={`url(#gradDown${i})`} />
                </>
              )}
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
