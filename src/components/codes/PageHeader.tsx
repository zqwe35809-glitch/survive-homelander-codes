interface PageHeaderProps {
  activeCount: number;
  lastUpdated: string;
}

export function PageHeader({ activeCount, lastUpdated }: PageHeaderProps) {
  // Format standard presentation date
  const displayDate = new Date(lastUpdated).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="flex h-14 items-center justify-between border-b border-card-border px-4 sm:px-6">
      {/* Primary Semantic H1 */}
      <h1 className="text-lg font-bold tracking-tight text-white sm:text-xl">
        Survive Homelander Codes
      </h1>

      {/* Inline Metadata Indicator */}
      <div className="flex items-center gap-3 text-xs sm:text-sm">
        <span className="flex items-center gap-1.5 text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-vought-blue animate-pulse"></span>
          Updated {displayDate}
        </span>
        <span className="h-4 w-px bg-card-border"></span>
        <span className="flex items-center gap-1.5 font-medium text-vought-green">
          {activeCount} Active
        </span>
      </div>

      {/* Screen reader only helper to inject SEO keyword variations naturally for crawlers */}
      <p className="sr-only">
        All active Roblox Survive Homelander codes and codes for survive homelander on Roblox. Updated daily to redeem free credits.
      </p>
    </header>
  );
}
