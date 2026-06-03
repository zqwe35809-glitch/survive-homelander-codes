import { Code } from "@/lib/codes";
import { CodeCard } from "./CodeCard";

interface ActiveCodesSectionProps {
  codes: Code[];
}

export function ActiveCodesSection({ codes }: ActiveCodesSectionProps) {
  return (
    <section 
      id="active-codes"
      aria-labelledby="active-codes-heading" 
      className="px-4 py-4 sm:px-6"
    >
      {/* Visual Section Title */}
      <div className="flex items-center gap-2 mb-3">
        <h2 
          id="active-codes-heading" 
          className="text-xs font-bold uppercase tracking-wider text-vought-red"
        >
          <span className="seo-active" />{" "}<span className="seo-redeem-cap" />{" "}<span className="seo-codes" />
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-vought-red/30 to-transparent"></span>
      </div>

      {/* Grid of Codes - Scaled to 4-5 columns for full-screen layout */}
      {codes.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {codes.map((code) => (
            <CodeCard key={code.id} codeItem={code} />
          ))}
        </div>
      ) : (
        <div className="rounded border border-dashed border-card-border p-6 text-center text-sm text-zinc-500 bg-card-bg">
          No active codes found. Check back later!
        </div>
      )}
    </section>
  );
}
