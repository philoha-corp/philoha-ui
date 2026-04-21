import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Item = {
  who: string;
  what: React.ReactNode;
  when: string;
};

const items: Item[] = [
  {
    who: "Board",
    what: (
      <>
        updated <span className="font-medium text-foreground">company</span>
      </>
    ),
    when: "10h ago",
  },
  {
    who: "Board",
    what: (
      <>
        changed status from{" "}
        <span className="font-medium text-foreground">in review</span> to{" "}
        <span className="font-medium text-foreground">cancelled</span> on{" "}
        <span className="text-primary">OPL-9</span> — Fix Jira bug GO-1110
      </>
    ),
    when: "10h ago",
  },
  {
    who: "Board",
    what: (
      <>
        issue read marked <span className="text-primary">OPL-9</span> — Fix Jira
        bug GO-1110
      </>
    ),
    when: "10h ago",
  },
];

export function RecentActivity() {
  return (
    <Card className="gradient-card border-border/70 p-0 shadow-sm">
      <div className="border-b border-border/70 px-5 py-3">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Recent Activity
        </h3>
      </div>
      <ul className="divide-y divide-border/60">
        {items.map((it, i) => (
          <li
            key={i}
            className="flex items-start gap-3 px-5 py-3 text-sm text-muted-foreground"
          >
            <span
              className={cn(
                "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-primary text-[10px] font-semibold text-primary-foreground",
              )}
              aria-hidden
            >
              BO
            </span>
            <p className="flex-1 leading-snug">
              <span className="font-medium text-foreground">{it.who}</span>{" "}
              {it.what}
            </p>
            <span className="shrink-0 text-xs text-muted-foreground">
              {it.when}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
