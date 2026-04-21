import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type KpiCardProps = {
  value: string;
  label: string;
  caption?: string;
  icon?: React.ReactNode;
  iconClassName?: string;
};

export function KpiCard({
  value,
  label,
  caption,
  icon,
  iconClassName,
}: KpiCardProps) {
  return (
    <Card className="gradient-card flex flex-col gap-2 border-border/70 p-5 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <span className="text-3xl font-bold tabular-nums text-foreground">
          {value}
        </span>
        {icon ? (
          <span
            className={cn(
              "grid h-7 w-7 place-items-center rounded-md text-muted-foreground",
              iconClassName,
            )}
          >
            {icon}
          </span>
        ) : null}
      </div>
      <div>
        <p className="text-sm font-medium text-foreground">{label}</p>
        {caption ? (
          <p className="text-xs text-muted-foreground">{caption}</p>
        ) : null}
      </div>
    </Card>
  );
}
