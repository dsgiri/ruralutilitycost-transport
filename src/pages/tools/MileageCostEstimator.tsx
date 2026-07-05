import { useState } from 'react';
import { CalculatorDisclaimer } from '../../components/shared/CalculatorDisclaimer';
import { Truck, Info, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MileageCostEstimator() {
  const [distance, setDistance] = useState<string>('500');
  const [fuelPrice, setFuelPrice] = useState<string>('3.50');
  const [mpg, setMpg] = useState<string>('6.5');
  const [maintenanceCost, setMaintenanceCost] = useState<string>('0.15');
  const [fixedCosts, setFixedCosts] = useState<string>('50');

  const calcResults = () => {
    const d = parseFloat(distance) || 0;
    const fp = parseFloat(fuelPrice) || 0;
    const m = parseFloat(mpg) || 0;
    const mc = parseFloat(maintenanceCost) || 0;
    const fc = parseFloat(fixedCosts) || 0;

    if (d === 0 || m === 0) return { total: '0.00', perMile: '0.00' };

    const fuelCost = (d / m) * fp;
    const total = fuelCost + (d * mc) + fc;
    const perMile = total / d;

    return {
      total: total.toFixed(2),
      perMile: perMile.toFixed(2)
    };
  };

  const results = calcResults();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-8">
        <div className="p-3 bg-blue-50 text-[#1e3a8a] rounded-xl shrink-0">
          <Truck className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Mileage Cost Estimator</h1>
          <p className="text-base text-slate-600 mt-2 max-w-2xl">
            Calculate the true cost per mile driven considering fuel, maintenance, and wear. Essential for accurate billing and profitability analysis.
          </p>
        </div>
      </div>

      {/* Calculator Module */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Input Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Trip Parameters</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="distance" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Distance (Miles)</label>
                  <input 
                    id="distance"
                    type="number" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent text-lg" 
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    min="0"
                    step="any"
                    aria-label="Enter distance in miles"
                  />
                </div>
                <div>
                  <label htmlFor="mpg" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Vehicle MPG</label>
                  <input 
                    id="mpg"
                    type="number" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent text-lg" 
                    value={mpg}
                    onChange={(e) => setMpg(e.target.value)}
                    min="0.1"
                    step="any"
                    aria-label="Enter vehicle miles per gallon"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="fuelPrice" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Fuel Price ($/Gal)</label>
                  <input 
                    id="fuelPrice"
                    type="number" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent text-lg" 
                    value={fuelPrice}
                    onChange={(e) => setFuelPrice(e.target.value)}
                    min="0"
                    step="any"
                    aria-label="Enter fuel price per gallon"
                  />
                </div>
                <div>
                  <label htmlFor="maintenanceCost" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Maint. ($/Mile)</label>
                  <input 
                    id="maintenanceCost"
                    type="number" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent text-lg" 
                    value={maintenanceCost}
                    onChange={(e) => setMaintenanceCost(e.target.value)}
                    min="0"
                    step="any"
                    aria-label="Enter maintenance cost per mile"
                  />
                </div>
                <div>
                  <label htmlFor="fixedCosts" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Fixed Costs ($)</label>
                  <input 
                    id="fixedCosts"
                    type="number" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent text-lg" 
                    value={fixedCosts}
                    onChange={(e) => setFixedCosts(e.target.value)}
                    min="0"
                    step="any"
                    aria-label="Enter other fixed costs for trip"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col h-full">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Cost Analysis</h2>
            
            <div className="flex flex-col gap-4 flex-grow mb-6">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 flex flex-col items-center justify-center text-center">
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">True Cost Per Mile</span>
                <span className="text-5xl font-bold text-[#4d7c0f]" aria-live="polite">${results.perMile}</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-700">Total Trip Cost:</span>
                <span className="text-xl font-bold text-slate-900">${results.total}</span>
              </div>
            </div>

            <CalculatorDisclaimer className="mt-0" />
          </div>
        </div>
      </div>

      {/* Logic/Formulas Section */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Info className="h-5 w-5 text-[#1e3a8a]" />
          Logic & Assumptions
        </h2>
        <div className="bg-white border border-slate-200 rounded-xl p-6 prose prose-slate max-w-none text-sm">
          <p>
            This calculator determines the comprehensive cost of operating a vehicle over a specific distance.
          </p>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-center my-4 text-slate-800 font-bold">
            Total Fuel Cost = (Distance ÷ MPG) × Fuel Price<br/>
            Total Trip Cost = Total Fuel Cost + (Distance × Maint. Cost) + Fixed Costs<br/>
            True Cost Per Mile = Total Trip Cost ÷ Distance
          </div>
          <p>
            <strong>Assumptions:</strong> Maintenance cost per mile is an estimated average covering tires, oil changes, wear parts, and depreciation. Fixed costs include any daily operational overhead, tolls, or trip-specific fees.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-[#1e3a8a]" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-slate-900 mb-2">What is a "True Cost Per Mile"?</h3>
            <p className="text-sm text-slate-600">
              Unlike a simple fuel cost calculation, the true cost per mile factors in the hidden expenses of operating equipment, such as preventative maintenance, tire replacement, and proportional depreciation. Knowing this number is critical for setting profitable freight or service rates.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-slate-900 mb-2">How do I determine my maintenance cost per mile?</h3>
            <p className="text-sm text-slate-600">
              You can calculate this by taking your total annual maintenance, repair, and tire expenses and dividing that number by your total annual miles driven. For heavy commercial trucks, this often ranges from $0.15 to $0.25+ per mile.
            </p>
          </div>
        </div>
      </div>

      {/* Related Tools */}
      <div className="border-t border-slate-200 pt-8 mt-12">
        <h2 className="text-lg font-bold text-slate-900 mb-4">Related Calculators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-slate-200 rounded-lg p-4 hover:border-[#1e3a8a] transition-colors bg-white">
            <h3 className="font-bold text-slate-900 mb-1">Fuel Use Calculator</h3>
            <p className="text-xs text-slate-500 mb-3">Estimate total fuel required and cost for a trip.</p>
            <Link to="/tools/fuel-use" className="text-sm font-semibold text-[#1e3a8a] hover:underline">View Tool &rarr;</Link>
          </div>
          <div className="border border-slate-200 rounded-lg p-4 hover:border-[#1e3a8a] transition-colors bg-white">
            <h3 className="font-bold text-slate-900 mb-1">Hauling Cost Calculator</h3>
            <p className="text-xs text-slate-500 mb-3">Estimate total freight costs based on distance and rates.</p>
            <Link to="/tools/hauling-cost" className="text-sm font-semibold text-[#1e3a8a] hover:underline">View Tool &rarr;</Link>
          </div>
        </div>
      </div>

    </div>
  );
}
