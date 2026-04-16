"use client";

import { AppSidebar } from "@/components/sidebar";
import Header from "@/components/header";
import MetricCards from "@/components/metric-cards";
import CampaignsChart from "@/components/campaigns-chart";
import ScheduleEvents from "@/components/schedule-events";
import TimelineChart from "@/components/timeline-chart";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Home() {
  return (
    <TooltipProvider>
      <SidebarProvider
        className="h-screen bg-neu-bg font-sans text-neu-text"
      >
        <AppSidebar />

        <SidebarInset className="bg-neu-bg overflow-hidden">
          <Header />

          <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-10 pt-8 pb-10 custom-scrollbar">
            <MetricCards />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
              <CampaignsChart />
              <ScheduleEvents />
            </div>

            <TimelineChart />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
