# AGENTS.md — Development Guidelines for AI

Welcome AI Agent. This is a clean Frontend project focused on building an enterprise-grade **Design System & Dashboard** using React, TypeScript, and Tailwind CSS.

## 1. Project Context & Entry Points
Before writing code or making architectural decisions, consult:
1. `context/ui-context.md` — Design tokens (colors, radii, typography rules).
2. `context/progress-tracker.md` — Current phase, tasks completed, and next units.

## 2. Tech Stack & Scripts
- **Framework:** React 19 + Vite 8 + TypeScript
- **Styling:** Tailwind CSS v4 + Design Tokens (`src/styles/tokens.css`)
- **Icons:** `lucide-react`
- **Class Merging:** `import { cn } from '@/lib/utils'`
- **Dev Command:** `npm run dev`
- **Build & Typecheck:** `npm run build`

## 3. Strict Code & Architecture Rules
1. **Never Hardcode Colors:** Never use arbitrary hex colors (e.g., `#3b82f6` or `bg-[#123456]`). Always use the semantic tokens defined in `context/ui-context.md` (e.g., `bg-primary`, `bg-bg-surface`, `text-text-primary`, `border-border-default`).
2. **TypeScript Strictness:** Strict mode is enforced. No `any` types. Provide explicit interfaces or types for all component props.
3. **Component Boundaries:**
   - `src/components/ui/` contains reusable, headless/atomic design primitives (Button, Input, Badge, Card, Modal, etc.). They must accept standard HTML attributes and `className`.
   - `src/components/features/` contains domain-specific widgets (Sidebar, Header, MetricCard, UserTable).
4. **Image-to-Code Workflow:**
   - When given a mockup/screenshot:
     1. Analyze layout structure (Grid / Flex) first.
     2. Identify which atomic components in `components/ui/` can be reused.
     3. Implement using semantic design tokens.
5. **Session Closing:**
   - Update `context/progress-tracker.md` after completing each meaningful unit.

