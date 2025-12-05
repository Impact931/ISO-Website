# **ISO Photo XP: Database Schema & Integration Architecture**

Version: 1.1  
Purpose: Define the data structure required to support multi-ICP user management, sub-contractor photographer networks, and bi-directional sync with Zoho CRM.

## **1\. Technology Recommendation**

* **Database Engine:** **PostgreSQL** (via **Supabase** or **AWS RDS**).  
  * *Why:* It allows for strict relational integrity (ensuring a Parent is actually linked to an Athlete) and has native support for JSONB, allowing you to store flexible data (like a photographer's gear list or social links) without changing the schema constantly.  
* **Middleware:** **Make.com** (formerly Integromat) or **Zapier** for the orchestration layer between the Website and Zoho.  
* **Control Layer:** **Feature Flags** (Environment Variables).  
  * *Why:* Allows us to build the integration logic *now* but keep it disabled (ENABLE\_ZOHO\_SYNC=false) until operations are ready.

## **2\. Core Database Schema (The "Skeleton")**

### **A. Authentication & Users**

*This table handles the login. It is the gatekeeper.*

* **Table:** users  
  * id (UUID, Primary Key)  
  * email (Unique)  
  * auth\_provider\_id (Link to Firebase/Auth0)  
  * role (Enum: 'admin', 'parent', 'org', 'photographer')  
  * created\_at (Timestamp)  
  * zoho\_contact\_id (String \- **Crucial for Sync**)

### **B. Profiles (ICP Specific Data)**

*These tables link 1:1 with the users table.*

* **Table:** profiles\_parents  
  * user\_id (Foreign Key)  
  * first\_name, last\_name  
  * phone\_number  
  * mailing\_address (For Content Pillar 4 \- Physical Prints)  
  * referred\_by\_code (String \- Tracks which photographer brought them in)  
* **Table:** profiles\_organizations (Target: Cathy)  
  * user\_id (Foreign Key \- The Admin)  
  * org\_name  
  * org\_type (Enum: 'School', 'League', 'Club')  
  * tax\_id (For compliance)  
  * zoho\_account\_id (Links to "Accounts" module in Zoho)  
* **Table:** profiles\_photographers (Target: Frank \- The Sub-Contractor)  
  * user\_id (Foreign Key)  
  * business\_name (DBA or LLC Name)  
  * website\_url (External portfolio)  
  * social\_links (JSONB \- e.g., {"instagram": "@frank\_shoots", "linkedin": "url"})  
  * referral\_code (Unique String \- e.g., "FRANK2024" \- used to track his leads)  
  * certification\_level (Enum: 'Level 1', 'Level 2', 'Master')  
  * paywall\_tier (Enum: 'Free', 'Member', 'CDM\_Pro')  
  * training\_progress (JSONB \- Tracks completed modules in future Academy)  
  * service\_region (Zip Codes)  
  * background\_check\_status (Boolean)  
  * gear\_list (JSONB \- Flexible storage for camera bodies/lenses)  
  * availability\_schedule (JSONB \- Future use for "Assignment Board")

### **C. Entities (The "Product" Data)**

* **Table:** athletes (Target: Jordan)  
  * id (UUID)  
  * parent\_id (Foreign Key to profiles\_parents)  
  * first\_name, last\_name  
  * dob (To automate "Senior Year" marketing loops)  
  * sport\_primary (Tags for personalized content)  
* **Table:** galleries  
  * id (UUID)  
  * external\_host\_id (The ID from PhotoDay/GotPhoto)  
  * photographer\_id (Foreign Key)  
  * organization\_id (Foreign Key)  
  * event\_date  
  * status (Enum: 'Pre-Reg', 'Live', 'Archived')

### **D. Business Logic (Referrals & Jobs)**

* **Table:** referral\_ledger (Tracking Photographer Success)  
  * id (UUID)  
  * photographer\_id (Foreign Key)  
  * referred\_user\_id (Foreign Key \- The Parent/Org recruited)  
  * action\_type (Enum: 'Sign\_Up', 'Gallery\_Purchase', 'Booking')  
  * commission\_status (Enum: 'Pending', 'Paid')  
  * created\_at (Timestamp)  
* **Table:** assignments (Future Job Board / Availability)  
  * id (UUID)  
  * organization\_id (Client Requesting Shoot)  
  * assigned\_photographer\_id (Nullable \- Filled when Frank claims the job)  
  * job\_status (Enum: 'Open', 'Assigned', 'Shot', 'Edited', 'Delivered')  
  * payout\_rate (Decimal)

## **3\. Integration Strategy (The "Nervous System")**

To support 3rd party plugins and Zoho, we will use an **Event-Driven Webhook Architecture** controlled by environment variables.

### **Workflow A: New User Registration (The "Handshake")**

1. **User Action:** Sheree signs up on isophotoxp.com.  
2. **Database Action:** Creates record in users and profiles\_parents.  
3. **Logic Check:** System checks ENV.ENABLE\_ZOHO\_SYNC.  
   * **If FALSE:** Stop here. (Data is safe in DB).  
   * **If TRUE:** Fire webhook user.created.  
4. **Middleware (Make/Zapier):**  
   * Receives payload.  
   * Calls **Zoho CRM API** to create a "Contact".  
   * Maps sport\_interest to Zoho Tags.  
5. **Loop Back:** Zoho returns the new Contact\_ID. Middleware updates the ISO Database users table with this ID.

### **Workflow B: Gallery Goes Live (The "Pillar 3 Dopamine Hit")**

1. **External Event:** PhotoDay/GotPhoto gallery is published.  
2. **Webhook:** Gallery Host sends webhook to ISO Website API.  
3. **System Action:**  
   * Update galleries table status to 'Live'.  
   * Find all parents associated with that organization\_id.  
   * **Logic Check:** System checks ENV.ENABLE\_EMAIL\_ALERTS.  
   * **If TRUE:** Trigger **Zoho Campaign**: Send "Your Photos are Ready" email (Content Pillar 3).

## **4\. API Capabilities for Future Plugins**

*To ensure "Capability to take 3rd party apps," your developer must expose these endpoints:*

* POST /api/webhooks/incoming: A secure door to let trusted apps (CRM, Gallery Host) push data to us.  
* GET /api/user/context: An endpoint that allows a plugin (e.g., an AI Chatbot) to ask "Who is logged in?" and get back "Sheree, Parent of Jordan, Soccer Player" to tailor the conversation.