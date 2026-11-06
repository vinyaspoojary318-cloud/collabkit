# Wireframes & User Flows — CollabKit

## 1. Information Architecture & Navigation

```
                                  [ Global Navbar ]
                                         │
        ┌───────────────────┬────────────┴─────────────┬──────────────────┐
        ▼                   ▼                          ▼                  ▼
   / (Home)           /marketplace                /requests          /dashboard
 (Public Landing)   (Find Creators)            (Brand Requests)   (Private Workspace)
        │                   │                          │                  │
        ├─ Hero             ├─ Search Input            ├─ Requests List   ├─ Revenue Stats
        ├─ Top Creators     ├─ Niche Filter Pills      ├─ Apply Action    ├─ Kanban Pipeline
        ├─ Recent Requests  └─ Creator Profile Cards   └─ Post Request    └─ Add Collab Modal
        └─ Inbound Collab                                 Modal Form
```

---

## 2. Page Wireframes

### Page 1: Public Home (`/`)
```
+-----------------------------------------------------------------------------------+
|  [Logo] CollabKit       Home    Find Creators    Brand Requests    [Dashboard (🔒)]|
+-----------------------------------------------------------------------------------+
|                                                                                   |
|         Sponsor & Deal CRM for Indian Video Editors & Creators                    |
|       "Brands who need collab come here & find creators across India"             |
|                                                                                   |
|           [ Search creators, niches, or cities...                      ]          |
|                                                                                   |
|  [ Explore Marketplace -> ]               [ View Brand Requests ]                 |
+-----------------------------------------------------------------------------------+
|  PUBLIC CREATORS (Mangalore, Bangalore, Mysore)                   [See All ->]    |
|  +--------------------+  +--------------------+  +--------------------+           |
|  | [V] Vinyas P       |  | [A] Ananya S       |  | [R] Rohan K        |           |
|  | Tech • 85k • ₹18k  |  | Beauty • 120k • ₹15|  | Fitness • 64k • ₹12|           |
|  | boAt, OnePlus      |  | Mamaearth, Lenskart|  | Wakefit, Zouk      |           |
|  | [Request Collab]   |  | [Request Collab]   |  | [Request Collab]   |           |
|  +--------------------+  +--------------------+  +--------------------+           |
+-----------------------------------------------------------------------------------+
|  RECENT BRAND REQUESTS                                            [See All ->]    |
|  +--------------------+  +--------------------+  +--------------------+           |
|  | Campus Fest MIT    |  | Cafe Launch        |  | Fintech App Launch |           |
|  | Need Tech Creator  |  | Food Blogger Story |  | Finance Explainer  |           |
|  | ₹10,000 • Manipal  |  | ₹8,000 • Udupi     |  | ₹25,000 • Bangalore|           |
|  | [Apply Now]        |  | [Apply Now]        |  | [Apply Now]        |           |
|  +--------------------+  +--------------------+  +--------------------+           |
+-----------------------------------------------------------------------------------+
```

---

### Page 2: Find Creators (`/marketplace`)
```
+-----------------------------------------------------------------------------------+
|  [Logo] CollabKit       Home    Find Creators    Brand Requests    [Dashboard (🔒)]|
+-----------------------------------------------------------------------------------+
|  Marketplace: Find Indian Creators                                                |
|  Discover vetted video editors, reel specialists, and niche creators.             |
|                                                                                   |
|  [ Search by name, city, or brand...                             ]                |
|  Filters: ( All )  [ Tech ]  [ Beauty ]  [ Fitness ]  [ Finance ]  [ Food ]       |
+-----------------------------------------------------------------------------------+
|  Showing 6 Creators                                                               |
|  +---------------------------+  +---------------------------+                     |
|  | ● PUBLIC PROFILE          |  | ● PUBLIC PROFILE          |                     |
|  | [Avatar] Vinyas P         |  | [Avatar] Ananya S         |                     |
|  | Tech & Editing • 85k      |  | Beauty & Skincare • 120k  |                     |
|  | Mangalore, Karnataka      |  | Bangalore, Karnataka      |                     |
|  | Brands: boAt, OnePlus     |  | Brands: Mamaearth         |                     |
|  | Rate: ₹18,000             |  | Rate: ₹15,000             |                     |
|  | [ Request Collab ]        |  | [ Request Collab ]        |                     |
|  +---------------------------+  +---------------------------+                     |
+-----------------------------------------------------------------------------------+
```

