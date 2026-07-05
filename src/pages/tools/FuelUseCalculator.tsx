import { useState } from 'react';
import { CalculatorDisclaimer } from '../../components/shared/CalculatorDisclaimer';
import { Truck, Info, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FuelUseCalculator() {
  const [distance, setDistance] = useState<string>('500');
  const [fuelPrice, setFuelPrice] = useState<string>('3.50');
  const [mpg, setMpg] = useState<string>('6.5');

  const calcResults = () => {
    const d = parseFloat(distance) || 0;
    const fp = parseFloat(fuelPrice) || 0;
    const m = parseFloat(mpg) || 0;

    if (d === 0 || m === 0) return { gallons: '0.00', cost: '0.00' };

    const gallons = d / m;
    const cost = gallons * fp;

    return {
      gallons: gallons.toFixed(2),
      cost: cost.toFixed(2)
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
          <h1 className="text-3xl font-bold text-slate-900">Fuel Use Calculator</h1>
          <p className="text-base text-slate-600 mt-2 max-w-2xl">
            Estimate total fuel required and cost for a specific agricultural transport operation or long-haul trip.
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="mpg" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Average MPG</label>
                  <input 
                    id="mpg"
                    type="number" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent text-lg" 
                    value={mpg}
                    onChange={(e) => setMpg(e.target.value)}
                    min="0.1"
                    step="any"
                    aria-label="Enter average miles per gallon"
                  />
                </div>
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
              </div>
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col h-full">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Estimated Fuel Usage</h2>
            
            <div className="flex flex-col gap-4 flex-grow mb-6">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 flex flex-col items-center justify-center text-center">
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">Total Fuel Cost</span>
                <span className="text-5xl font-bold text-[#4d7c0f]" aria-live="polite">${results.cost}</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-700">Gallons Required:</span>
                <span className="text-xl font-bold text-slate-900">{results.gallons} Gal</span>
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
            This calculator provides a straightforward estimation of fuel volume and expense based on miles driven and vehicle efficiency.
          </p>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-center my-4 text-slate-800 font-bold">
            Gallons Required = Distance ÷ Average MPG<br/>
            Total Fuel Cost = Gallons Required × Fuel Price
          </div>
          <p>
            <strong>Assumptions:</strong> The MPG figure used should be a realistic operational average that accounts for vehicle load weight, idling time, and terrain. Manufacturer stated MPG is often higher than real-world loaded MPG.
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
            <h3 className="font-bold text-slate-900 mb-2">Does payload weight affect my MPG?</h3>
            <p className="text-sm text-slate-600">
              Yes, significantly. For heavy commercial vehicles, every additional 10,000 lbs of payload can decrease fuel economy by approximately 0.5 MPG, though this varies by engine and aerodynamics. If you are hauling heavy, use a conservative (lower) MPG estimate.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-slate-900 mb-2">How does idling affect this calculation?</h3>
            <p className="text-sm text-slate-600">
              This calculator assumes constant motion. Heavy duty trucks burn roughly 0.8 to 1 gallon of diesel per hour of idling. If your trip involves significant idle time, you will need to add those estimated gallons manually to your total.
            </p>
          </div>
        </div>
      </div>

      {/* Related Tools */}
      <div className="border-t border-slate-200 pt-8 mt-12">
        <h2 className="text-lg font-bold text-slate-900 mb-4">Related Calculators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-slate-200 rounded-lg p-4 hover:border-[#1e3a8a] transition-colors bg-white">
            <h3 className="font-bold text-slate-900 mb-1">Mileage Cost Estimator</h3>
            <p className="text-xs text-slate-500 mb-3">Calculate the true cost per mile including maintenance.</p>
            <Link to="/tools/mileage-cost" className="text-sm font-semibold text-[#1e3a8a] hover:underline">View Tool &rarr;</Link>
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
