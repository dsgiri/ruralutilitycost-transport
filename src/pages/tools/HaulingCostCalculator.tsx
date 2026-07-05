import { useState } from 'react';
import { CalculatorDisclaimer } from '../../components/shared/CalculatorDisclaimer';
import { Truck, Info, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HaulingCostCalculator() {
  const [distance, setDistance] = useState<string>('150');
  const [costPerMile, setCostPerMile] = useState<string>('2.50');

  const calcTotal = () => {
    const d = parseFloat(distance) || 0;
    const c = parseFloat(costPerMile) || 0;
    return (d * c).toFixed(2);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-8">
        <div className="p-3 bg-blue-50 text-[#1e3a8a] rounded-xl shrink-0">
          <Truck className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Hauling Cost Calculator</h1>
          <p className="text-base text-slate-600 mt-2 max-w-2xl">
            Estimate total freight costs based on distance and rates. A practical tool for farmers, ranchers, and agricultural logistics managers to predict shipping expenses.
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
                <label htmlFor="costPerMile" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Cost per Mile ($)</label>
                <input 
                  id="costPerMile"
                  type="number" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent text-lg" 
                  value={costPerMile}
                  onChange={(e) => setCostPerMile(e.target.value)}
                  min="0"
                  step="any"
                  aria-label="Enter cost per mile in dollars"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col h-full">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Estimated Cost</h2>
            
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 flex flex-col items-center justify-center text-center flex-grow mb-6">
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">Total Freight Cost</span>
              <span className="text-5xl font-bold text-[#4d7c0f]" aria-live="polite">${calcTotal()}</span>
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
            This calculator uses a straightforward formula to determine the baseline hauling cost:
          </p>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-center my-4 text-slate-800 font-bold">
            Total Cost = Distance (Miles) × Cost per Mile ($)
          </div>
          <p>
            <strong>Assumptions:</strong> The cost per mile should encapsulate all operational expenses, including fuel, driver wages, vehicle wear-and-tear, insurance, and overhead. For a more granular breakdown of what constitutes your true cost per mile, consult standard industry operational cost tables or perform an independent audit of your logistics expenses.
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
            <h3 className="font-bold text-slate-900 mb-2">What is a good average cost per mile?</h3>
            <p className="text-sm text-slate-600">
              Average costs per mile vary significantly depending on equipment type (e.g., flatbed, refrigerated, hopper bottom), fuel prices, and region. As of recent industry averages, operating costs range from $2.00 to $3.50+ per mile. You should calculate your own breakeven rate to ensure accuracy.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-slate-900 mb-2">Does this calculator factor in empty miles (deadhead)?</h3>
            <p className="text-sm text-slate-600">
              By default, this tool calculates the cost for the specific distance entered. If you need to account for deadhead miles, you must either add those miles to your "Distance" input or calculate a higher "Cost per Mile" that distributes the cost of empty driving across your loaded miles.
            </p>
          </div>
        </div>
      </div>

      {/* Related Tools */}
      <div className="border-t border-slate-200 pt-8 mt-12">
        <h2 className="text-lg font-bold text-slate-900 mb-4">Related Calculators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-slate-200 rounded-lg p-4 hover:border-[#1e3a8a] transition-colors bg-white">
            <h3 className="font-bold text-slate-900 mb-1">Cost Per Mile Estimator</h3>
            <p className="text-xs text-slate-500 mb-3">Calculate your true operating cost per mile.</p>
            <Link to="/tools/coming-soon" className="text-sm font-semibold text-[#1e3a8a] hover:underline">View Tool &rarr;</Link>
          </div>
          <div className="border border-slate-200 rounded-lg p-4 hover:border-[#1e3a8a] transition-colors bg-white">
            <h3 className="font-bold text-slate-900 mb-1">Fuel Surcharge Calculator</h3>
            <p className="text-xs text-slate-500 mb-3">Determine appropriate fuel surcharges for freight.</p>
            <Link to="/tools/coming-soon" className="text-sm font-semibold text-[#1e3a8a] hover:underline">View Tool &rarr;</Link>
          </div>
        </div>
      </div>

    </div>
  );
}
