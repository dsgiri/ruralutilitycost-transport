import { useState } from 'react';
import { CalculatorDisclaimer } from '../../components/shared/CalculatorDisclaimer';
import { Tractor, Info } from 'lucide-react';

export function GrainFeedDeliveryCost() {
  const [distance, setDistance] = useState<string>('50');
  const [ratePerMile, setRatePerMile] = useState<string>('4.50');
  const [payloadUnits, setPayloadUnits] = useState<string>('900');
  const [unitType, setUnitType] = useState<string>('Bushels'); // Bushels or Tons

  const calcResults = () => {
    const d = parseFloat(distance) || 0;
    const r = parseFloat(ratePerMile) || 0;
    const u = parseFloat(payloadUnits) || 1; // avoid div zero

    const totalCost = d * r;
    const costPerUnit = totalCost / u;

    return {
      totalCost: totalCost.toFixed(2),
      costPerUnit: costPerUnit.toFixed(4)
    };
  };

  const results = calcResults();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-8">
        <div className="p-3 bg-blue-50 text-[#1e3a8a] rounded-xl shrink-0">
          <Tractor className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Grain / Feed Delivery Cost Calculator</h1>
          <p className="text-base text-slate-600 mt-2 max-w-2xl">
            Specialized estimator for bulk agricultural commodity deliveries to determine hauling cost on a per-bushel or per-ton basis.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Delivery Details</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Distance (Miles)</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]" 
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  min="0"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Freight Rate ($/Mile)</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]" 
                  value={ratePerMile}
                  onChange={(e) => setRatePerMile(e.target.value)}
                  min="0"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Payload Volume/Weight</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]" 
                  value={payloadUnits}
                  onChange={(e) => setPayloadUnits(e.target.value)}
                  min="1"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Unit Type</label>
                <select 
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] bg-white"
                  value={unitType}
                  onChange={(e) => setUnitType(e.target.value)}
                >
                  <option value="Bushels">Bushels</option>
                  <option value="Tons">Tons</option>
                  <option value="Cwt">Hundredweight (Cwt)</option>
                  <option value="Bales">Bales</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col h-full">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Cost Breakdown</h2>
            
            <div className="flex flex-col gap-4 flex-grow mb-6">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 flex flex-col items-center justify-center text-center">
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">Cost per {unitType.replace(/s$/, '')}</span>
                <span className="text-5xl font-bold text-[#4d7c0f]">${results.costPerUnit}</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-700">Total Delivery Cost:</span>
                <span className="text-xl font-bold text-slate-900">${results.totalCost}</span>
              </div>
            </div>

            <CalculatorDisclaimer className="mt-0" />
          </div>
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Info className="h-5 w-5 text-[#1e3a8a]" />
          Logic & Assumptions
        </h2>
        <div className="bg-white border border-slate-200 rounded-xl p-6 prose prose-slate max-w-none text-sm">
          <p>
            When trading bulk commodities, knowing the exact transportation cost per sales unit is critical for establishing local cash bids and basis.
          </p>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-center my-4 text-slate-800 font-bold">
            Cost Per Unit = (Distance × Freight Rate) ÷ Total Units
          </div>
        </div>
      </div>
    </div>
  );
}
