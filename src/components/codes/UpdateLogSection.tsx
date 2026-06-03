import type { ReactNode } from "react";

interface LogEntry {
  date: string;
  type: "addition" | "expiration" | "update";
  title: ReactNode;
  details: ReactNode;
}

const LOGS: LogEntry[] = [
  {
    date: "Jun 2, 2026",
    type: "addition",
    title: <>New QOL Update <span className="seo-code-cap" /> Added</>,
    details: <>Successfully added and verified 'QOLFIXES' for 250 free <span className="seo-credits" />.</>
  },
  {
    date: "Jun 1, 2026",
    type: "addition",
    title: <>Teaser Update <span className="seo-code-cap" /> Released</>,
    details: <>Released 'BIGUPDATENEXTWEEK' granting 100 <span className="seo-credits" /> ahead of the upcoming update.</>
  },
  {
    date: "May 28, 2026",
    type: "addition",
    title: <>Bug Compensation <span className="seo-code-cap" /> Released</>,
    details: <>Released 'SORRYFORTHEBUGS' for 75 <span className="seo-credits" /> to compensate for server lobby issues.</>
  },
  {
    date: "May 20, 2026",
    type: "addition",
    title: <><span className="seo-atrain" /> Update <span className="seo-code-cap" /> Released</>,
    details: <>Added 'ATRAIN' <span className="seo-code" /> for 200 <span className="seo-credits" />, celebrating the integration of A-Train Temp V powers.</>
  },
  {
    date: "May 15, 2026",
    type: "addition",
    title: <>HTH Verification <span className="seo-code-cap" /> Added</>,
    details: <>Released 'HTH' for 75 <span className="seo-credits" />.</>
  },
  {
    date: "May 10, 2026",
    type: "addition",
    title: <>Lobby Milestone <span className="seo-code-cap" /> Released</>,
    details: <>Added 'LIKETHEGAME' for 125 <span className="seo-credits" />.</>
  },
  {
    date: "May 1, 2026",
    type: "expiration",
    title: <>Easter Brawl <span className="seo-codes" /> Expired</>,
    details: <><span className="seo-code-cap" /> 'SUPEBRAWL' (150 <span className="seo-credits" />) has expired and been relocated to the expired list.</>
  }
];

export function UpdateLogSection() {
  return (
    <section 
      id="update-log"
      aria-labelledby="update-log-heading" 
      className="border-t border-card-border px-6 py-10 sm:px-8"
    >
      <div className="flex items-center gap-2 mb-6">
        <h2 
          id="update-log-heading" 
          className="text-xs font-bold uppercase tracking-wider text-vought-red"
        >
          Daily Verification & Update Log
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-vought-red/30 to-transparent"></span>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l border-card-border ml-2 pl-5 space-y-5">
        {LOGS.map((log, idx) => (
          <div key={idx} className="relative text-xs">
            {/* Dot indicator */}
            <span className={`absolute -left-[21px] mt-1 h-2 w-2 rounded-full border border-black
              ${log.type === "addition" 
                ? "bg-vought-green" 
                : log.type === "expiration" 
                  ? "bg-vought-red" 
                  : "bg-vought-blue"
              }`}
            ></span>

            {/* Content box */}
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] font-semibold text-zinc-500">{log.date}</span>
              <h3 className="font-bold text-white leading-normal sm:text-xs">
                {log.title}
              </h3>
              <p className="text-zinc-500 leading-normal">
                {log.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
