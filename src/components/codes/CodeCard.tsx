"use client";

import { useState } from "react";
import { Code } from "@/lib/codes";

interface CodeCardProps {
  codeItem: Code;
}

export function CodeCard({ codeItem }: CodeCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    // Avoid double trigger if clicking button vs container
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(codeItem.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  const isNew = codeItem.isNew;

  return (
    <div
      onClick={handleCopy}
      className={`group relative flex cursor-pointer flex-col justify-between rounded-lg border transition-all duration-300 p-5 select-none
        ${copied 
          ? "border-emerald-500/50 bg-emerald-950/10 shadow-[0_0_15px_rgba(16,185,129,0.1)]" 
          : "border-card-border bg-card-bg hover:border-vought-red/50 hover:shadow-[0_0_15px_rgba(225,29,72,0.1)] hover:scale-[1.01]"
        }`}
    >
      {/* Top Section */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-1">
          {/* Status badge & added date */}
          <div className="flex items-center gap-2">
            {isNew && (
              <span className="rounded bg-rose-500/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-rose-500 border border-rose-500/20">
                NEW
              </span>
            )}
            {codeItem.status === "unverified" && (
              <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-500 border border-amber-500/20">
                UNVERIFIED
              </span>
            )}
            <span className="text-[10px] text-zinc-500">
              Added {new Date(codeItem.addedDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            </span>
          </div>

          {/* Reward Amount */}
          <div className="mt-1 text-sm font-semibold text-zinc-300 sm:text-base">
            🎁 Reward: <span className="text-white font-extrabold">{codeItem.rewardAmount}{" "}<span className="seo-credits" /></span>
          </div>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className={`flex h-8 items-center justify-center rounded px-3 text-xs font-semibold uppercase tracking-wider transition-colors shrink-0
            ${copied 
              ? "bg-emerald-500 text-black" 
              : "bg-zinc-800 hover:bg-vought-red text-zinc-200 hover:text-white"
            }`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Code Monospace Display */}
      <div className="mt-3 flex items-center justify-between rounded bg-black/40 border border-white/5 p-2 font-mono text-sm tracking-wider font-bold">
        <span className="text-vought-blue group-hover:text-vought-red transition-colors">
          {codeItem.code}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`h-4.5 w-4.5 transition-colors ${copied ? "text-emerald-400" : "text-zinc-500 group-hover:text-vought-red"}`}
        >
          {copied ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-3a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.375c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v10.5c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.375z"
            />
          )}
        </svg>
      </div>

      {/* Note text if exists */}
      {codeItem.note && (
        <span className="mt-2 text-[10px] text-zinc-500 italic">
          ℹ️ {codeItem.note}
        </span>
      )}
    </div>
  );
}
