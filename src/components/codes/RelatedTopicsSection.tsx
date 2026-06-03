import Link from "next/link";

interface Topic {
  title: string;
  slug: string;
  excerpt: string;
}

const TOPICS: Topic[] = [
  { 
    title: "Can Homelander survive a nuke?", 
    slug: "/lore/homelander-vs-nuke",
    excerpt: "Exploring the limits of Vought's strongest Supe and whether atomic weapons could stop him."
  },
  { 
    title: "How did Marie survive Homelander's laser?", 
    slug: "/lore/marie-survives",
    excerpt: "Analyzing the climactic showdown and how Marie Moreau withstood the lethal heat beams."
  },
  { 
    title: "Did A-Train survive confronting Homelander?", 
    slug: "/lore/a-train-scene",
    excerpt: "Revisiting the intense encounter and A-Train's precarious fate under Vought's shadow."
  },
  { 
    title: "Can Homelander survive in space?", 
    slug: "/lore/homelander-in-space",
    excerpt: "Examining whether the absolute zero and vacuum of outer space pose a threat to Homelander."
  },
  { 
    title: "How to survive Homelander in-game", 
    slug: "/guides/survivor-tips",
    excerpt: "Expert tactics, map routes, and hideout strategies to evade Homelander inside Vought Tower."
  },
];

const INTERNAL_LINKS = [
  { text: <><span className="seo-homelander" /> Character <span className="seo-guide" /></>, href: "/characters/homelander" },
  { text: <>A-Train Temp V Ability <span className="seo-guide" /></>, href: "/guides/temp-v" },
  { text: <>Blood Manipulation <span className="seo-guide" /></>, href: "/guides/blood-manipulation" },
  { text: <>Survivor Tips & Tricks</>, href: "/guides/survivor-tips" },
  { text: <>Stormfront Unlock <span className="seo-guide" /></>, href: "/characters/stormfront" },
  { text: <><span className="seo-credits" /> & Skins <span className="seo-guide" /></>, href: "/economy" },
];

export function RelatedTopicsSection() {
  return (
    <section 
      id="related-topics"
      aria-labelledby="related-topics-heading" 
      className="border-t border-card-border px-4 py-6 sm:px-6"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Lore & Survival Questions (Left/Center 2 cols) */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <h2 
              id="related-topics-heading" 
              className="text-xs font-bold uppercase tracking-wider text-vought-blue"
            >
              <span className="seo-homelander" />{" "}<span className="seo-survive" />{" "}Questions
            </h2>
            <span className="h-px flex-1 bg-gradient-to-r from-vought-blue/30 to-transparent"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {TOPICS.map((topic, idx) => (
              <div 
                key={idx} 
                className="group border border-card-border bg-card-bg/20 rounded p-3.5 hover:border-vought-blue/30 hover:bg-card-bg/40 transition-colors"
              >
                <Link 
                  href={topic.slug}
                  className="text-xs font-bold text-white hover:text-vought-blue flex items-center justify-between sm:text-sm"
                >
                  <span>{topic.title}</span>
                  <span className="text-[10px] text-zinc-500 group-hover:translate-x-1 transition-transform duration-200">
                    Read Guide →
                  </span>
                </Link>
                <p className="mt-1 text-xs text-zinc-500 leading-relaxed">
                  {topic.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Wiki Internal Links (Right 1 col) */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h2 
              className="text-xs font-bold uppercase tracking-wider text-vought-red"
            >
              Wiki Navigation Guides
            </h2>
            <span className="h-px flex-1 bg-gradient-to-r from-vought-red/30 to-transparent"></span>
          </div>

          <div className="rounded border border-card-border bg-card-bg/10 p-4">
            <ul className="space-y-2.5">
              {INTERNAL_LINKS.map((link, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs">
                  <span className="h-1 w-1 rounded-full bg-vought-red"></span>
                  <Link 
                    href={link.href}
                    className="text-zinc-400 hover:text-white font-medium hover:underline transition-colors flex items-center gap-1"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
