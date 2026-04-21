import { Bot, CircleAlert, DollarSign, ShieldCheck } from "lucide-react";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { RunCard } from "@/components/dashboard/run-card";
import { KpiCard } from "@/components/dashboard/kpi-card";
import {
  ChartCard,
  cssVar,
  makeDayLabels,
} from "@/components/dashboard/chart-card";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { RecentTasks } from "@/components/dashboard/recent-tasks";

const days = makeDayLabels();

const runActivity = [
  {
    name: "failed",
    color: cssVar("chart-4"),
    values: [0, 0, 0, 0, 0, 5, 6, 0, 2, 0, 0, 0, 0, 0],
  },
  {
    name: "succeeded",
    color: cssVar("chart-2"),
    values: [0, 0, 0, 0, 1, 6, 8, 1, 3, 0, 0, 0, 0, 0],
  },
];

const issuesByPriority = [
  {
    name: "Critical",
    color: cssVar("chart-4"),
    values: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    name: "High",
    color: cssVar("chart-3"),
    values: [0, 0, 0, 0, 0, 4, 7, 1, 0, 0, 0, 0, 0, 0],
  },
  {
    name: "Medium",
    color: cssVar("chart-3"),
    values: [0, 0, 0, 0, 1, 5, 9, 0, 1, 0, 0, 0, 0, 0],
  },
  {
    name: "Low",
    color: cssVar("chart-1"),
    values: [0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0],
  },
];

const issuesByStatus = [
  {
    name: "Done",
    color: cssVar("chart-2"),
    values: [0, 0, 0, 0, 0, 4, 6, 0, 2, 0, 0, 0, 0, 0],
  },
  {
    name: "Cancelled",
    color: cssVar("chart-5"),
    values: [0, 0, 0, 0, 1, 3, 5, 1, 1, 0, 0, 0, 0, 0],
  },
];

const successRate = [
  {
    name: "rate",
    color: cssVar("chart-3"),
    values: [0, 0, 0, 0, 1, 3, 2, 0, 1, 0, 0, 0, 0, 0],
  },
  {
    name: "succeeded",
    color: cssVar("chart-2"),
    values: [0, 0, 0, 0, 2, 5, 7, 1, 3, 0, 0, 0, 0, 0],
  },
];

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-background">
        {/* Top bar */}
        <header className="sticky top-0 z-10 flex h-14 items-center gap-3 border-b border-border/60 bg-background/80 px-6 backdrop-blur">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-2 text-muted-foreground" />
            <Separator orientation="vertical" className="mx-1 h-6" />
            <h1 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Dashboard
            </h1>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
          </div>
        </header>

        <div className="flex-1 space-y-6 p-6">
          {/* Top: 4 run cards */}
          <section
            aria-label="Recent runs"
            className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
          >
            <RunCard
              agent={{ code: "EN", name: "Engineering", tone: "engineering" }}
              finishedAgo="4d ago"
              taskId="OPL-12"
              taskTitle="fix bug jira use skill fixbug GO-1140"
              runId="Engineering worked for 35 seconds"
              status="succeeded"
              ranAgo="3d ago"
            />
            <RunCard
              agent={{ code: "EN", name: "Engineering", tone: "engineering" }}
              finishedAgo="4d ago"
              taskId="OPL-12"
              taskTitle="fix bug jira use skill fixbug GO-1140"
              runId="57587522"
              status="succeeded"
              ranAgo="3d ago"
            />
            <RunCard
              agent={{ code: "SE", name: "Staff Engineer", tone: "staff" }}
              finishedAgo="6d ago"
              taskId="OPL-9"
              taskTitle="Fix Jira bug GO-1110"
              runId="84ae9a24"
              status="succeeded"
              ranAgo="5d ago"
            />
            <RunCard
              agent={{ code: "SE", name: "Staff Engineer", tone: "staff" }}
              finishedAgo="6d ago"
              taskId="OPL-9"
              taskTitle="Fix Jira bug GO-1110"
              runId="b487ebad"
              status="succeeded"
              ranAgo="5d ago"
            />
          </section>

          {/* KPI row */}
          <section
            aria-label="Key metrics"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
          >
            <KpiCard
              value="9"
              label="Agents Enabled"
              caption="0 running, 1 paused, 0 errors"
              icon={<Bot className="h-4 w-4" />}
            />
            <KpiCard
              value="0"
              label="Tasks In Progress"
              caption="0 open, 0 blocked"
              icon={<CircleAlert className="h-4 w-4" />}
            />
            <KpiCard
              value="$0.00"
              label="Month Spend"
              caption="Unlimited budget"
              icon={<DollarSign className="h-4 w-4" />}
            />
            <KpiCard
              value="0"
              label="Pending Approvals"
              caption="Awaiting board review"
              icon={<ShieldCheck className="h-4 w-4" />}
            />
          </section>

          {/* Charts row */}
          <section
            aria-label="Trends"
            className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
          >
            <ChartCard
              title="Run Activity"
              caption="Last 14 days"
              days={days}
              series={runActivity}
              mode="grouped"
            />
            <ChartCard
              title="Issues by Priority"
              caption="Last 14 days"
              days={days}
              series={issuesByPriority}
              mode="grouped"
              legend
            />
            <ChartCard
              title="Issues by Status"
              caption="Last 14 days"
              days={days}
              series={issuesByStatus}
              mode="stacked"
              legend
            />
            <ChartCard
              title="Success Rate"
              caption="Last 14 days"
              days={days}
              series={successRate}
              mode="grouped"
            />
          </section>

          {/* Bottom: activity + tasks */}
          <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <RecentActivity />
            <RecentTasks />
          </section>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
