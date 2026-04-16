export default function ScheduleEvents() {
  const days = [
    { day: "Mon", date: 29, past: true },
    { day: "Tue", date: 30, past: true },
    { day: "Wed", date: 31, active: true },
    { day: "Thu", date: 1 },
    { day: "Fri", date: 2 },
    { day: "Sat", date: 3 },
    { day: "Sun", date: 4 },
  ];

  const events = [
    { title: "Client Sync Call", time: "9 AM - 10 AM", color: "bg-neu-primary" },
    { title: "Design Review", time: "11:30 AM - 1 PM", color: "bg-[#D97706]" },
    { title: "Team Standup", time: "3 PM - 4 PM", color: "bg-[#16A34A]" },
  ];

  return (
    <div className="neu-flat rounded-3xl p-6 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
          <h3 className="text-lg font-bold text-gray-800">Schedule &amp; Events</h3>
        </div>
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
      </div>

      {/* Calendar strip */}
      <div className="flex justify-between mb-8 px-2">
        {days.map((d) => (
          <div key={d.day} className="flex flex-col items-center gap-2">
            <span className="text-xs font-semibold text-gray-800">{d.day}</span>
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all ${
                d.active
                  ? "bg-neu-primary text-white shadow-md"
                  : d.past
                    ? "text-gray-400"
                    : "text-gray-600 cursor-pointer"
              }`}
            >
              {d.date}
            </div>
          </div>
        ))}
      </div>

      {/* Events timeline */}
      <div className="flex-1 space-y-5 relative before:absolute before:inset-y-2 before:left-[3px] before:w-[2px] before:bg-gray-200">
        {events.map((evt) => (
          <div key={evt.title} className="pl-6 relative">
            <div className={`absolute left-0 top-1.5 w-2 h-2 rounded-full ${evt.color} shadow-sm border border-white`} />
            <p className="text-sm font-semibold text-gray-800">{evt.title}</p>
            <p className="text-xs text-gray-500 mt-0.5">{evt.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
