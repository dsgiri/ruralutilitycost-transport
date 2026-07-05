# Calculator Standard Operating Procedure (SOP)

This document outlines the standard architecture, design patterns, and legal requirements for developing any calculator or estimator within the **Rural Ops Tools** ecosystem.

## 1. Structural Pattern
Every calculator must follow a strict input/output separation pattern:
- **Header:** Include an identifying icon, title, and a clear, 1-2 sentence description.
- **Input Area:** Form fields must be clearly labeled with units specified (e.g., "Distance (Miles)", "Cost per Mile ($)").
- **Result Area:** The outcome must be visually distinct, typically utilizing a slightly shaded background (e.g., `bg-slate-50`) with large, highly legible typography for the final number.
- **Disclaimer Area:** The component `<CalculatorDisclaimer />` MUST be injected at the bottom of the calculator card to fulfill legal requirements.

## 2. Technical Stack
- **State Management:** Use standard React `useState` hooks for input values. Keep values as string representations of numbers in state to handle empty inputs cleanly, converting to floats/ints during calculation.
- **Responsiveness:** Inputs should stack on mobile (`grid-cols-1`) and align horizontally or in a grid on larger screens (`md:grid-cols-2`).
- **Data Validation:** Use HTML attributes (`min="0"`, `step="any"`) to prevent erroneous negative inputs or invalid characters where appropriate.

## 3. Theming & Styling (Clean Utility)
- **Input Fields:** Use standard borders (`border-slate-300`), rounded corners (`rounded-md`), and clear focus rings (`focus:ring-[#1e3a8a]`).
- **Results:** Emphasize the primary result using the secondary brand color if appropriate (e.g., text-green-700 or `#4d7c0f` for positive financial outcomes).
- **Labels:** Use small, bold, uppercase tracking formats for data labels (e.g., `text-xs font-bold text-slate-700 uppercase tracking-wider`).

## 4. Legal & Compliance
As defined in the ecosystem guidelines, calculators are **Decision Support Tools** only. Never imply that the tool provides an absolute or guaranteed figure.

All calculators must import and render the `CalculatorDisclaimer` component:
```tsx
import { CalculatorDisclaimer } from '../../components/shared/CalculatorDisclaimer';

// ... inside the calculator layout
<CalculatorDisclaimer />
```

## 5. Extensibility
If a calculator involves complex, multi-step math (e.g., complex depreciation algorithms, multi-stop routing algorithms), extract the calculation logic into a testable pure function located in `src/lib/calculators/` rather than bloating the React component.

## 6. Universal Calculator Page Master Prompt

When generating a new calculator via an AI coding agent, use the following master prompt to ensure functional and visual consistency across the ecosystem.

### Purpose of this template
This template is designed to maintain functional and visual consistency across a suite of calculator pages for any web project, ensuring that every tool feels like part of a unified ecosystem while allowing for diverse technical logic.

### Design and product principles
Every calculator must adhere to these core principles: a practical and professional tone, transparent logic through visible assumptions, a mobile-first responsive layout, and ensuring the tool is usable immediately above the fold.

### Shared page structure
Standard pages should include: a Hero section with H1 and brief description, the functional Calculator Module, a Results hierarchy, a Logic/Formulas section, an FAQ, and a Disclaimer footer.

### Shared UI/UX rules
Input fields should utilize appropriate controls (sliders, dropdowns, toggles) on the left/top, with real-time results displayed prominently on the right/bottom using contrasting visual anchors for primary outputs.

### Shared accessibility rules
All calculators must meet WCAG standards, including proper ARIA labels for dynamic results, keyboard navigability for all controls, and high color contrast for readability.

### Shared mobile rules
The interface must collapse into a single-column stack on small screens, ensuring touch targets are appropriately sized and inputs do not trigger obstructive zoom behaviors.

### Shared repository safety rules
Coding agents must not introduce third-party dependencies outside of the approved stack, must not alter global stylesheets, and should strictly follow the PIV (Plan-Implement-Validate) workflow.

### Parameter list
Before using the template, define:
- `{{PROJECT_NAME}}`
- `{{CALCULATOR_NAME}}`
- `{{INDUSTRY_CATEGORY}}`
- `{{PRIMARY_USER_GOAL}}`
- `{{INPUT_FIELDS}}`
- `{{OUTPUT_FIELDS}}`
- `{{FORMULA_LOGIC}}`
- `{{FAQ_TOPICS}}`
- `{{RELATED_TOOLS}}`

### Reusable master prompt template
> "I am implementing a new {{CALCULATOR_NAME}} for the {{PROJECT_NAME}} platform within the {{INDUSTRY_CATEGORY}} category. Please build a complete page where the primary goal is {{PRIMARY_USER_GOAL}}. Use the following inputs: {{INPUT_FIELDS}} and provide these outputs: {{OUTPUT_FIELDS}} based on {{FORMULA_LOGIC}}. Ensure the UI follows the two-column layout and established mobile behaviors. Include sections for {{FAQ_TOPICS}} and link to {{RELATED_TOOLS}}."

### Usage instructions
To use this template, replace all double-bracketed variables with specific project data and provide it to the coding agent alongside the shared design system documentation.

### Consistency checklist
- [ ] Is the calculator visible above the fold?
- [ ] Are results updating in real-time?
- [ ] Does the mobile view stack correctly?
- [ ] Are the technical assumptions clearly stated?
- [ ] Is the brand tone preserved?
