export function TermsOfUse() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Terms of Use</h1>
      
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg mb-8 text-sm text-slate-600 font-medium">
        <strong>Plain-language summary:</strong> Welcome to Rural Ops Tools. You are free to use these tools to help plan your operations. Do not scrape, clone, or abuse the sites. Everything is provided "as is" without warranty. If you make a bad business decision based on a calculator estimate, we are not responsible.
      </div>

      <div className="prose prose-slate max-w-none text-slate-600 text-sm space-y-6">
        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-3">1. Scope of Use</h2>
          <p className="leading-relaxed">
            By accessing any tool within the Rural Ops Tools network (including all associated subdomains like Transport), you agree to be bound by these Terms of Use. The tools are explicitly provided for decision-support and estimations serving the agricultural and rural logistics community.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-3">2. User Responsibilities</h2>
          <p className="leading-relaxed mb-3">
            As a user of this application ecosystem, you agree not to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Deploy automated scripts, bots, or scrapers to extract data or calculator logic from the websites.</li>
            <li>Use the tools in a manner that attempts to overload, degrade, or disrupt the network integrity of the platform.</li>
            <li>Misrepresent the estimates generated here as legally binding financial audits to third parties without disclosing their origin as a self-estimation tool.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-3">3. Intellectual Property</h2>
          <p className="leading-relaxed">
            The visual layout, unique calculator logic structures, domain names, and brand identifiers (such as the RUC logo marks) are the property of Rural Ops Tools. You may not duplicate, reverse-engineer, or distribute the application ecosystem without express written permission.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-3">4. Limitation of Liability</h2>
          <p className="leading-relaxed">
            To the maximum extent permitted by law, Rural Ops Tools is provided strictly "AS IS" and "AS AVAILABLE". We provide no warranties regarding accuracy, uptime, or merchantability. By using the site, you acknowledge that logistical variables require professional judgment and agree that Rural Ops Tools shall not be liable for any damages (direct, indirect, or consequential) arising from reliance on its output.
          </p>
        </section>

        <div className="mt-12 pt-6 border-t border-slate-200">
          <p className="text-xs text-slate-400">
            Last Updated: June 2026.
          </p>
        </div>
      </div>
    </div>
  );
}
