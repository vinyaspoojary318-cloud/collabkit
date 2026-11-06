# CollabKit
### Sponsor & Deal CRM for Video Editors & Creators

**Private for Creators + Public for Brands who need collab**

> **Product Hunt idea:** Brands discover creators. CollabKit is for creator collabs.  
> **Inspired by:** Passionfroot (YC W21)

**Live Demo:** [https://collabkit.vercel.app](https://collabkit.vercel.app)  
**Video:** [Watch Presentation Video](#)  
**Team:** 2 Members

---

## 1. Problem

Video editors manage brand deals on WhatsApp, Instagram DM, Sheets.
- **Who paid? Who pending? When delivery due?** — Forgotten in chat history
- No single professional link to show brands past work and rate cards
- Brands who need collabs don't know where to find regional creators (e.g., Tech creator in Mangalore under ₹15k)

---

## 2. Solution

**CollabKit = Private + Public in one platform**

| Surface | Who sees? | What? |
| :--- | :--- | :--- |
| **My Private Dashboard (Private)** | Only creator sees — Yellow tag `PRIVATE - only you see this` | My products & my collabs, earnings in ₹, Pipeline `Pitched` → `Editing` → `Published` → `Paid` |
| **Public Home / Find Creators / Brand Requests (Public)** | Everyone sees — Green tag `PUBLIC` | Brands find creators, Brands post "I need collab" — request shows public, Creators Apply |

---

## 3. Features

### Private Creator CRM (`/dashboard`)
- **4-Stage Kanban:** `Pitched` → `Editing` → `Published` → `Paid`
- **Earnings Engine:** Total ₹95k, Pending, Paid — auto-recalculates in ₹ whenever you advance a card
- **+ Add My Collab/Product:** Modal Form (Brand, Campaign, Amount, Platform, Notes)
- **Due Alerts:** Turnaround deadlines (`Today`, `2d`, `1d`) and revision ceilings (`1/2 revs`)
- **Copy Shareable Link:** One-click copy for Instagram bio and WhatsApp pitching

### Public Discovery (`/`, `/marketplace`, `/requests`)
- **Public Home (`/`):** Hero landing, "Brands who need collab come here & find creators across India", quick search
- **Find Creators (`/marketplace`):** Multi-niche filter (`All`, `Tech`, `Beauty`, `Fitness`, `Finance`, `Food`), Creator Cards with `● PUBLIC PROFILE` tag, Request Collab modal
- **Brand Requests (`/requests`):** Public bulletin, `+ Post Brand Request` modal (Brand, Need, Budget, Location, Deadline), Apply button
- **Realistic Indian Creator Cards:** Vinyas P (Tech & Editing - Mangalore - 85k followers - 12 Collabs - Past boAt, OnePlus - Avg ₹18k)

---

## 4. Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 14 — App Router |
| **UI Library** | React 18 — Functional Components + Hooks |
| **Language** | JavaScript |
| **Styling** | CSS Modules only — NO Tailwind (Milestone allows CSS / Tailwind, we chose pure CSS Modules) |
| **State** | React Context API — `createContext`, `Provider`, `useContext` |
| **Data** | Dummy Data + `localStorage` persistence — No Backend, No API |
| **Deploy** | Vercel |
| **GitHub** | Git, Branches, PRs |

---

## 5. Project Structure

```
collabkit/
├── app/
│   ├── layout.js              # Root layout with font Inter & metadata
│   ├── globals.css            # Global CSS variables, reset, toast notification
│   ├── ClientLayout.js        # DealProvider & global toast client wrapper
│   ├── page.js                # Public Home (Landing & Inbound Collab Form)
│   ├── page.module.css
│   ├── marketplace/
│   │   ├── page.js            # Find Creators (Marketplace & Niche Filters)
│   │   └── page.module.css
│   ├── requests/
│   │   ├── page.js            # Brand Requests Bulletin & Post Request Modal
│   │   └── page.module.css
│   └── dashboard/
│       ├── page.js            # My Private Dashboard (Kanban, Stats, Deals Table)
│       └── page.module.css
├── components/
│   ├── Navbar.js & .module.css       # Top navigation bar with Public & Private links
│   ├── Button.js & .module.css       # Reusable button with primary, secondary, outline variants
│   ├── Card.js & .module.css         # Standardized elevated card surface
│   ├── Input.js & .module.css        # Reusable input, textarea, and select components
│   ├── Modal.js & .module.css        # Accessible dialog overlay for forms
│   ├── Badge.js & .module.css        # PRIVATE (Yellow), PUBLIC (Green), and stage badges
│   ├── StatCard.js & .module.css     # KPI metric block with trend indicators in ₹
│   ├── DealCard.js & .module.css     # Kanban deal card with status progression action
│   ├── CreatorCard.js & .module.css  # Public creator profile card with rate in ₹
│   └── RequestCard.js & .module.css  # Public brand request card with Apply action
├── context/
│   └── DealContext.js         # React Context (createContext, Provider, useContext) + localStorage
├── data/
│   └── dummyData.js           # Realistic dataset of Indian brands, deals, creators, & requests
├── PRODUCT-ASSUMPTIONS.md     # Problem, Target Users, Assumptions & Scope
├── DESIGN-SYSTEM.md           # Colors, Typography, Reusable Component Specifications
├── WIREFRAME.md               # User flows and ASCII wireframes for all 4 pages
├── package.json
└── README.md
```

---

## 6. React Context — How it works

```js
// context/DealContext.js
const DealContext = createContext();

export function DealProvider({ children }) {
  const [deals, setDeals] = useState([]);
  const [requests, setRequests] = useState([]);
  const [creators] = useState(INITIAL_CREATORS);

  // Dynamic calculations: auto-updates when status changes
  const totalEarnings = deals.reduce((sum, d) => sum + (Number(d.amount) || 0), 0);
  const paid = deals.filter((d) => d.status === "paid").reduce((sum, d) => sum + (Number(d.amount) || 0), 0);
  const pending = deals.filter((d) => d.status !== "paid").reduce((sum, d) => sum + (Number(d.amount) || 0), 0);

  const updateDealStatus = (dealId, nextStatus) => {
    setDeals((prev) => prev.map((d) => (d.id === dealId ? { ...d, status: nextStatus } : d)));
  };

  return (
    <DealContext.Provider value={{ deals, requests, creators, totalEarnings, pending, paid, updateDealStatus, addDeal, addRequest }}>
      {children}
    </DealContext.Provider>
  );
}

export function useDeals() {
  return useContext(DealContext);
}
```

- **Shared State:** `deals`, `requests`, `creators`, `totalEarnings`, `pending`, `paid`, `addDeal`, `updateDealStatus`, `addRequest`.
- **Example in Action:** Move boAt card `Pitched` → `Paid` — Total and Paid revenue stats update automatically on the dashboard.

---

## 7. Design System

- **Background:** `#F8FAFC`
- **Card Background:** `#FFFFFF`
- **Border:** `#E2E8F0`
- **Text Primary:** `#0F172A`
- **Text Secondary:** `#64748B`
- **PRIVATE Tag:** `#FEF3C7` / Text `#92400E`
- **PUBLIC Tag:** `#DCFCE7` / Text `#166534`
- **Typography:** `Inter`, H1 `32px` (800), H2 `20px` (700), Body `13px` (400)
- **Full details:** [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md)

---

## 8. Quick Start

### Prerequisites
- Node.js 18+
- npm 9+

### Commands

```bash
# 1. Clone
git clone https://github.com/vinyaspoojary318-cloud/collabkit.git

# 2. Go to folder
cd collabkit

# 3. Install dependencies
npm install

# 4. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production

```bash
npm run build
npm run start
```

---

## 9. GitHub & Contributions

### GitHub Issues:
- **#1** `Setup Next.js 14 App Router and Design System`
- **#2** `Implement React Context and Dummy Data with LocalStorage`
- **#3** `Build Reusable UI Components with CSS Modules`
- **#4** `Implement My Private Creator Dashboard & Kanban CRM`
- **#5** `Implement Public Marketplace & Brand Request Board`
- **#6** `Document Product Assumptions, Wireframes & Vercel Deployment`

### Team Contributions:

| Member | Work Distributed |
| :--- | :--- |
| **Member 1 — Vinyas Poojary** (`vinyaspoojary318-cloud`) | Private Dashboard, React Context, Deal Logic, Pipeline calculations in ₹, README |
| **Member 2 — Hassan Ifaan** (`ifaanofficial`) | Public Home, Find Creators Marketplace, Brand Requests Board, Design System |

**Commit & PR Practices:**  
Features developed across dedicated branches (e.g. `feature/marketplace-enhancements`), code reviewed, and merged via Pull Requests (e.g. **PR #7**) with descriptive commits (`feat: add private dashboard`, `feat: add public marketplace`, `fix: earnings calculation in ₹`).

---

## 10. Milestone-1 Checklist

- [x] **Product Idea** — Passionfroot (YC W21) + Product Hunt Discovery
- [x] **`PRODUCT-ASSUMPTIONS.md`** — Problem, Target Users, Assumptions & Exclusions
- [x] **`WIREFRAME.md`** — Visual flows and ASCII wireframes for all 4 pages
- [x] **`DESIGN-SYSTEM.md`** — Colors, Typography scale & Component specs
- [x] **GitHub Repo + Issues** — Repo active, Issues #1 to #6 created
- [x] **Next.js Application** — Built with Next.js 14 App Router (JavaScript)
- [x] **Pages + Reusable Components** — 4 pages + 10 CSS Module components
- [x] **React Context** — Global state management via `DealContext.js`
- [x] **Dummy Data in ₹** — Realistic Indian creator and brand dataset
- [x] **Contributions from Team Members** — Multiple contributors with branch & PR history
- [x] **Working MVP** — Tested and running without errors
- [x] **Presentation Video** — Script and live demo walkthrough ready

---

## 11. MVP Scope / Excluded (NOT in MVP)

- **In MVP:** Next.js 14 App Router, React Context, Dummy Data in ₹, `localStorage` persistence, CSS Modules only, Public Marketplace + Private Creator CRM.
- **NOT in MVP (Future Scope):** User Authentication/Login, Real Payments (Razorpay/Stripe), Email notifications, Database (PostgreSQL/MongoDB), GST Invoicing.

> **Future (After Milestone-1):** OAuth integration (Google/YouTube), Razorpay payment escrow, automated GST invoices, WhatsApp delivery deadline alerts.

---

## 12. License

Distributed under the [MIT License](./package.json).
