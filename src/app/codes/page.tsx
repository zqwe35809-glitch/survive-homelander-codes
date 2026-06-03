import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/codes/PageHeader";
import { InlineAlert } from "@/components/codes/InlineAlert";
import { ActiveCodesSection } from "@/components/codes/ActiveCodesSection";
import { HowToRedeemSection } from "@/components/codes/HowToRedeemSection";
import { ExpiredCodesSection } from "@/components/codes/ExpiredCodesSection";
import { FAQSection } from "@/components/codes/FAQSection";
import { RelatedTopicsSection } from "@/components/codes/RelatedTopicsSection";
import { UpdateLogSection } from "@/components/codes/UpdateLogSection";
import { getCodes } from "@/lib/codes";
import { faqSchema, breadcrumbSchema, gameSchema } from "@/lib/schema/codes";

// ISR setup: Revalidate this page every 6 hours (21600 seconds)
export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Survive Homelander Codes (June 2026) — Free Credits | Wiki",
  description:
    "Active Survive Homelander codes for June 2026. Redeem free Credits for Roblox skins & cosmetics. Daily verified codes like QOLFIXES, ATRAIN, and more!",
  keywords: [
    "survive homelander codes",
    "roblox survive homelander codes",
    "survive homelander credits",
  ],
  openGraph: {
    title: "Survive Homelander Codes — All Working Codes June 2026",
    description:
      "Free Credits codes for Survive Homelander on Roblox. Updated daily with every new code drop.",
    type: "article",
  },
  alternates: {
    canonical: "https://survivehomelanderwiki.com/codes",
  },
};

export default async function CodesPage() {
  // Fetch active and expired codes data
  const { activeCodes, expiredCodes } = await getCodes();

  return (
    <>
      {/* Injecting SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }}
      />

      <main className="min-h-screen bg-background lab-grid">
        <div className="mx-auto max-w-7xl border-x border-card-border bg-[#0a0a0f]/60 min-h-screen shadow-2xl">
          <article className="pb-16">
            {/* Header section (height <= 64px) */}
            <PageHeader
              activeCount={activeCodes.length}
              lastUpdated="2026-06-03"
            />

            {/* Alert bar (height <= 40px) */}
            <InlineAlert
              message="Redeeming codes requires joining the"
              linkText="Sushi Deluxe Roblox group"
              linkHref="https://www.roblox.com/groups/33719001/Sushi-Deluxe"
              suffix="first."
            />

            {/* Active Codes List (Visible immediately, at least 3 cards above the fold) */}
            <ActiveCodesSection codes={activeCodes} />

            {/* Steps Guide & Troubleshooting */}
            <HowToRedeemSection />

            {/* Expired Codes (Folded, default closed) */}
            <Suspense fallback={
              <div className="px-4 py-6 sm:px-6 text-xs text-zinc-500">
                Loading archive...
              </div>
            }>
              <ExpiredCodesSection codes={expiredCodes} />
            </Suspense>

            {/* FAQs Section (SEO-friendly Accordion) */}
            <FAQSection />

            {/* Lore questions and Wiki internal links */}
            <RelatedTopicsSection />

            {/* Verification log timeline */}
            <UpdateLogSection />
          </article>
        </div>
      </main>
    </>
  );
}
