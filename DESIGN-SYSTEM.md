# Design System — CollabKit

## 1. Design Philosophy
CollabKit uses a clean, modern, editorial aesthetic tailored for creator productivity and brand trust. The interface balances high data density on the private dashboard with approachable, engaging discovery on public marketplace surfaces.

---

## 2. Color Palette

### Base & Neutral Colors
- **Page Background (`--bg`):** `#F8FAFC` (Slate 50) — clean, minimal canvas
- **Card Background (`--card`):** `#FFFFFF` (Pure White) — high-contrast content surface
- **Border Neutral (`--border`):** `#E2E8F0` (Slate 200) — subtle framing lines
- **Border Strong (`--border-strong`):** `#CBD5E1` (Slate 300) — active inputs and hover states
- **Text Primary (`--text-primary`):** `#0F172A` (Slate 900) — high contrast, ultra-legible headers and primary text
- **Text Secondary (`--text-secondary`):** `#64748B` (Slate 500) — metadata, labels, and helper descriptions
- **Text Faint (`--text-faint`):** `#94A3B8` (Slate 400) — placeholders and inactive timestamps

### Brand & Interactive Colors
- **Primary Accent / Button (`--accent-primary`):** `#0F172A` (Solid Slate Black) with `#FFFFFF` text
- **Interactive Hover (`--accent-hover`):** `#1E293B` (Slate 800)
- **Secondary Action (`--accent-secondary`):** `#2563EB` (Blue 600) — subtle links and secondary highlights

### Status & Privacy Tag System
- **PRIVATE Badge Background:** `#FEF3C7` (Amber 100)
- **PRIVATE Badge Text / Border:** `#92400E` (Amber 800) / `#FDE68A`
  *Denotes sensitive creator-only data (pipeline revenue, active pitches, internal notes).*
- **PUBLIC Badge Background:** `#DCFCE7` (Emerald 100)
  *Denotes open marketplace items (public creator profiles, brand collab requests).*
- **PUBLIC Badge Text / Border:** `#166534` (Emerald 800) / `#BBF7D0`
- **Success / Paid State:** `#16A34A` (Emerald 600) / Background `#F0FDF4`
- **Warning / Editing State:** `#D97706` (Amber 600) / Background `#FFFBEB`
- **Info / Pitched State:** `#2563EB` (Blue 600) / Background `#EFF6FF`
- **Published State:** `#9333EA` (Purple 600) / Background `#FAF5FF`

---

## 3. Typography

### Font Family
- **Primary:** `Inter`, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

### Type Scale & Hierarchy
| Token | Font Size | Font Weight | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Display / H1** | `32px` (2rem) | `800` (ExtraBold) | `1.2` | Hero headlines, main page titles |
| **Section / H2** | `20px` (1.25rem) | `700` (Bold) | `1.3` | Section headings, modal titles |
| **Subheading / H3** | `16px` (1rem) | `600` (SemiBold) | `1.4` | Card titles, column headers |
| **Body Primary** | `13px` (0.8125rem) | `400` (Regular) | `1.5` | Standard body copy, descriptions |
| **Body Strong** | `13px` (0.8125rem) | `600` (SemiBold) | `1.5` | Table cells, bold list items |
| **Metadata / Caption** | `12px` (0.75rem) | `500` (Medium) | `1.4` | Due dates, creator stats, helper text |
| **Tags & Badges** | `10px` (0.625rem) | `700` (Bold) | `1.0` | `PRIVATE` / `PUBLIC` indicator chips (Uppercase) |

---

## 4. Reusable UI Components

1. **`Navbar` (`components/Navbar.js` & `Navbar.module.css`):**
   - Sticky top navigation bar with brand logo, CollabKit mark, primary navigation links (`Public Home`, `Find Creators`, `Brand Requests`), and direct link to the `Private Dashboard` with badge.

2. **`Button` (`components/Button.js` & `Button.module.css`):**
   - Variants: `primary` (Solid dark `#0F172A`), `secondary` (White with border), `outline` (transparent with border), `danger`, `small` (compact size for card actions).

3. **`Card` (`components/Card.js` & `Card.module.css`):**
   - Standard elevated white surface with `1px solid #E2E8F0`, subtle shadow (`0 1px 3px rgba(0,0,0,0.05)`), and rounded corners (`12px` / `16px`).

4. **`Input` (`components/Input.js` & `Input.module.css`):**
   - Standardized text inputs, textareas, and select menus with focus rings (`#0F172A`), placeholder styling, and icon prefix support.

5. **`Modal` (`components/Modal.js` & `Modal.module.css`):**
   - Accessible dialog backdrop overlay with smooth fade-in, header, close button, body, and action footer.

6. **`Badge` (`components/Badge.js` & `Badge.module.css`):**
   - Semantic indicator component with variants: `private` (Yellow), `public` (Green), `pitched` (Blue), `editing` (Amber), `published` (Purple), `paid` (Emerald).

7. **`StatCard` (`components/StatCard.js` & `StatCard.module.css`):**
   - Dashboard KPI metric block displaying label, ₹ amount, comparison badge, and helper description.

8. **`DealCard` (`components/DealCard.js` & `DealCard.module.css`):**
   - Interactive Kanban card showing brand avatar initial, deliverable title, ₹ amount, due countdown tag, revision count, and fast stage progression controls.

9. **`CreatorCard` (`components/CreatorCard.js` & `CreatorCard.module.css`):**
   - Public marketplace profile card displaying avatar with gradient, creator name, niche, follower count, completed collabs, past brand endorsements, and average starting rate in ₹.

10. **`RequestCard` (`components/RequestCard.js` & `RequestCard.module.css`):**
    - Public brand request card displaying requirement title, brand name, budget in ₹, city/location tag, brief requirements description, and direct "Apply" button.
