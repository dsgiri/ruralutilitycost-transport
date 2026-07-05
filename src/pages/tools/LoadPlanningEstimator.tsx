import { useState } from 'react';
import { CalculatorDisclaimer } from '../../components/shared/CalculatorDisclaimer';
import { Package, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LoadPlanningEstimator() {
  const [maxGross, setMaxGross] = useState<string>('80000');
  const [tareWeight, setTareWeight] = useState<string>('32000');
  const [unitWeight, setUnitWeight] = useState<string>('2000'); // e.g. pallet weight

  const calcResults = () => {
    const mg = parseFloat(maxGross) || 0;
    const tw = parseFloat(tareWeight) || 0;
    const uw = parseFloat(unitWeight) || 1; // avoid div zero

    const maxPayload = Math.max(0, mg - tw);
    const maxUnits = Math.floor(maxPayload / uw);

    return {
      payload: maxPayload,
      units: maxUnits
    };
  };

  const results = calcResults();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-8">
        <div className="p-3 bg-blue-50 text-[#1e3a8a] rounded-xl shrink-0">
          <Package className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Load Planning Estimator</h1>
          <p className="text-base text-slate-600 mt-2 max-w-2xl">
            Maximize payload efficiency without exceeding legal weight limits. Determine how many units (pallets, bales, bins) you can legally haul.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Weight Constraints</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Max Gross Weight (lbs)</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] text-lg" 
                  value={maxGross}
                  onChange={(e) => setMaxGross(e.target.value)}
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Empty/Tare Weight (lbs)</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] text-lg" 
                  value={tareWeight}
                  onChange={(e) => setTareWeight(e.target.value)}
                  min="0"
                />
              </div>

              <div className="pt-4 border-t border-slate-100">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Weight per Unit/Pallet (lbs)</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] text-lg" 
                  value={unitWeight}
                  onChange={(e) => setUnitWeight(e.target.value)}
                  min="1"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col h-full">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Capacity Limits</h2>
            
            <div className="flex flex-col gap-4 flex-grow mb-6">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 flex flex-col items-center justify-center text-center">
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">Maximum Units</span>
                <span className="text-6xl font-bold text-[#4d7c0f]">{results.units}</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-700">Available Payload:</span>
                <span className="text-xl font-bold text-slate-900">{results.payload.toLocaleString()} lbs</span>
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
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-center my-4 text-slate-800 font-bold">
            Available Payload = Max Gross Weight − Empty/Tare Weight<br/>
            Maximum Units = Floor(Available Payload ÷ Weight per Unit)
          </div>
          <p>
            <strong>Assumptions:</strong> This calculator provides gross capacity limits. It does not calculate per-axle weight distribution, which is often the limiting legal factor in heavy hauling. Ensure your load is balanced across steering and drive axles according to bridge laws.
          </p>
        </div>
      </div>
    </div>
  );
}
