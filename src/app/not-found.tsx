import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Access Denied | Survive Homelander Wiki",
  description: "The requested Vought database node could not be found.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[85vh] flex-col items-center justify-center bg-background px-4 py-16 text-center lab-grid">
      <div className="w-full max-w-md rounded border border-rose-900/50 bg-[#0a0a0f]/80 p-8 glass-panel shadow-[0_0_30px_rgba(225,29,72,0.15)] relative overflow-hidden">
        {/* Glowing top line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-vought-red to-transparent"></div>

        {/* Hazard alert icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded bg-rose-500/10 text-vought-red border border-rose-500/20 mb-6">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vought-red opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-vought-red"></span>
          </span>
        </div>

        {/* Access Denied Codes */}
        <div className="font-mono text-xs font-bold tracking-widest text-vought-red uppercase mb-1">
          SECURE CONNECTION FAILURE
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl code-font mb-4">
          ERROR 404
        </h1>

        <div className="h-px w-full bg-card-border mb-4"></div>

        {/* Lore details */}
        <h2 className="text-sm font-bold text-zinc-300 mb-2 uppercase tracking-wide">
          Classified Node Not Found
        </h2>
        <p className="text-xs text-zinc-500 leading-relaxed mb-6">
          The requested database sector is either restricted, offline, or does not exist under Vought International security records. Please check the address or return to authorized zones.
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-3 sm:flex-row justify-center">
          <Link
            href="/codes"
            className="flex h-10 items-center justify-center rounded bg-vought-red hover:bg-rose-700 px-5 text-xs font-bold uppercase tracking-wider text-white transition-colors border border-rose-500/30 hover:shadow-[0_0_15px_rgba(225,29,72,0.3)] gap-1"
          >
            Go to <span className="seo-codes capitalize" /> Lab
          </Link>
          <a
            href="https://www.roblox.com/groups/33719001/Sushi-Deluxe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 items-center justify-center rounded border border-card-border bg-zinc-900/60 hover:bg-zinc-800 px-5 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors gap-1"
          >
            <span className="seo-roblox" /> <span className="seo-group-cap" /> ↗
          </a>
        </div>
      </div>
    </main>
  );
}
