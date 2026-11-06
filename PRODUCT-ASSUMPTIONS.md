# Product Assumptions — CollabKit

## 1. Product & Problem

### The Problem
Indian independent video editors, reel/shorts creators, and micro-influencers (10k–150k followers across cities like Mangalore, Bangalore, and Mysore) manage their brand deals and sponsorships haphazardly across WhatsApp chats, Instagram DMs, and untracked Google Sheets.

This leads to three major breakdowns:
1. **Lost Revenue & Forgotten Payments:** Creators forget who has paid, who is overdue, and what delivery deadlines are looming.
2. **Poor Pipeline Tracking:** No structured view exists to track pitches, editing stages, revisions, published content, and collected earnings in Indian Rupees (₹).
3. **Brand Discovery Friction:** Local brands, college fest teams, cafes, and early-stage startups that need creator collaborations (e.g., a Tech creator in Mangalore under ₹15,000) have no central directory to find talent or post collaboration briefs.

### The Solution: CollabKit
CollabKit provides a dual-sided Sponsor & Deal CRM + Marketplace inspired by Passionfroot (YC W21) and Product Hunt discovery:

| Surface | Who sees? | What? |
| :--- | :--- | :--- |
| **My Private Dashboard (Private)** | Only creator sees — Yellow tag `PRIVATE - only you see this` | My products & my collabs, earnings in ₹, Pipeline `Pitched` → `Editing` → `Published` → `Paid` |
| **Public Home / Find Creators / Brand Requests (Public)** | Everyone sees — Green tag `PUBLIC` | Brands find creators, Brands post "I need collab" — request shows public, Creators Apply |

---

## 2. Target Users & Main Use Cases

### Primary Users: Indian Video Editors & Content Creators
- **Demographics:** Video editors, shorts specialists, and regional creators with 10k–150k followers in Bangalore, Mangalore, Mysore, and Mumbai.
- **Main Use Case:** Log inbound deals, track editing progress and revisions across Kanban stages, calculate pipeline earnings in ₹, and share a public rate card link.

### Secondary Users: Brands, Agencies, Startups & College Fests
- **Demographics:** Brand marketing teams (boAt, Mamaearth, OnePlus, Noise, Lenskart), regional businesses (Cafe Udupi), and college festival teams (Campus Fest MIT).
- **Main Use Case:** Discover creators by niche and city with transparent rates, submit collaboration briefs, or post public requests on the open board.

---

## 3. Core Features

1. **Private Deal CRM & Kanban Board:**
   - 4-stage visual pipeline: `Pitched` → `Editing` → `Published` → `Paid`.
   - Fast status movement between columns with automatic calculation updates.
   - Revision tracking (`1/2 revs`) and due tags (`2d`, `Today`, `Paid`).

2. **Automated ₹ Revenue & Pipeline Metrics:**
   - **Total Deal Pipeline:** Aggregated gross value of all deals.
   - **Active Pending:** Real-time sum of deals currently in `Pitched`, `Editing`, or `Published`.
   - **Paid / Collected:** Sum of finalized earnings cleared in ₹.

3. **Public Marketplace & Creator Directory:**
   - Creator profile cards with avatar, niche, follower count, completed collabs, past brand endorsements, and starting rates.
   - Multi-niche filtering (`All`, `Tech`, `Beauty`, `Fitness`, `Finance`, `Food`) and live search.

4. **Public Brand Request Board:**
   - Open bulletin board where brands post collaboration requirements.
   - Direct "Apply" action with toast feedback notifications.
   - Modal form allowing brands to post new requests with title, brand, budget in ₹, and location.

5. **Creator Collab Showcase & Shareable Profile:**
   - One-click "Copy Shareable Link" button for Instagram bio and WhatsApp pitching.
   - Inbound collaboration brief form that feeds directly into the creator's private pipeline.

---

## 4. User Assumptions

- **Deal Frequency & Value:** A creator handles 2–5 active brand deals concurrently, with typical payouts ranging from ₹8,000 to ₹35,000 per deliverable.
- **Payment Terms:** Creators predominantly operate on Net-15 or delivery-milestone payout terms.
- **Turnaround Time:** Standard editing turnaround is 2–4 days for short-form video reels and shorts.
- **Workflow Friction:** Creators need zero-friction state changes, local browser persistence, and immediate feedback without cumbersome login walls.
- **Pricing Format:** All financial amounts must strictly be displayed in Indian Rupees (₹) with realistic Indian brand examples.

---

## 5. MVP Scope & Excluded Features

### Included in MVP Scope (Milestone 1)
- Next.js 14 App Router application with React 18 and pure CSS Modules (no Tailwind).
- Global shared application state managed with React Context (`createContext`, `Provider`, `useContext`).
- Client-side data persistence with browser `localStorage`.
- Comprehensive realistic dummy data representing Indian creator collaborations in ₹.
- 10 reusable UI components with scoped CSS Modules.
- Responsive mobile + desktop layouts.
- One-click shareable link copying with toast notifications.

### Excluded from MVP (Future Scope)
- User authentication and login/password management (mocked as single-creator workspace).
- Real payment gateway integrations (Razorpay/Stripe) and automated GST invoice generation.
- Real SMTP / email dispatching services.
- Production backend databases (PostgreSQL/MongoDB) and REST/GraphQL API server layer.
- Real-time WebSocket multi-user synchronization.
