# **Product Requirements Document (PRD): ISO Photo XP – "The Dynamic Journey"**

**Version:** 2.0 (Final Architecture) **Date:** October 26, 2023 **Status:** Ready for Engineering & Design **Project Goal:** Transform `isophotoxp.com` from a static brochure into a dynamic, interactive "Guided Tour" that immerses visitors in their specific Hero's Journey immediately.

## **1\. Executive Summary**

The new ISO Photo XP website will be an **interactive web application**, not a static site. It utilizes **Game Design principles** (Choose Your Character, Micro-Interactions) to engage users instantly.

It serves two distinct functions:

1. **The Stage (Front-End):** A high-performance, emotive visual experience that uses "Scrollytelling" to guide Parents, Athletes, and Organizations to a sale.  
2. **The Engine (Back-End):** A scalable, API-first architecture prepared for future integrations with CRM (Zoho), AI Agents, and Member Portals, without needing a rebuild.

## **2\. Brand Foundation (The "Why")**

* **Mission:** "To use our God-given talents to create one-of-a-kind photo experiences for one-of-a-kind people."  
* **Voice:** Empathetic Guide ("We’ve stood on that sideline"), Authoritative Pro ("Certified Network"), Energetic Hype ("Get the Pro Look").  
* **Visual Style:** Clean, Cinematic, High-Contrast. The UI should fade away to let the photography speak.

## **3\. Interactive User Experience (UX) Strategy**

*The site must utilize the following "Active" patterns instead of passive reading.*

### **3.1 The "Choose Your Character" Gateway (Hero Section)**

Instead of a static banner, the Homepage Hero is a 4-panel interactive grid.

* **Behavior:** The screen is split into vertical pillars: **Parent**, **Athlete**, **Organization**, **Photographer**.  
* **Interaction:** Hovering over a pillar expands it to 80% width (accordion style) and triggers a specific background video loop (e.g., Mom cheering, Athlete celebrating).  
* **Goal:** Immediate segmentation. The user physically "chooses" their path.

### **3.2 "Scrollytelling" Timelines**

We will not use static bullet points to explain the process.

* **Behavior:** As the user scrolls down the "How it Works" section, a visible SVG line "draws" itself down the screen, connecting steps.  
* **Animation:**  
  * *Step 1 (Register):* An icon of a phone notification pops up.  
  * *Step 2 (Game Day):* A camera shutter sound/flash effect triggers.  
  * *Step 3 (Relive):* A gallery grid "unpacks" itself on screen.  
* **Goal:** Make the "Plan" feel like a journey they are walking, not a list they are reading.

### **3.3 The "Focus" Slider (Micro-Interaction)**

* **Component:** A side-by-side image comparison tool.  
* **Left Side:** Dark, blurry iPhone photo (The "Villain").  
* **Right Side:** Crisp, bright ISO Pro photo (The "Hero").  
* **Action:** User drags a slider handle to "wipe away" the blur.  
* **Goal:** Visceral proof of value. The user physically "fixes" the problem.

### **3.4 The "ISO AI Guide" (Dynamic FAQ)**

* **Component:** A floating "Chat Bubble" on every page, powered by a custom GPT agent (future integration).  
* **Context Aware:**  
  * *On /parents:* "Ask me about print packages or delivery dates."  
  * *On /organizations:* "Ask me about revenue sharing or liability insurance."  
* **Goal:** Remove friction instantly.

## **4\. Site Architecture & Content Map**

### **4.1 Global Navigation**

* **Sticky Header:** \[Logo\] | Home | For Parents | For Organizations | For Athletes | Photographers | Resources | \[Find Photos (CTA)\]

### **4.2 Page Breakdown (The Journeys)**

#### **A. Parents Path (/parents)**

