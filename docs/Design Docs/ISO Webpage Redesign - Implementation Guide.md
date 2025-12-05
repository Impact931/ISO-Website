# **ISO Photo XP: Developer Implementation Guide**

Version: 1.1  
Purpose: Technical specifications, design tokens, and SEO standards to accompany the PRD.  
Audience: Front-End Engineers & UI Designers.

## **1\. Tech Stack & Environment Standards**

* **Framework:** **Next.js 14+** (App Router). *Why: Best for SEO and Server Side Rendering (SSR).*  
* **Language:** **TypeScript**. *Why: Strict typing prevents data errors with the future database integration.*  
* **Styling:** **Tailwind CSS**. *Why: Rapid development and easy maintenance of the design system.*  
* **Animation:** **Framer Motion**. *Why: Required for the "Scrollytelling" and "Focus Slider" physics.*  
* **State Management:** **Zustand** (or React Context). *Why: Needed to track which "Character" (Parent/Athlete) is currently selected in the Hero.*

## **2\. Design System (The "Cinematic" Look)**

*The visual style is "High Contrast, Clean, and Gallery-Like." The UI should recede; the photos should pop.*

### **2.1 Color Palette (Tailwind Config)**

*Updated to ISO Core Brand Colors.*

// tailwind.config.js suggestion  
colors: {  
  brand: {  
    black: '\#000000',   // Pure Black for high contrast backgrounds  
    offBlack: '\#0A0A0A', // Soft black for cards/modals  
    white: '\#FFFFFF',   // Pure White for text  
    gold: '\#bfa863',    // ISO Gold (Accents, Buttons, Highlights)  
    red: '\#c40a0a',     // ISO Red (Urgency, Notifications, Errors)  
    gray: '\#262626',    // Secondary background  
  },  
  status: {  
    success: '\#bfa863', // Use Gold for success states (Premium feel)  
    error: '\#c40a0a',   // Use Brand Red for errors  
  }  
}

### **2.2 Typography**

* **Primary Font (Headings):** **"Oswald"** or **"Tungsten"** (Google Fonts).  
  * *Vibe:* Bold, condensed, athletic. Used for H1/H2 and big statements.  
* **Secondary Font (Body):** **"Inter"** or **"Roboto"**.  
  * *Vibe:* Clean, highly readable at small sizes. Used for FAQs and long text.

## **3\. SEO & Loop Marketing Strategy (Schema Markup)**

*Crucial for AI Search visibility. These snippets must be dynamically injected into the \<head\> of specific pages.*

### **3.1 Organization Schema (Global Footer)**

*Add this to the root layout so AI knows who you are.*

\<script type="application/ld+json"\>  
{  
  "@context": "\[https://schema.org\](https://schema.org)",  
  "@type": "LocalBusiness",  
  "name": "ISO Photo XP",  
  "image": "\[https://isophotoxp.com/logo.png\](https://isophotoxp.com/logo.png)",  
  "description": "One-of-a-kind photo experiences for youth sports, athletes, and organizations.",  
  "address": {  
    "@type": "PostalAddress",  
    "addressLocality": "Your City",  
    "addressRegion": "TN",  
    "addressCountry": "US"  
  },  
  "priceRange": "$$"  
}  
\</script\>

### **3.2 FAQ Schema (For ICP Pages)**

*Add this to /parents and /organizations. This helps Google/ChatGPT answer questions directly.*

\<script type="application/ld+json"\>  
{  
  "@context": "\[https://schema.org\](https://schema.org)",  
  "@type": "FAQPage",  
  "mainEntity": \[{  
    "@type": "Question",  
    "name": "How long does it take to get my photos?",  
    "acceptedAnswer": {  
      "@type": "Answer",  
      "text": "Galleries are typically ready within 3-5 business days after the event. You will receive an email/text notification immediately."  
    }  
  }, {  
    "@type": "Question",  
    "name": "Are your photographers background checked?",  
    "acceptedAnswer": {  
      "@type": "Answer",  
      "text": "Yes. Every ISO Certified Photographer undergoes a rigorous background check and SafeSport certification."  
    }  
  }\]  
}  
\</script\>

## **4\. Critical UI Components (The Build List)**

*Devs should build these as reusable "Islands" first.*

| Component Name | Description | Tech Requirement |
| :---- | :---- | :---- |
| **HeroGrid.tsx** | The 4-panel split screen on Home. | Needs hover listeners to expand flex-basis width. |
| **FocusSlider.tsx** | The Before/After image drag tool. | Uses a masked \<div\> overlay controlled by a range input or drag gesture. |
| **ScrollTimeline.tsx** | The vertical line that draws itself. | Uses useScroll hook from Framer Motion to map SVG path length to scroll position. |
| **CalculatorWidget.tsx** | The "Profit/Income" simulator. | Simple React state logic (const result \= input \* multiplier). |
| **PhotographerCard.tsx** | The directory profile card. | Needs a "Flip" animation or modal trigger for the "Book Me" action. |

## **5\. Folder Structure Recommendation**

*Keep the project organized for the future Dashboard integration.*

/app  
  /page.tsx           (Homepage)  
  /(routes)  
    /parents/page.tsx  
    /athletes/page.tsx  
    /organizations/page.tsx  
    /photographers/page.tsx  
  /resources          (Blog/Hub)  
/components  
  /ui                 (Buttons, Inputs, Cards)  
  /interactive        (Sliders, Timelines, Calculators)  
  /sections           (Hero, FAQ, Footer)  
/lib  
  /utils.ts           (Helper functions)  
  /constants.ts       (Pricing logic, Config)  
/public  
  /assets             (Logos, Icons)

## **6\. Asset Checklist & Placeholder Specs**

*Use these dimensions when generating AI placeholders to ensure they fit the layout perfectly.*

| Asset Type | Location | Aspect Ratio | Dimensions (Min) | Prompt Context |
| :---- | :---- | :---- | :---- | :---- |
| **Hero Vertical** | Homepage (4-Panel Grid) | **9:16 (Vertical)** | 1080x1920px | *Cinematic, dramatic lighting, subject looking active/proud. One for each ICP.* |
| **Hero Landscape** | Sub-Pages (Top Banner) | **21:9 (Ultrawide)** | 2560x1080px | *Wide stadium shots, blurred backgrounds, negative space for text overlays.* |
| **Comparison Shot** | Focus Slider Module | **16:9** | 1920x1080px | *Needs 2 versions: 1 blurry/dark (The Problem) and 1 perfect (The ISO Solution).* |
| **Profile Card** | Directory / Rockstar Page | **4:5 (Portrait)** | 800x1000px | *Edgy "Player Card" style headshots. High contrast, studio lighting.* |
| **Blog Thumbnail** | Resource Hub | **16:9** | 1200x675px | *Clean, relevant stock-style imagery. Less dramatic.* |

* **Video Loops:** Short (5-8 sec), muted WebM video clips for the Hero Grid (Parent cheering, Athlete playing, etc.).  
* **Legal Text:** Privacy Policy & Terms of Service content (HTML or Markdown).  
* **Social Links:** The specific URLs for Instagram, LinkedIn, Facebook.