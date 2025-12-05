# **ISO Photo XP: Project Orchestration & Hand-off Guide**

Version: 1.0  
Purpose: To serve as the "Master Map" connecting strategic reference documents with technical execution files. Use this guide to direct the development team on how to use the provided documentation.

## **1\. The Documentation Ecosystem**

*Think of this project as building a house. These are your blueprints.*

| File Name | Role | Who Needs It? | Key Action |
| :---- | :---- | :---- | :---- |
| **ISO\_PhotoXP\_Final\_PRD.md** | **The Strategy** | **Everyone** | Defines the "Interactive Tour" concept and the "Why" behind every feature. |
| **ISO\_PhotoXP\_Wireframe.md** | **The Layout** | **Designers / Frontend** | Visualizes the "Hero Grid" and "Scrollytelling" navigation flow. |
| **Developer\_Implementation\_Guide.md** | **The Standards** | **Frontend / QA** | Contains the Hex Codes, Fonts, placeholder dimensions, and SEO Schema. |
| **Database\_Schema\_and\_Integrations.md** | **The Backbone** | **Backend / DevOps** | Defines the PostgreSQL structure and Zoho CRM hooks. |

## **2\. Integrating the "Source Material" (Uploaded References)**

*Your developers must reference these specific uploaded PDFs to write the correct copy and build the right interactions.*

### **A. The "StoryBrand" Framework**

* **Apply to:** Homepage (Hero, Guide, Plan sections).  
* **Instruction:** "When building the Homepage, ensure the copy follows the **7-Part Framework** defined in Story Brand Framework for ISO.doc. Do not use generic 'Welcome to our site' text; use the 'Hero vs. Villain' language."

### **B. The "Loop Marketing" Playbook**

* **Apply to:** /resources (Knowledge Hub) & SEO Structure.  
* **Instruction:** "Use the Loop Marketing Playbook to structure our Blog tags. Ensure every FAQ matches the Schema Markup defined in the Developer Guide so AI search engines can read it."

### **C. The ICP Personas (Sheree, Cathy, Jordan, Frank)**

* **Apply to:** Individual Sub-Pages (e.g., /parents).  
* **Instruction:**  
  * **For /parents:** Reference ISO \- Parent ICP (Sheree).pdf. Use her "Pain Points" (missed memories) to design the "Focus Slider" interaction.  
  * **For /organizations:** Reference ISO \- Organization ICP (Cathy).pdf. Use her desire for "Revenue" to build the "Fundraising Calculator."  
  * **For /athletes:** Reference ISO Athlete ICP (Jordan).pdf. Use his desire for "Clout" to design the "Style Selector."

### **D. The Content Pillars (1-5)**

* **Apply to:** Call-to-Action (CTA) Logic.  
* **Instruction:** "The 'Relive the Moment' page must use the urgency defined in Content Pillar 4\. Ensure the 'Gallery Expiry' countdown is visible."

## **3\. Execution Phase: The "Build Order"**

*Do not build everything at once. Follow this sequence to maintain the 'Dynamic' vision.*

### **Phase 1: The "Visual Stage" (Design & Frontend)**

1. **Setup:** Initialize Next.js project using **Developer\_Implementation\_Guide.md** (Colors, Fonts, Tailwind).  
2. **Hero Grid:** Build the "Choose Your Character" interactive hero using **ISO\_PhotoXP\_Wireframe.md**. *This is the MVP.*  
3. **Sub-Pages:** Build the /parents, /athletes, etc., pages using the specific **ICP PDFs** for copy tone.

### **Phase 2: The "Interaction Layer" (Frontend Animation)**

1. **Micro-Interactions:** Implement the "Focus Slider" and "Scrollytelling Timeline" defined in **ISO\_PhotoXP\_Final\_PRD.md**.  
2. **Motion:** Apply Framer Motion physics to make the site feel like an app.

### **Phase 3: The "Data Foundation" (Backend)**

1. **Schema:** Set up Supabase/PostgreSQL using **Database\_Schema\_and\_Integrations.md**.  
2. **Webhooks:** Configure the *dormant* webhooks for Zoho/PhotoDay (keep flags off for now).  
3. **Directory:** Populate the "Rockstar Directory" (/meet-the-pros) with static data initially, preparing to link it to the profiles\_photographers table later.

## **4\. Final Hand-off Checklist**

*Before writing code, the Lead Developer must confirm:*

* \[ \] They have read the **StoryBrand** doc to understand the "Guide" voice.  
* \[ \] They have the **Asset List** (Hero Images/Videos) from the Design Guide ready.  
* \[ \] They understand the **Black/Gold/Red** color strictness.  
* \[ \] They know **NOT** to turn on Zoho Sync until Phase 3\.