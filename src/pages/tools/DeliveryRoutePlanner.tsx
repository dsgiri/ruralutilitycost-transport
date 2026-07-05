import { useState } from 'react';
import { CalculatorDisclaimer } from '../../components/shared/CalculatorDisclaimer';
import { Map, Info, HelpCircle, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DeliveryRoutePlanner() {
  const [legs, setLegs] = useState<string[]>(['50', '25', '30']);
  const [avgSpeed, setAvgSpeed] = useState<string>('45');
  const [stopDuration, setStopDuration] = useState<string>('30'); // minutes

  const addLeg = () => setLegs([...legs, '']);
  const updateLeg = (index: number, val: string) => {
    const newLegs = [...legs];
    newLegs[index] = val;
    setLegs(newLegs);
  };
  const removeLeg = (index: number) => {
    const newLegs = legs.filter((_, i) => i !== index);
    setLegs(newLegs);
  };

  const calcResults = () => {
    const totalDist = legs.reduce((acc, leg) => acc + (parseFloat(leg) || 0), 0);
    const speed = parseFloat(avgSpeed) || 1;
    const driveHours = totalDist / speed;
    
    // Total stops is number of legs minus 1 (the end point) if we assume start-to-end, 
    // or just say each leg implies one stop at the end of it. Let's say N legs = N stops/destinations.
    // Assuming the final leg is the return trip, we might not have a "stop duration" there, 
    // but for simplicity, let's say total stops = legs.length.
    const stopMins = parseFloat(stopDuration) || 0;
    const totalStopHours = (legs.length * stopMins) / 60;
    
    const totalHours = driveHours + totalStopHours;

    return {
      distance: totalDist.toFixed(1),
      hours: totalHours.toFixed(1)
    };
  };

  const results = calcResults();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-8">
        <div className="p-3 bg-blue-50 text-[#1e3a8a] rounded-xl shrink-0">
          <Map className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Delivery Route Planner</h1>
          <p className="text-base text-slate-600 mt-2 max-w-2xl">
            Optimize your multi-stop drop-offs to estimate total distance and turnaround time for your route.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Route Legs & Stops</h2>
            
            <div className="space-y-4 mb-6">
              {legs.map((leg, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-slate-100 text-slate-500 font-bold px-3 py-2 rounded-md border border-slate-200">
                    Leg {index + 1}
                  </div>
                  <input 
                    type="number" 
                    className="flex-grow px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent" 
                    value={leg}
                    onChange={(e) => updateLeg(index, e.target.value)}
                    placeholder="Distance (Miles)"
                    min="0"
                    step="any"
                    aria-label={`Distance for leg ${index + 1}`}
                  />
                  {legs.length > 1 && (
                    <button 
                      onClick={() => removeLeg(index)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                      title="Remove Leg"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  )}
                </div>
              ))}
              
              <button 
                onClick={addLeg}
                className="flex items-center gap-2 text-sm font-bold text-[#1e3a8a] hover:bg-blue-50 px-4 py-2 rounded-md transition-colors"
              >
                <Plus className="h-4 w-4" /> Add Leg
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
              <div>
                <label htmlFor="avgSpeed" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Avg Speed (MPH)</label>
                <input 
                  id="avgSpeed"
                  type="number" 
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]" 
                  value={avgSpeed}
                  onChange={(e) => setAvgSpeed(e.target.value)}
                  min="1"
                />
              </div>
              <div>
                <label htmlFor="stopDuration" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Time per Stop (Mins)</label>
                <input 
                  id="stopDuration"
                  type="number" 
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]" 
                  value={stopDuration}
                  onChange={(e) => setStopDuration(e.target.value)}
                  min="0"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col h-full">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Route Summary</h2>
            
            <div className="flex flex-col gap-4 flex-grow mb-6">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 flex flex-col items-center justify-center text-center">
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">Total Est. Time</span>
                <span className="text-5xl font-bold text-[#4d7c0f]" aria-live="polite">{results.hours} hrs</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-700">Total Distance:</span>
                <span className="text-xl font-bold text-slate-900">{results.distance} Miles</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-700">Total Stops:</span>
                <span className="text-xl font-bold text-slate-900">{legs.length}</span>
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
            This planner aggregates distances and calculates standard turnaround times for multi-stop delivery routes.
          </p>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-center my-4 text-slate-800 font-bold">
            Total Time = (Total Distance ÷ Avg Speed) + (Total Stops × (Time per Stop ÷ 60))
          </div>
          <p>
            <strong>Assumptions:</strong> The average speed should account for mixed driving conditions (highway vs rural roads). The time per stop assumes a consistent unloading or loading duration across all destinations. This tool does not account for mandatory driver break times (HOS limits).
          </p>
        </div>
      </div>

      <div className="border-t border-slate-200 pt-8 mt-12">
        <h2 className="text-lg font-bold text-slate-900 mb-4">Related Calculators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-slate-200 rounded-lg p-4 hover:border-[#1e3a8a] transition-colors bg-white">
            <h3 className="font-bold text-slate-900 mb-1">Route Cost Comparison Tool</h3>
            <p className="text-xs text-slate-500 mb-3">Compare multiple potential routes to determine the most cost-effective path.</p>
            <Link to="/tools/route-cost-compare" className="text-sm font-semibold text-[#1e3a8a] hover:underline">View Tool &rarr;</Link>
          </div>
        </div>
      </div>

    </div>
  );
}
