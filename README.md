# Rural Ops Tools - Transport Hub

**Domain:** [transport.ruralopstools.com](https://transport.ruralopstools.com)
**Repository:** [dsgiri/RuralOpsTools-Transport](https://github.com/dsgiri/RuralOpsTools-Transport)

The Transport Hub (`transport.ruralopstools.com`) is a specialized logistics and planning application within the Rural Ops Tools ecosystem. It provides practical estimators and calculators to help agricultural and rural operators manage hauling costs, fuel use, delivery routes, and mileage.

## Features

- **Hauling Cost Calculator**: Estimate total freight costs based on weight, distance, and rates.
- **Mileage Cost Estimator**: Calculate true cost per mile driven considering fuel, maintenance, and wear.
- **Fuel Use Calculator**: Project fuel consumption based on load weight and terrain.
- **Delivery Route Planner**: Optimize the sequence of agricultural drop-offs.
- **Route Cost Comparison Tool**: Compare multiple potential routes.
- **Load Planning & Empty Miles Reduction**: Maximize payload efficiency and strategize backhauls.

## Development Setup

This project uses React, TypeScript, Vite, and Tailwind CSS.

### Prerequisites
- Node.js 18+

### Install Dependencies
```bash
npm install
```

### Run Locally
```bash
npm run dev
```
The app will be available at `http://localhost:3000`.

### Build for Production
```bash
npm run build
```
This command compiles TypeScript and builds the Vite application into the `dist/` folder.

## Environment Variables

Copy the `.env.example` file to `.env` to configure your local test environment:
```bash
cp .env.example .env
```
Ensure `APP_URL` is configured for deployment if specific absolute linking is required.

## Legal Configuration

The application centralizes its About, Contact, Privacy, Terms, and Disclaimer pages back to the master domain. For local development, these link to placeholder local views. To switch to production canonical links, toggle `USE_LOCAL_PREVIEW` in `src/config/legal.ts` to `false`.

## Project Management Artifacts

- **[AGENTS.md](./AGENTS.md)**: System instructions and ecosystem constraints for AI coding agents.
- **[CALCULATOR-STANDARD.md](./CALCULATOR-STANDARD.md)**: Design and architectural standards for new calculator tools.

## Related Rural Ops Tools Links

- [Master Website](https://ruralopstools.com)
- [Ecosystem Portfolio](https://ruralopstools.com/portfolio)
- [Transport GitHub Repository](https://github.com/dsgiri/RuralOpsTools-Transport)

**Related Subdomains:**
- [Plan](https://plan.ruralopstools.com)
- [Forecast](https://forecast.ruralopstools.com)
- [Predictor](https://predictor.ruralopstools.com)
- [What-If](https://whatif.ruralopstools.com)

---

*Disclaimer: All calculators in this application are strictly for informational and decision-support purposes and do not constitute professional logistical or financial advice.*
