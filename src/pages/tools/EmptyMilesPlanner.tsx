import { useState } from 'react';
import { CalculatorDisclaimer } from '../../components/shared/CalculatorDisclaimer';
import { RefreshCw, Info, HelpCircle } from 'lucide-react';

export function EmptyMilesPlanner() {
  const [loadedMiles, setLoadedMiles] = useState<string>('800');
  const [emptyMiles, setEmptyMiles] = useState<string>('200');
  const [revenuePerLoaded, setRevenuePerLoaded] = useState<string>('3.50');
  const [costPerMile, setCostPerMile] = useState<string>('2.20');

  const calcResults = () => {
    const lm = parseFloat(loadedMiles) || 0;
    const em = parseFloat(emptyMiles) || 0;
    const rpl = parseFloat(revenuePerLoaded) || 0;
    const cpm = parseFloat(costPerMile) || 0;

    const totalMiles = lm + em;
    const deadheadPercent = totalMiles > 0 ? (em / totalMiles) * 100 : 0;
    
    const totalRevenue = lm * rpl;
    const totalCost = totalMiles * cpm;
    const netProfit = totalRevenue - totalCost;

    // Adjusted revenue per mile across all miles
    const realRevPerMile = totalMiles > 0 ? totalRevenue / totalMiles : 0;

    return {
      totalMiles: totalMiles.toFixed(0),
      deadheadPercent: deadheadPercent.toFixed(1),
      netProfit: netProfit.toFixed(2),
      realRevPerMile: realRevPerMile.toFixed(2)
    };
  };

  const results = calcResults();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-8">
        <div className="p-3 bg-blue-50 text-[#1e3a8a] rounded-xl shrink-0">
          <RefreshCw className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Empty Miles Reduction Planner</h1>
          <p className="text-base text-slate-600 mt-2 max-w-2xl">
            Analyze the financial impact of deadhead (empty) miles on your overall trip profitability and effective rate per mile.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Trip Data</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Loaded Miles</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]" 
                  value={loadedMiles}
                  onChange={(e) => setLoadedMiles(e.target.value)}
                  min="0"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Empty (Deadhead) Miles</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]" 
                  value={emptyMiles}
                  onChange={(e) => setEmptyMiles(e.target.value)}
                  min="0"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Revenue Per Loaded Mile ($)</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]" 
                  value={revenuePerLoaded}
                  onChange={(e) => setRevenuePerLoaded(e.target.value)}
                  min="0"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Operating Cost Per Mile ($)</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]" 
                  value={costPerMile}
                  onChange={(e) => setCostPerMile(e.target.value)}
                  min="0"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col h-full">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Financial Impact</h2>
            
            <div className="flex flex-col gap-4 flex-grow mb-6">
              <div className={`p-6 rounded-lg border flex flex-col items-center justify-center text-center ${parseFloat(results.netProfit) >= 0 ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                <span className="text-sm font-semibold uppercase tracking-widest mb-2 text-slate-600">Net Trip Profit</span>
                <span className={`text-5xl font-bold ${parseFloat(results.netProfit) >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                  ${results.netProfit}
                </span>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-700">Real Rate per All Miles:</span>
                <span className="text-xl font-bold text-slate-900">${results.realRevPerMile}/mi</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-700">Deadhead Percentage:</span>
                <span className="text-xl font-bold text-amber-600">{results.deadheadPercent}%</span>
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
            Empty miles generate zero revenue but still incur operating costs, severely impacting net profitability. This calculator redistributes the revenue from loaded miles across the entire trip distance.
          </p>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-center my-4 text-slate-800 font-bold">
            Real Rate per Mile = (Loaded Miles × Revenue Per Loaded Mile) ÷ Total Miles<br/>
            Net Profit = (Loaded Miles × Revenue) − (Total Miles × Operating Cost)
          </div>
        </div>
      </div>
    </div>
  );
}
