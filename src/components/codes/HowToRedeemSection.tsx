export function HowToRedeemSection() {
  return (
    <section 
      id="how-to-redeem"
      aria-labelledby="how-to-redeem-heading" 
      className="border-t border-card-border px-4 py-6 sm:px-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <h2 
          id="how-to-redeem-heading" 
          className="text-xs font-bold uppercase tracking-wider text-vought-blue"
        >
          How to <span className="seo-redeem" /> <span className="seo-codes" />
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-vought-blue/30 to-transparent"></span>
      </div>

      {/* 4 Steps Section */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Step 1 */}
        <div className="rounded border border-card-border bg-card-bg/40 p-4">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-vought-blue/10 text-xs font-bold text-vought-blue border border-vought-blue/20 mb-2">
            1
          </div>
          <h3 className="text-sm font-bold text-white mb-1">Join <span className="seo-roblox" /> <span className="seo-group-cap" /></h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            First, make sure you are a member of the <a href="https://www.roblox.com/groups/33719001/Sushi-Deluxe" target="_blank" rel="noopener noreferrer" className="text-vought-blue hover:underline font-semibold">Sushi Deluxe</a> <span className="seo-roblox" /> <span className="seo-group" />.
          </p>
        </div>

        {/* Step 2 */}
        <div className="rounded border border-card-border bg-card-bg/40 p-4">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-vought-blue/10 text-xs font-bold text-vought-blue border border-vought-blue/20 mb-2">
            2
          </div>
          <h3 className="text-sm font-bold text-white mb-1">Launch Game</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Open <span className="seo-roblox" /> and launch the official <a href="https://www.roblox.com/games/16439369989/Survive-Homelander" target="_blank" rel="noopener noreferrer" className="text-vought-blue hover:underline font-semibold"><span className="seo-survive" /> <span className="seo-homelander" /></a> experience.
          </p>
        </div>

        {/* Step 3 */}
        <div className="rounded border border-card-border bg-card-bg/40 p-4">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-vought-blue/10 text-xs font-bold text-vought-blue border border-vought-blue/20 mb-2">
            3
          </div>
          <h3 className="text-sm font-bold text-white mb-1">Open <span className="seo-codes" /> Menu</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            In the lobby menu, <strong className="text-zinc-200">click the <span className="seo-codes" /> button</strong> to open the redeem popup.
          </p>
        </div>

        {/* Step 4 */}
        <div className="rounded border border-card-border bg-card-bg/40 p-4">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-vought-blue/10 text-xs font-bold text-vought-blue border border-vought-blue/20 mb-2">
            4
          </div>
          <h3 className="text-sm font-bold text-white mb-1"><span className="seo-redeem-cap" /> Rewards</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Paste or type the working code exactly as shown and click <strong className="text-zinc-200"><span className="seo-redeem-cap" /></strong> to claim your free <span className="seo-credits" />.
          </p>
        </div>
      </div>

      {/* Troubleshooting Sub-box */}
      <div className="mt-4 rounded border border-rose-950/30 bg-rose-950/5 p-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
          Troubleshooting: Why is the <span className="seo-code" /> not working?
        </h4>
        <ul className="list-inside list-disc text-xs text-zinc-400 space-y-1.5 leading-relaxed">
          <li>
            <strong className="text-zinc-300"><span className="seo-roblox" /> <span className="seo-group-cap" /> membership:</strong> You MUST join the Sushi Deluxe <span className="seo-group" /> before the <span className="seo-codes" /> can be authorized.
          </li>
          <li>
            <strong className="text-zinc-300">Case sensitivity:</strong> <span className="seo-codes" /> must be entered exactly in CAPITALS as listed above.
          </li>
          <li>
            <strong className="text-zinc-300"><span className="seo-code" /> expiration:</strong> The <span className="seo-code" /> might have expired recently. Check our <span className="seo-expired" /> <span className="seo-codes" /> section.
          </li>
          <li>
            <strong className="text-zinc-300">Already used:</strong> You can only redeem each <span className="seo-code" /> once per <span className="seo-roblox" /> account.
          </li>
        </ul>
      </div>
    </section>
  );
}
