// FAQPage Schema - Targets feature and long-tail query variations
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are all the active Survive Homelander codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Active codes as of June 2026: QOLFIXES (250 Credits), BIGUPDATENEXTWEEK (100 Credits), ATRAIN (200 Credits), SORRYFORTHEBUGS (75 Credits), HTH (75 Credits), LIKETHEGAME (125 Credits)."
      }
    },
    {
      "@type": "Question",
      "name": "How do I redeem codes in Survive Homelander?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "First join the Sushi Deluxe Roblox group, then launch Survive Homelander, click the Codes button in the lobby menu, paste the code exactly as shown, and click Redeem."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get A-Train in Survive Homelander?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use the code ATRAIN to unlock A-Train's Temp V ability. This gives you a temporary speed boost in-game."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use blood manipulation in Survive Homelander?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Blood manipulation is an ability available to certain characters. Activate it by pressing the designated key when the ability meter is charged. It allows you to control enemy movement temporarily."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use Temp V in Survive Homelander?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Find Temp V vials on the map inside Vought Tower. Walk over them to collect and auto-activate. They grant temporary powers like speed (A-Train) or laser eyes (Compound V)."
      }
    },
    {
      "@type": "Question",
      "name": "How do I gain rep in Survive Homelander?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can gain reputation (rep) by completing survivor objectives, successfully escaping, or playing as Homelander and hunting survivors. Rep is used to level up and unlock exclusive items."
      }
    },
    {
      "@type": "Question",
      "name": "What are the Survive Homelander Roblox controls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard controls include: WASD to move, Shift to sprint, Space to jump, C to crouch/slide, and E to interact with objects like doors and Temp V vials."
      }
    },
    {
      "@type": "Question",
      "name": "Why aren't my Survive Homelander codes working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Codes might fail if you haven't joined the Sushi Deluxe Roblox group, if you mistyped the letter casing, if the code is expired, or if you already redeemed it on your account."
      }
    },
    {
      "@type": "Question",
      "name": "How often do new codes drop?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "New codes are typically released by the developers when the game hits new milestones (like target counts), major version updates, or bug-fix events."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need Roblox Premium to redeem codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, codes are free to redeem for all players. The only requirement is joining the developer's Roblox group: Sushi Deluxe."
      }
    }
  ]
};

// BreadcrumbList Schema
export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://survivehomelanderwiki.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Codes",
      "item": "https://survivehomelanderwiki.com/codes"
    }
  ]
};

// SoftwareApplication Schema
export const gameSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Survive Homelander",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Roblox",
  "description": "An asymmetric hide-and-hunt game on Roblox set inside Vought Tower from The Boys series.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};
