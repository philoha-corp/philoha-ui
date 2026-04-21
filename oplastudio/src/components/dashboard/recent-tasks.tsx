import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

type Task = {
  id: string;
  agent: { code: string; name: string; tone: "engineering" | "staff" };
  when: string;
  title: string;
  done?: boolean;
};

const tasks: Task[] = [
  {
    id: "OPL-9",
    agent: { code: "SE", name: "Staff Engineer", tone: "staff" },
    when: "10h ago",
    title: "Fix Jira bug GO-1110",
    done: false,
  },
  {
    id: "OPL-12",
    agent: { code: "EN", name: "Engineering", tone: "engineering" },
    when: "3d ago",
    title: "fix bug jira use skill fixbug GO-1140",
    done: true,
  },
];

const agentTone = {
  engineering: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
  staff: "bg-violet-500/15 text-violet-700 dark:text-violet-300",
};

export function RecentTasks() {
  return (
    <Card className="gradient-card border-border/70 p-0 shadow-sm">
      <div className="border-b border-border/70 px-5 py-3">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Recent Tasks
        </h3>
      </div>
      <ul className="divide-y divide-border/60">
        {tasks.map((t) => (
          <li
            key={t.id}
            className="flex items-center gap-3 px-5 py-3 text-sm"
          >
            {t.done ? (
              <span className="grid h-5 w-5 place-items-center rounded-full bg-success text-success-foreground">
                <Check className="h-3 w-3" />
              </span>
            ) : (
              <Circle className="h-5 w-5 text-muted-foreground/60" />
            )}
            <span className="font-medium text-foreground">{t.id}</span>
            <Badge
              variant="secondary"
              className={cn(
                "gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium",
                agentTone[t.agent.tone],
              )}
            >
              <span className="rounded-sm bg-foreground/10 px-1 text-[10px] font-semibold uppercase">
                {t.agent.code}
              </span>
              {t.agent.name}
            </Badge>
            <span className="text-xs text-muted-foreground">{t.when}</span>
            <span className="ml-auto truncate text-foreground">{t.title}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
