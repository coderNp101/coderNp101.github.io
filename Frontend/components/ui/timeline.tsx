"use client";

export function Timeline({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4">{children}</div>;
}

export function TimelineItem({ children }: { children: React.ReactNode }) {
  return <div className="border-l-2 border-muted pl-6 pb-6 ml-3 relative">{children}</div>;
}

export function TimelineItemTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <div className="absolute left-[-8px] h-4 w-4 rounded-full bg-primary"></div>
      <h3 className="text-lg font-medium">{children}</h3>
    </div>
  );
}

export function TimelineItemContent({ children }: { children: React.ReactNode }) {
  return <div className="mt-2 text-muted-foreground">{children}</div>;
}