# Product Assumptions — CollabKit

## 1. Product & Problem

### The Problem
Indian independent video editors, reel/shorts creators, and micro-influencers (10k–150k followers across cities like Mangalore, Bangalore, and Mysore) manage their brand deals and sponsorships haphazardly across WhatsApp chats, Instagram DMs, and untracked Google Sheets. 

This causes three critical breakdowns:
1. **Lost Revenue & Delayed Payments:** Creators forget who has paid, who is overdue, and what delivery deadlines are looming.
2. **Poor Deal Tracking:** No clear pipeline view exists to track pitches, editing stages, published content, and collected payments in Indian Rupees (₹).
3. **Brand Discovery Friction:** Local brands, college fest organizers, cafes, and early-stage startups who urgently need creator collaborations (e.g., Tech reels under ₹15,000 in Mangalore) have no central, frictionless public directory or open request board to discover regional creators or post collaboration requests.

### The Solution: CollabKit
CollabKit is a dual-sided Sponsor & Deal CRM + Marketplace designed specifically for the Indian creator economy, inspired by Passionfroot (YC W21) and Product Hunt discovery dynamics.

It operates on two distinct surfaces:
1. **PRIVATE Side (Creator Workspace):**
   - A private dashboard visible exclusively to the creator.
   - Kanban deal pipeline: `Pitched` → `Editing` → `Published` → `Paid`.
   - Real-time ₹ earnings calculation (Total Pipeline, Active Pending, and Paid Completed).
   - Deal and collab management with revision counters and delivery due dates.
2. **PUBLIC Side (Public Discovery & Collab Board):**
   - **Public Home:** Creator showcase highlighting work samples, metrics, and instant inbound collaboration request form.
   - **Marketplace (Find Creators):** Searchable and filterable directory of verified Indian creators categorized by niche (Tech, Beauty, Fitness, Finance, Food) and city with follower counts and rate cards.
   - **Brand Requests:** Open public bulletin where brands post inbound requirements (e.g., Campus Fest MIT, Cafe Udupi, Startup Bangalore), and creators can browse and apply.

---

## 2. Target Users & Main Use Cases

### Primary Users: Indian Video Editors & Content Creators
- **Demographics:** Individual video editors, shorts specialists, and regional creators with 10k–150k followers based in Tier 1 and Tier 2 cities (Bangalore, Mangalore, Mysore, Mumbai).
- **Primary Use Case:** Log brand deals when inbound leads arrive, monitor work progress across columns (editing, revisions, published), calculate pipeline revenue in ₹, and share a professional public collab profile link instead of messy PDF rate cards.

### Secondary Users: Brands, Agencies, Startups & Campus Organizers
- **Demographics:** Marketing teams at Indian consumer brands (e.g., boAt, Mamaearth, OnePlus, Noise, Lenskart), local SMBs/cafes (e.g., Cafe Udupi), and college festival teams (e.g., MIT Fest Team).
- **Primary Use Case:** Browse regional creator portfolios, filter by city and rate card in ₹, and submit collaboration briefs directly or post public requests to source talent.

---

## 3. Core Features

1. **Private Deal CRM & Kanban Board:**
   - 4-stage visual pipeline: `Pitched` (yellow), `Editing` (blue), `Published` (purple), `Paid` (green).
   - Fast status movement between columns with one-click actions.
   - Revisions tracker (e.g., `1/2 revs`) and due tags (`2d`, `Today`, `5h`).

2. **Dynamic ₹ Revenue & Pipeline Metrics:**
   - **Total Deal Value:** Aggregated gross earnings.
   - **Pending Pipeline:** Real-time sum of deals currently in `Pitched` or `Editing`.
   - **Paid / Realized Revenue:** Total value of finalized deals marked as `Paid`.
   - Automatic live re-calculation whenever a deal moves to `Paid`.

3. **Public Marketplace & Creator Directory:**
   - Public listing of creators with avatar badges, follower metrics, collabs completed, past brand endorsements, and starting rates.
   - Multi-niche filtering (All, Tech, Beauty, Fitness, Finance, Food) and search by name, niche, or city.

4. **Public Brand Request Board:**
   - Public bulletin board of sponsorship opportunities posted by brands and campus teams.
   - Quick "Apply" action with feedback notifications.
   - Modal form allowing any brand to post a new public request (Title, Brand, Need description, Budget in ₹, Location).

5. **Creator Collab Showcase & Shareable Profile:**
   - Public profile preview with past campaign portfolio metrics (views, CTR, brand impact).
   - One-click "Copy Shareable Link" button for Instagram bio and WhatsApp pitching.
   - Direct inbound collab request form feeding directly into the creator's private pipeline.

---

## 4. User Assumptions

- **Deal Frequency & Size:** An average creator manages 2–5 active deals concurrently, with typical payout sizes ranging from ₹8,000 to ₹35,000 per deliverable.
- **Payment Terms:** Creators predominantly operate on Net-15 or delivery-milestone payout terms.
- **Turnaround Time:** Standard editing turnaround is 2–4 days for short-form video content and reels.
- **Workflow Friction:** Creators dislike cumbersome signup forms or heavyweight enterprise tools (like Salesforce or HubSpot). They require instant zero-friction state changes, localStorage persistence, and immediate feedback.
- **Pricing Format:** All financial amounts must strictly be displayed in Indian Rupees (₹) with realistic Indian brand examples.

---

## 5. MVP Scope & Excluded Features

### Included in MVP (Milestone 1 Scope)
- Pure Next.js 14 App Router application with React 18 and clean CSS Modules.
- Global shared application state managed with React Context (`createContext`, `Provider`, `useContext`).
- Client-side data persistence with browser `localStorage`.
- Comprehensive dummy data representing realistic Indian creator collaborations.
- Reusable component architecture (`Navbar`, `Button`, `Card`, `Input`, `Modal`, `Badge`, `StatCard`, `DealCard`, `CreatorCard`, `RequestCard`).
- Fully responsive design optimized for mobile and desktop screens.
- Shareable link clipboard copying with visual toast confirmation.

### Explicitly Excluded from MVP
- User authentication and login/password management (mocked as single-creator workspace).
- Real payment gateway integrations (Razorpay/Stripe) and invoicing PDF generation.
- Real SMTP / email dispatching services.
- Production backend databases (PostgreSQL/MongoDB) and REST/GraphQL API server layer.
- Real-time WebSocket multi-user synchronization.
