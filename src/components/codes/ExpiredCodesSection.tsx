import { Code } from "@/lib/codes";

interface ExpiredCodesSectionProps {
  codes: Code[];
}

export function ExpiredCodesSection({ codes }: ExpiredCodesSectionProps) {
  return (
    <section 
      id="expired"
      aria-labelledby="expired-codes-heading" 
      className="border-t border-card-border px-4 py-6 sm:px-6"
    >
      <details className="group border border-card-border rounded bg-card-bg/20 overflow-hidden">
        <summary className="flex cursor-pointer items-center justify-between p-4 font-bold text-xs uppercase tracking-wider text-zinc-400 hover:bg-card-bg/40 select-none">
          <span id="expired-codes-heading" className="flex items-center gap-2">
            📂 <span className="seo-expired" /> <span className="seo-codes" /> ({codes.length})
          </span>
          <span className="text-[10px] text-zinc-500 group-open:rotate-180 transition-transform duration-200">
            ▼
          </span>
        </summary>

        <div className="border-t border-card-border p-4">
          <p className="text-xs text-zinc-500 mb-3 leading-relaxed">
            These <span className="seo-codes" /> are no longer working. They are preserved for historical reference so you don't waste time trying to <span className="seo-redeem" /> them in-game.
          </p>

          {codes.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-card-border text-zinc-500 font-semibold">
                    <th className="py-2 pr-4"><span className="seo-code-cap" /></th>
                    <th className="py-2 pr-4">Reward</th>
                    <th className="py-2 pr-4">Expiry Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-card-border text-zinc-400">
                  {codes.map((codeItem) => (
                    <tr key={codeItem.id} className="hover:bg-black/20">
                      <td className="py-2 pr-4 font-mono font-bold line-through text-zinc-600">
                        {codeItem.code}
                      </td>
                      <td className="py-2 pr-4 text-zinc-500">
                        {codeItem.rewardAmount}{" "}<span className="seo-credits" />
                      </td>
                      <td className="py-2 pr-4 text-[11px] text-zinc-600">
                        {codeItem.expiredDate ? new Date(codeItem.expiredDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "N/A"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center text-xs text-zinc-600 py-2">
              No <span className="seo-expired" /> <span className="seo-codes" /> recorded yet.
            </div>
          )}
        </div>
      </details>
    </section>
  );
}
