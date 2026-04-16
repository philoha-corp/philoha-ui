"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import MetricCards from "@/components/metric-cards";
import CampaignsChart from "@/components/campaigns-chart";
import ScheduleEvents from "@/components/schedule-events";
import TimelineChart from "@/components/timeline-chart";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-neu-bg font-sans text-neu-text">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-neu-bg">
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />

        <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-10 pt-8 pb-10 custom-scrollbar">
          <MetricCards />

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
            <CampaignsChart />
            <ScheduleEvents />
          </div>

          <TimelineChart />
        </div>
      </main>
    </div>
  );
}
