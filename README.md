# CollabKit

<p align="center">
  <strong>The all-in-one Sponsor CRM & Collab Marketplace built for video editors, shorts creators, and brands.</strong>
</p>

<p align="center">
  <a href="#key-features">Features</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#design-system">Design System</a> •
  <a href="#roadmap">Roadmap</a>
</p>

---

## Overview

Independent video editors and creators frequently manage sponsorships across fragmented channels—WhatsApp chats, Instagram DMs, and manual spreadsheets. Deals fall through the cracks, delivery deadlines are missed, and invoice tracking in Indian Rupees (₹) remains disorganized. Meanwhile, consumer brands, agencies, and campus organizers lack a frictionless directory to discover regional video creators with transparent rates.

**CollabKit** solves this with a unified dual-surface platform:
1. **Private Creator Workspace (`/dashboard`):** An intuitive CRM pipeline (`Pitched` → `Editing` → `Published` → `Paid`) with live revenue analytics, revision counters, and one-click deal status progression.
2. **Public Discovery Marketplace (`/marketplace` & `/requests`):** An open directory where brands filter creators by niche and city, while creators can browse and pitch public brand briefs directly without cold email spam.

---

## Key Features

### 🔒 Private Creator CRM
- **4-Stage Kanban Pipeline:** Track deals seamlessly through `Pitched`, `Editing`, `Published`, and `Paid`.
- **Automated Earnings Engine:** Instant recalculation of Total Pipeline value, Active Pending work, and Cleared Earnings in Indian Rupees (₹).
- **Revision & Deadline Alerts:** Monitor deliverables with turn-around tags (`Today`, `2d`, `1d`) and revision ceilings (e.g., `1/2 revs`).
- **One-Click Shareable Profile:** Instant link generation for Instagram bios, media kits, and WhatsApp pitches.

### 🌐 Public Discovery & Brand Bulletin
- **Creator Directory (`/marketplace`):** Filter verified editors and creators across Tech, Beauty, Fitness, Finance, and Food in major regional creator hubs (Mangalore, Bangalore, Mysore, Mumbai).
- **Public Brand Requests (`/requests`):** Open bulletin board where brands, college festivals, and startups post immediate creator needs with clear budgets.
- **Instant Inbound Briefs:** Public-facing collaboration request modal feeding inbound leads straight into the creator's private pipeline.

---

## Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Next.js 14](https://nextjs.org/) | App Router architecture with optimized static generation |
| **UI Library** | [React 18](https://react.dev/) | Functional components and hooks |
| **Styling** | CSS Modules | Scoped component styling with zero runtime CSS-in-JS overhead |
| **State Management** | React Context API | Reactive global state with browser `localStorage` persistence |
| **Typography** | Inter | Clean, modern typography via Google Fonts |

---

## Project Structure

```
collabkit/
├── app/
│   ├── layout.js              # Root layout with Inter font and metadata
│   ├── globals.css            # Global CSS custom properties and toast styles
│   ├── ClientLayout.js        # Global context provider and notification wrapper
│   ├── page.js                # Public Landing & Showcase
│   ├── marketplace/
│   │   └── page.js            # Creator Directory with multi-niche filtering
│   ├── requests/
│   │   └── page.js            # Public Brand Request Bulletin & Post Modal
│   └── dashboard/
│       └── page.js            # Private Kanban CRM & Earnings Workspace
├── components/
│   ├── Navbar.js              # Sticky header with public links and private badge
│   ├── Button.js              # Reusable button with primary, secondary & outline variants
│   ├── Card.js                # Standard elevated card surface
│   ├── Input.js               # Standard text, textarea, and select inputs
│   ├── Modal.js               # Accessible backdrop modal dialog
│   ├── Badge.js               # Privacy and deal stage status chips
│   ├── StatCard.js            # KPI metric cards with trend indicators
│   ├── DealCard.js            # Interactive Kanban deal card with fast-forward actions
│   ├── CreatorCard.js         # Public creator profile card with rate card in ₹
│   └── RequestCard.js         # Brand request item card with direct Apply trigger
├── context/
│   └── DealContext.js         # Global deals, requests, and calculation state engine
├── data/
│   └── dummyData.js           # Production-ready realistic mock dataset
├── PRODUCT-ASSUMPTIONS.md     # Product discovery and requirements specification
├── DESIGN-SYSTEM.md           # Visual design tokens and component guidelines
└── WIREFRAME.md               # User flow diagrams and UI layout specs
```

---

## Quick Start

### Prerequisites
- **Node.js**: `18.x` or later
- **npm**: `9.x` or later

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/vinyaspoojary318-cloud/collabkit.git

# 2. Navigate to project root
cd collabkit

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to explore the platform.

### Production Build

```bash
# Compile and optimize for production
npm run build

# Start production server
npm run start
```

---

## Design System

CollabKit adheres to an accessible, high-contrast design system optimized for creator workflows:

- **Surface Neutral:** `#F8FAFC` (Slate 50)
- **Elevated Card:** `#FFFFFF` (Pure White)
- **Border:** `#E2E8F0` (Slate 200)
- **Text Primary:** `#0F172A` (Slate 900)
- **Text Secondary:** `#64748B` (Slate 500)
- **Primary Accent:** `#0F172A` (Solid Slate)
- **`PRIVATE` Tag:** `#FEF3C7` (Amber 100) with `#92400E` text
- **`PUBLIC` Tag:** `#DCFCE7` (Emerald 100) with `#166534` text

Detailed typography specifications and layout tokens can be found in [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md).

---

## Roadmap

- [x] Next.js 14 App Router migration with CSS Modules
- [x] Client-side state persistence with `localStorage`
- [x] Interactive Kanban pipeline with dynamic ₹ metrics
- [x] Public Marketplace and Brand Request Board
- [ ] OAuth integration (Google & YouTube Creator Studio)
- [ ] Automated GST-compliant PDF invoice generation
- [ ] Razorpay webhook payment reconciliation
- [ ] Direct WhatsApp notification integration for delivery deadlines

---

## License

Distributed under the MIT License. See `LICENSE` for more information.
