"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Header() {
  return (
    <header className="h-24 flex-shrink-0 flex items-center justify-between px-6 lg:px-10 z-10 relative bg-neu-bg">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="neu-btn w-10 h-10 rounded-xl text-gray-500 hover:text-gray-800" />
        <div className="hidden sm:flex items-center gap-2 text-sm">
          <span className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors font-medium">Home</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <span className="text-gray-800 font-bold">Dashboard</span>
        </div>
      </div>

      <div className="flex items-center gap-4 lg:gap-6">
        {/* Search */}
        <div className="hidden md:flex neu-pressed rounded-xl px-4 py-2 w-64 items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search anything..."
            className="bg-transparent border-none outline-none w-full text-sm text-gray-700 placeholder-gray-400 font-sans"
          />
        </div>

        <div className="flex items-center gap-3 lg:gap-5">
          {/* Notification bell */}
          <button className="w-10 h-10 rounded-full neu-btn flex items-center justify-center text-gray-500 relative hover:text-gray-700 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            <span className="absolute top-2 right-2 w-2 h-2 bg-neu-danger rounded-full border-2 border-neu-bg" />
          </button>

          {/* Avatar */}
          <div className="h-10 w-10 rounded-full neu-flat-sm p-0.5 cursor-pointer">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=e0e7ff"
              alt="User"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
