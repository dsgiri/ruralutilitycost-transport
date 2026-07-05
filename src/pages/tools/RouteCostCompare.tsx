import { useState } from 'react';
import { CalculatorDisclaimer } from '../../components/shared/CalculatorDisclaimer';
import { ArrowRightLeft, Info, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function RouteCostCompare() {
  const [ratePerMile, setRatePerMile] = useState<string>('2.50');
  const [hourlyRate, setHourlyRate] = useState<string>('35.00');

  const [routeADist, setRouteADist] = useState<string>('120');
  const [routeATime, setRouteATime] = useState<string>('2.5');
  const [routeATolls, setRouteATolls] = useState<string>('15.00');

  const [routeBDist, setRouteBDist] = useState<string>('145');
  const [routeBTime, setRouteBTime] = useState<string>('2.1');
  const [routeBTolls, setRouteBTolls] = useState<string>('0.00');

  const calcCost = (dist: string, time: string, tolls: string) => {
    const d = parseFloat(dist) || 0;
    const t = parseFloat(time) || 0;
    const tl = parseFloat(tolls) || 0;
    const rM = parseFloat(ratePerMile) || 0;
    const rH = parseFloat(hourlyRate) || 0;

    return (d * rM) + (t * rH) + tl;
  };

  const costA = calcCost(routeADist, routeATime, routeATolls);
  const costB = calcCost(routeBDist, routeBTime, routeBTolls);
  
  const diff = Math.abs(costA - costB);
  const winner = costA < costB ? 'Route A' : costB < costA ? 'Route B' : 'Tie';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-8">
        <div className="p-3 bg-blue-50 text-[#1e3a8a] rounded-xl shrink-0">
          <ArrowRightLeft className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Route Cost Comparison</h1>
          <p className="text-base text-slate-600 mt-2 max-w-2xl">
            Compare multiple potential routes to determine the most cost-effective path by weighing distance, time, and tolls.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Base Rates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Cost Per Mile ($)</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]" 
                  value={ratePerMile}
                  onChange={(e) => setRatePerMile(e.target.value)}
                  min="0"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Driver Hourly Rate ($)</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]" 
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(e.target.value)}
                  min="0"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <h3 className="font-bold text-slate-900 mb-4 uppercase text-sm tracking-wider">Route A</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Distance (Miles)</label>
                    <input type="number" className="w-full px-3 py-2 border rounded-md" value={routeADist} onChange={e => setRouteADist(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Time (Hours)</label>
                    <input type="number" className="w-full px-3 py-2 border rounded-md" value={routeATime} onChange={e => setRouteATime(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Tolls/Fees ($)</label>
                    <input type="number" className="w-full px-3 py-2 border rounded-md" value={routeATolls} onChange={e => setRouteATolls(e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <h3 className="font-bold text-slate-900 mb-4 uppercase text-sm tracking-wider">Route B</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Distance (Miles)</label>
                    <input type="number" className="w-full px-3 py-2 border rounded-md" value={routeBDist} onChange={e => setRouteBDist(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Time (Hours)</label>
                    <input type="number" className="w-full px-3 py-2 border rounded-md" value={routeBTime} onChange={e => setRouteBTime(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Tolls/Fees ($)</label>
                    <input type="number" className="w-full px-3 py-2 border rounded-md" value={routeBTolls} onChange={e => setRouteBTolls(e.target.value)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col h-full">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Comparison Result</h2>
            
            <div className="flex flex-col gap-4 flex-grow mb-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex flex-col items-center justify-center text-center mb-2">
                <span className="text-sm font-semibold text-blue-800 uppercase tracking-widest mb-2">Recommended Route</span>
                <span className="text-4xl font-bold text-blue-900">{winner}</span>
                {winner !== 'Tie' && (
                  <span className="text-sm text-blue-700 mt-2">Saves ${diff.toFixed(2)}</span>
                )}
              </div>

              <div className={`p-4 rounded-lg border flex items-center justify-between ${winner === 'Route A' ? 'bg-green-50 border-green-200' : 'bg-white border-slate-200'}`}>
                <span className="text-sm font-bold text-slate-700">Route A Total Cost:</span>
                <span className="text-xl font-bold text-slate-900">${costA.toFixed(2)}</span>
              </div>
              <div className={`p-4 rounded-lg border flex items-center justify-between ${winner === 'Route B' ? 'bg-green-50 border-green-200' : 'bg-white border-slate-200'}`}>
                <span className="text-sm font-bold text-slate-700">Route B Total Cost:</span>
                <span className="text-xl font-bold text-slate-900">${costB.toFixed(2)}</span>
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
            This tool determines the true financial cost of a route by translating distance and time into dollars.
          </p>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-center my-4 text-slate-800 font-bold">
            Total Route Cost = (Distance × Cost Per Mile) + (Time × Hourly Rate) + Tolls
          </div>
          <p>
            <strong>Assumptions:</strong> The "Cost Per Mile" should strictly encompass vehicle operating costs (fuel, maintenance, wear) and exclude the driver's wage, as the driver's wage is accounted for separately in the "Hourly Rate" applied to the total trip time.
          </p>
        </div>
      </div>
    </div>
  );
}