---

### Page 3: Brand Requests (`/requests`)
```
+-----------------------------------------------------------------------------------+
|  [Logo] CollabKit       Home    Find Creators    Brand Requests    [Dashboard (🔒)]|
+-----------------------------------------------------------------------------------+
|  Public Brand Requests                                                            |
|  Brands post requirements here. Creators apply directly without email spam.       |
|                                                                                   |
|  [ Search requests by brand or need...        ]   [ + Post Brand Request ]        |
+-----------------------------------------------------------------------------------+
|  +-----------------------------------------------------------------------------+  |
|  | ● PUBLIC REQUEST                                          2h ago • Manipal  |  |
|  | Campus Fest MIT                                            Budget: ₹10,000  |  |
|  | Brand: MIT Fest Team                                                        |  |
|  | Need Tech creator for main stage coverage + 2 promotional Instagram reels   |  |
|  | [ Apply Now ]                                       [ View Brand Profile ]  |  |
|  +-----------------------------------------------------------------------------+  |
+-----------------------------------------------------------------------------------+
|  MODAL: "Post New Brand Request"                                                  |
|  +-----------------------------------------------------------------------------+  |
|  | Campaign Title:  [ e.g. Product Launch Video Reel             ]             |  |
|  | Brand / Org:     [ e.g. boAt, Local Cafe                      ]             |  |
|  | Need Details:    [ What deliverable do you need?              ]             |  |
|  | Budget (₹):      [ e.g. ₹15,000                               ]             |  |
|  | Location:        [ e.g. Bangalore / Remote                    ]             |  |
|  |                  [ Cancel ]       [ Submit Public Request ]                 |  |
|  +-----------------------------------------------------------------------------+  |
+-----------------------------------------------------------------------------------+
```

---

### Page 4: My Private Dashboard (`/dashboard`)
```
+-----------------------------------------------------------------------------------+
|  [Logo] CollabKit       Home    Find Creators    Brand Requests    [Dashboard (🔒)]|
+-----------------------------------------------------------------------------------+
|  [ PRIVATE - Only You See This ]                                                  |
|  Creator CRM & Deal Workspace                     [ Copy Shareable Link ]         |
|                                                   [ + Add My Collab/Product ]     |
|                                                                                   |
|  +-------------------+  +-------------------+  +-------------------+              |
|  | TOTAL PIPELINE    |  | ACTIVE PENDING    |  | PAID / COLLECTED  |              |
|  | ₹1,24,000         |  | ₹68,000           |  | ₹56,000           |              |
|  | 6 active deals    |  | In production     |  | Realized earnings |              |
|  +-------------------+  +-------------------+  +-------------------+              |
+-----------------------------------------------------------------------------------+
|  KANBAN DEAL PIPELINE                                                             |
|                                                                                   |
|  PITCHED (2)        EDITING (1)        PUBLISHED (2)       PAID (1)               |
|  +---------------+  +---------------+  +---------------+  +---------------+       |
|  | boAt          |  | Noise         |  | OnePlus       |  | Mamaearth     |       |
|  | Rockerz Reel  |  | Color & VO    |  | Buds 2R Reel  |  | Hair Oil Ad   |       |
|  | ₹18,000 • 2d  |  | ₹22,000 • 1d  |  | ₹35,000 • 3d  |  | ₹18,000 • Paid|       |
|  | 1/2 revs      |  | 2/3 revs      |  | 2/2 revs      |  | Done ✓        |       |
|  | [Move ->]     |  | [Move ->]     |  | [Move ->]     |  | [Completed]   |       |
|  +---------------+  +---------------+  +---------------+  +---------------+       |
+-----------------------------------------------------------------------------------+
```
