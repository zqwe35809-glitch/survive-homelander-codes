import type { ReactNode } from "react";

interface FAQItem {
  question: ReactNode;
  answer: ReactNode;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: <>What are all the <span className="seo-active" /> <span className="seo-survive" /> <span className="seo-homelander" /> <span className="seo-codes" />?</>,
    answer: <>Currently, the working <span className="seo-codes" /> for <span className="seo-roblox" /> <span className="seo-survive" /> <span className="seo-homelander" /> include QOLFIXES (250 <span className="seo-credits" />), BIGUPDATENEXTWEEK (100 <span className="seo-credits" />), ATRAIN (200 <span className="seo-credits" />), SORRYFORTHEBUGS (75 <span className="seo-credits" />), HTH (75 <span className="seo-credits" />), and LIKETHEGAME (125 <span className="seo-credits" />). Make sure you <span className="seo-redeem" /> them before they expire!</>
  },
  {
    question: <>How do I <span className="seo-redeem" /> <span className="seo-codes" /> in <span className="seo-survive" /> <span className="seo-homelander" />?</>,
    answer: <>First, you must join the Sushi Deluxe <span className="seo-roblox" /> <span className="seo-group" />. Once joined, launch <span className="seo-survive" /> <span className="seo-homelander" />, click on the '<span className="seo-codes capitalize" />' button located in the lobby menu, paste or type the <span className="seo-active" /> <span className="seo-code" /> exactly as it is shown, and click '<span className="seo-redeem capitalize" />' to claim your rewards.</>
  },
  {
    question: <>How do I get <span className="seo-atrain" /> in <span className="seo-survive" /> <span className="seo-homelander" />?</>,
    answer: <>You can unlock <span className="seo-atrain" />'s Temp V ability by <span className="seo-redeem" />ing the <span className="seo-active" /> <span className="seo-code" /> 'ATRAIN'. This grants your character speed boosts and makes you incredibly fast during rounds inside Vought Tower.</>
  },
  {
    question: <>How do I use blood manipulation in <span className="seo-survive" /> <span className="seo-homelander" />?</>,
    answer: <>Blood manipulation is a specialized character ability. You activate it by charging up your ability meter during gameplay and pressing the designated key. It temporarily slows or paralyzes enemy targets in your vicinity.</>
  },
  {
    question: <>How do I use Temp V in <span className="seo-survive" /> <span className="seo-homelander" />?</>,
    answer: <>Temp V vials spawns randomly inside the Vought Tower map. Collect a vial by running over it to auto-activate a temporary superpower, giving you high-tier abilities like speed (<span className="seo-atrain" />) or laser eyes (Compound V) for a limited time.</>
  },
  {
    question: <>How do I gain rep in <span className="seo-survive" /> <span className="seo-homelander" />?</>,
    answer: <>Gaining reputation (rep) in <span className="seo-roblox" /> <span className="seo-survive" /> <span className="seo-homelander" /> requires completing objectives as a survivor, successfully escaping Vought Tower, or playing as the <span className="seo-homelander capitalize" /> and successfully hunting down other players.</>
  },
  {
    question: <>What are the <span className="seo-survive" /> <span className="seo-homelander" /> <span className="seo-roblox" /> controls?</>,
    answer: <>Standard <span className="seo-roblox" /> controls are: WASD to move, Shift to sprint, Space to jump, C to crouch/slide, and E to interact with doors, generators, and Temp V vials.</>
  },
  {
    question: <>Why aren't my <span className="seo-survive" /> <span className="seo-homelander" /> <span className="seo-codes" /> working?</>,
    answer: <>The most common reason is not being a member of the developer's <span className="seo-roblox" /> <span className="seo-group" /> (Sushi Deluxe). Other reasons include mistyping case-sensitive <span className="seo-codes" />, attempting to reuse a <span className="seo-code" />, or trying to <span className="seo-redeem" /> an expired <span className="seo-code" />.</>
  },
  {
    question: <>How often do new <span className="seo-codes" /> drop?</>,
    answer: <>The game developers release new <span className="seo-codes" /> to celebrate game milestones (like <span className="seo-code" /> likes thresholds), major version updates, or bug-fix patches. Keep this Wiki page bookmarked as we check and update <span className="seo-codes" /> daily.</>
  },
  {
    question: <>Do I need <span className="seo-roblox" /> Premium to <span className="seo-redeem" /> <span className="seo-codes" />?</>,
    answer: <>No, <span className="seo-roblox" /> Premium is not required. Anyone can <span className="seo-redeem" /> <span className="seo-codes" /> as long as they are part of the Sushi Deluxe <span className="seo-roblox" /> <span className="seo-group" />.</>
  }
];

export function FAQSection() {
  return (
    <section 
      id="faq"
      aria-labelledby="faq-heading" 
      className="border-t border-card-border px-6 py-10 sm:px-8"
    >
      <div className="flex items-center gap-2 mb-6">
        <h2 
          id="faq-heading" 
          className="text-xs font-bold uppercase tracking-wider text-vought-red"
        >
          Frequently Asked Questions
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-vought-red/30 to-transparent"></span>
      </div>

      {/* Accordions Group */}
      <div className="space-y-3">
        {FAQ_ITEMS.map((item, idx) => (
          <details 
            key={idx} 
            className="group border border-card-border rounded bg-card-bg/30 overflow-hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between p-4 text-xs font-bold text-zinc-300 hover:text-white hover:bg-card-bg/50 select-none sm:text-sm">
              <span>{item.question}</span>
              <span className="text-[10px] text-zinc-500 group-open:rotate-180 transition-transform duration-200 shrink-0 ml-4">
                ▼
              </span>
            </summary>
            <div className="border-t border-card-border p-4 text-xs text-zinc-400 leading-relaxed sm:text-sm">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
