# UI Context & Design System Tokens

## Theme Overview
- Default: Light workspace with dark surface accents.
- Supports `.dark` class toggle on root element.
- Design Aesthetic: Clean, modern SaaS dashboard with subtle borders, generous whitespace, and vivid interactive blue accents.

## Design Tokens

### Colors (Mapped via CSS Variables)
| Token Name | Tailwind Class | Semantic Usage |
| :--- | :--- | :--- |
| `--bg-base` | `bg-bg-base` | Page background |
| `--bg-surface` | `bg-bg-surface` | Cards, modals, dropdowns, sidebar |
| `--bg-subtle` | `bg-bg-subtle` | Table header, subtle input backgrounds |
| `--bg-hover` | `bg-bg-hover` | Hover state for buttons/rows |
| `--text-primary` | `text-text-primary` | Headings, main text |
| `--text-secondary` | `text-text-secondary`| Subtitles, form labels |
| `--text-muted` | `text-text-muted` | Placeholders, timestamps, helper text |
| `--border-default` | `border-border-default`| Card borders, dividers |
| `--primary-base` | `bg-primary`, `text-primary` | Main CTA buttons, active links |
| `--success-base` | `text-success`, `bg-success` | Positive metric, active badge |
| `--warning-base` | `text-warning`, `bg-warning` | Pending state, warning badge |
| `--danger-base` | `text-danger`, `bg-danger` | Deletions, error badges, alerts |

### Border Radius
| Context | Tailwind Class | Value |
| :--- | :--- | :--- |
| Small badges, tag chips | `rounded-sm` | 4px |
| Buttons, inputs, dropdown items | `rounded-md` | 8px |
| Cards, dialog panels | `rounded-lg` or `rounded-xl` | 12px - 16px |
| Avatar, pill status badges | `rounded-full` | 9999px |

### Typography
- Primary Font: Inter / System Sans-serif (`font-sans`).
- Heading 1: `text-2xl font-bold tracking-tight text-text-primary`
- Heading 2: `text-lg font-semibold text-text-primary`
- Body: `text-sm font-normal text-text-secondary`
- Caption / Small: `text-xs font-medium text-text-muted`

## Component Conventions
- All components in `src/components/ui/` must use utility `cn()` for class merging.
- Props must extend native HTML attributes (e.g. `React.ButtonHTMLAttributes<HTMLButtonElement>`).
- Cấm tuyệt đối: Không hardcode màu hex (như `#3b82f6` hay `bg-[#f0f]`), luôn dùng token đã định nghĩa.

