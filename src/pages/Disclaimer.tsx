export function Disclaimer() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Disclaimer</h1>
      
      <div className="prose prose-slate max-w-none text-slate-600 text-sm">
        <div className="bg-amber-50 border border-amber-100 p-6 rounded-xl mb-8">
          <h2 className="text-sm font-bold text-amber-800 uppercase tracking-widest mb-3">General Decision Support Only</h2>
          <p className="text-amber-900 font-semibold mb-3">
            Disclaimer: These figures are estimates based on standard assumptions and user inputs. This tool is for informational purposes only and does not replace professional financial, legal, engineering, or agricultural advice.
          </p>
          <p className="text-amber-800">
            We disclaim all liability for decisions, costs, losses, or damages arising from reliance on these results. Please consult qualified local professionals or certified advisors for guidance specific to your situation.
          </p>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mt-8 mb-3">No Professional Advice</h3>
        <p className="leading-relaxed mb-6">
          The calculators, route planners, and forecasting models provided by any Rural Ops Tools subdomain (including Transport, Protocol, and the master site) are intended solely as utility tools for self-estimation. We are not a logistics brokerage, financial advisory, legal firm, or certified engineering consultancy. No fiduciary or professional client relationship is created by using these tools.
        </p>
        
        <h3 className="text-lg font-bold text-slate-900 mt-8 mb-3">Accuracy of Assumptions & Market Dynamics</h3>
        <p className="leading-relaxed mb-6">
          Calculations rely significantly on values you manually input (such as MPG, specific weight targets, local fuel costs, and driver wages) as well as broad regional averages. Rural Ops Tools cannot guarantee accuracy due to highly volatile real-world factors, including:
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Unanticipated changes in daily fuel and petroleum markets.</li>
          <li>Specific vehicle wear-and-tear variances, mechanical failures, or maintenance debts.</li>
          <li>Live traffic events, detours, seasonal road constraints (e.g., mud or snow), and bridging weight limits.</li>
          <li>Regulatory changes affecting transport licenses, agricultural tax-exemptions, or emission zones.</li>
        </ul>

        <h3 className="text-lg font-bold text-slate-900 mt-8 mb-3">Limitation of Liability</h3>
        <p className="leading-relaxed mb-6">
          Under no circumstances shall Rural Ops Tools, its owners, developers, or affiliates be liable for direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with the use of our tools. This includes, but is not limited to, losses from under-bidding a contract, unprofitable route deviations, regulatory fines from overloaded hauls, or miscalculated overheads. 
        </p>

        <h3 className="text-lg font-bold text-slate-900 mt-8 mb-3">Independent Verification</h3>
        <p className="leading-relaxed mb-6">
          You are entirely responsible for the final decisions made in executing your business operations. Always verify critical quoting and logistical operations manually or with a designated industry professional before finalizing binding quotes, executing fuel purchases, or committing to delivery timelines.
        </p>

        <div className="mt-12 pt-6 border-t border-slate-200">
          <p className="text-xs text-slate-400">
            Last Updated: June 2026. This disclaimer applies globally across all tools and applications hosted within the Rural Ops Tools ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
}
