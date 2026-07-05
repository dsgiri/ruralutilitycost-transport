/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Disclaimer } from './pages/Disclaimer';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { Portfolio } from './pages/Portfolio';

// Tools
import { HaulingCostCalculator } from './pages/tools/HaulingCostCalculator';
import { MileageCostEstimator } from './pages/tools/MileageCostEstimator';
import { FuelUseCalculator } from './pages/tools/FuelUseCalculator';
import { DeliveryRoutePlanner } from './pages/tools/DeliveryRoutePlanner';
import { RouteCostCompare } from './pages/tools/RouteCostCompare';
import { LoadPlanningEstimator } from './pages/tools/LoadPlanningEstimator';
import { EmptyMilesPlanner } from './pages/tools/EmptyMilesPlanner';
import { GrainFeedDeliveryCost } from './pages/tools/GrainFeedDeliveryCost';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-use" element={<TermsOfUse />} />
          <Route path="portfolio" element={<Portfolio />} />
          
          <Route path="tools/hauling-cost" element={<HaulingCostCalculator />} />
          <Route path="tools/mileage-cost" element={<MileageCostEstimator />} />
          <Route path="tools/fuel-use" element={<FuelUseCalculator />} />
          <Route path="tools/delivery-route" element={<DeliveryRoutePlanner />} />
          <Route path="tools/route-cost-compare" element={<RouteCostCompare />} />
          <Route path="tools/load-planning" element={<LoadPlanningEstimator />} />
          <Route path="tools/empty-miles" element={<EmptyMilesPlanner />} />
          <Route path="tools/grain-feed-delivery" element={<GrainFeedDeliveryCost />} />

          <Route path="tools/*" element={
            <div className="flex items-center justify-center min-h-[50vh]">
              <div className="text-center">
                <p className="text-slate-500 uppercase tracking-widest text-sm font-bold mb-2">Calculator Interface</p>
                <h2 className="text-2xl font-bold text-slate-900">Tool coming soon</h2>
              </div>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