* **Hero:** Emotional connection (Safety/Memories).  
* **Interaction:** "The Focus Slider" (Quality Proof).  
* **Trust Module:** "The Safety Check" – Hover over icons to see "Background Checked," "SafeSport Certified."  
* **Product:** Digital vs. Print Heirloom showcase.

#### **B. Organization Path (/organizations)**

* **Hero:** Order from Chaos.  
* **Interaction:** **"Profit Simulator"** – \[Slider: \# of Athletes\] \-\> \[Slider: Rebate %\] \= **$ Projected Fundraising.**  
* **Process:** The "ISO Flow" animated timeline (Admin work vanishing).

#### **C. Athlete Path (/athletes)**

* **Hero:** High-energy "Hype Reel."  
* **Interaction:** **"Style Selector"** – Toggle buttons \[Smoke\] \[Studio\] \[Action\] to instantly swap the image style.  
* **Social Proof:** Ticker tape of Instagram shoutouts.

#### **D. Photographer Path (/photographers)**

* **Hero:** "Join the Network."  
* **Interaction:** **"Earnings Calculator"** – \[Slider: Gamedays\] x \[Rate\] \= **$ Side Income.**  
* **CTA:** Application for Certification.

#### **E. The "Rockstar" Directory (/meet-the-pros)**

* **Concept:** A talent roster, not a staff list.  
* **Cards:** "Player Cards" for each photographer showing their "Specialty Stats" (e.g., "Hockey Sniper," "Low-Light Specialist").  
* **Action:** \[Book This Pro\] button.

#### **F. Knowledge Hub (/resources)**

* **Structure:** Loop Marketing optimized.  
* **Content:** "Pillar 5" Education (Guides, Tips, Prep).  
* **Tech:** Schema-rich for AI search grounding.

## **5\. Technical Requirements (The Engine)**

### **5.1 Technology Stack**

* **Front-End:** **React** or **Next.js**. (Critical for the interactive animations and "app-like" feel).  
* **Animation Library:** **Framer Motion** or **GSAP**. (Required for the Scrollytelling/Sliders).  
* **Database:** **PostgreSQL** (via Supabase or AWS RDS).  
* **CMS:** Headless CMS (e.g., Sanity.io or Contentful) so the team can update content without touching code.

### **5.2 Database Schema (Scalable Foundation)**

*Must support future CRM sync and 3rd party apps.*

* **`users` Table:** Universal ID, Role (Parent/Org/Photog), Zoho\_ID.  
* **`profiles_photographers` Table:**  
  * `gear_list` (JSONB)  
  * `social_links` (JSONB)  
  * `referral_code` (String \- for tracking leads)  
  * `certification_level` (Enum)  
  * `availability_schedule` (Future Job Board)  
* **`entities_athletes` Table:** Linked to Parents. Stores `dob` and `sport` for automated marketing loops.

### **5.3 Integrations (API-First)**

* **Webhooks:** The system must listen for events (e.g., `gallery.published` from PhotoDay) to trigger emails.  
* **Feature Flags:** Build the Zoho integration points now, but wrap them in "Flags" so they can be turned on/off without redeploying code.

## **6\. Development Roadmap**

### **Phase 1: The "Grand Stage" (Weeks 1-6)**

* Build the Next.js Front-End with all interactive modules (Hero Grid, Sliders, Scrollytelling).  
* Implement the Headless CMS for Blog/Resources.  
* Launch the "Rockstar Directory" (Static data initially).  
* **Success Metric:** 90+ PageSpeed Score, Mobile Responsiveness.

### **Phase 2: The "Data Backbone" (Weeks 7-10)**

* Set up the PostgreSQL Database.  
* Implement Authentication (Auth0/Firebase) infrastructure (Hidden UI).  
* Connect "Contact Forms" to the Database (capturing Leads).

### **Phase 3: The "Ecosystem" (Future)**

* Turn on User Login (Public).  
* Activate Zoho 2-Way Sync.  
* Launch "Photographer Portal" (Job Board/Training).

