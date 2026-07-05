export function Portfolio() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Ecosystem Portfolio</h1>
      
      <div className="prose prose-slate max-w-none text-slate-600 text-sm mb-12">
        <p className="leading-relaxed text-base">
          Rural Ops Tools handles a variety of operational domains. Each utility is separated into focused subdomains to ensure maximum performance and minimal interface clutter.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center justify-between">
            <span>Transport Hub</span>
            <span className="text-[10px] bg-blue-50 text-[#1e3a8a] px-2 py-1 rounded font-bold uppercase tracking-wider">Active</span>
          </h2>
          <p className="text-slate-600 text-sm mb-4">
            transport.ruralopstools.com
          </p>
          <p className="text-sm">
            Focus: Estimators for hauling costs, optimal delivery routes, mileage calculations, and empty-mile reduction algorithms for agricultural shipments.
          </p>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm opacity-75">
          <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center justify-between">
            <span>Yield Predictor</span>
            <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded font-bold uppercase tracking-wider">Coming Soon</span>
          </h2>
          <p className="text-slate-600 text-sm mb-4">
            predictor.ruralopstools.com
          </p>
          <p className="text-sm">
            Focus: Localized harvest forecasting based on historical precipitation and soil utility averages.
          </p>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm opacity-75">
          <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center justify-between">
            <span>Infrastructure What-If</span>
            <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded font-bold uppercase tracking-wider">Coming Soon</span>
          </h2>
          <p className="text-slate-600 text-sm mb-4">
            whatif.ruralopstools.com
          </p>
          <p className="text-sm">
            Focus: Scenario planning for barn construction, silo placement, and irrigation equipment capital expenditures.
          </p>
        </div>
      </div>
    </div>
  );
}
