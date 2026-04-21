import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type RunCardProps = {
  agent: { code: string; name: string; tone?: "engineering" | "staff" };
  finishedAgo: string;
  taskId: string;
  taskTitle: string;
  runId: string;
  status: "succeeded" | "failed" | "running" | "cancelled";
  ranAgo: string;
};

const agentTone: Record<NonNullable<RunCardProps["agent"]["tone"]>, string> = {
  engineering: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
  staff: "bg-violet-500/15 text-violet-700 dark:text-violet-300",
};

const statusTone: Record<RunCardProps["status"], string> = {
  succeeded:
    "bg-success/15 text-success-foreground dark:text-[color:var(--success)]",
  failed: "bg-destructive/15 text-destructive",
  running: "bg-primary/15 text-primary",
  cancelled: "bg-muted text-muted-foreground",
};

export function RunCard({
  agent,
  finishedAgo,
  taskId,
  taskTitle,
  runId,
  status,
  ranAgo,
}: RunCardProps) {
  return (
    <Card className="gradient-card relative overflow-hidden border-border/70 p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <Badge
          variant="secondary"
          className={cn(
            "gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium",
            agentTone[agent.tone ?? "engineering"],
          )}
        >
          <span className="rounded-sm bg-foreground/10 px-1 text-[10px] font-semibold uppercase">
            {agent.code}
          </span>
          {agent.name}
        </Badge>
        <button
          aria-label="Open run"
          className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <ExternalLink className="h-3.5 w-3.5" />
        </button>
      </div>

      <p className="mt-2 text-xs text-muted-foreground">Finished {finishedAgo}</p>

      <p className="mt-6 line-clamp-2 text-sm font-medium leading-snug text-foreground">
        <span className="text-primary">{taskId}</span> - {taskTitle}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
        <Badge
          variant="secondary"
          className={cn(
            "gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium",
            agentTone[agent.tone ?? "engineering"],
          )}
        >
          <span className="rounded-sm bg-foreground/10 px-1 text-[10px] font-semibold uppercase">
            {agent.code}
          </span>
          {agent.name}
        </Badge>
        <span>run</span>
        <span className="font-mono text-[11px] text-foreground/70">{runId}</span>
        <Badge
          className={cn(
            "rounded-full px-2 py-0.5 text-[11px] font-medium",
            statusTone[status],
          )}
        >
          {status}
        </Badge>
        <span className="ml-auto">{ranAgo}</span>
      </div>
    </Card>
  );
}
