export function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
      
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg mb-8 text-sm text-slate-600 font-medium">
        <strong>Plain-language summary:</strong> We respect your privacy. Transport and utility calculators run locally in your browser. If you save favorites, we store them in your browser's local storage. We use anonymous web analytics to see which tools are popular, but we do not track or upload your specific calculator inputs (like your exact route or fuel costs) to a central server.
      </div>

      <div className="prose prose-slate max-w-none text-slate-600 text-sm">
        <h2 className="text-lg font-bold text-slate-900 mt-8 mb-3">1. Information We Collect</h2>
        <p className="leading-relaxed mb-4">
          <strong>Usage Data:</strong> When you visit Rural Ops Tools and its subdomains, we may collect standard anonymous web telemetry (such as your browser type, referring domain, which calculators you load, and time spent on page).
        </p>
        <p className="leading-relaxed mb-6">
          <strong>Local Storage:</strong> Certain features, such as "My Favorites", utilize your browser's Local Storage to persist your selections across sessions. This data never leaves your device and is not saved to our servers.
        </p>

        <h2 className="text-lg font-bold text-slate-900 mt-8 mb-3">2. Calculator Inputs</h2>
        <p className="leading-relaxed mb-6">
          The values you enter into the calculators (such as distances, fuel costs, per-mile rates, or payload weights) are processed on the client side. We do not aggregate, log, or harvest the specific operational data you type into the estimators. 
        </p>

        <h2 className="text-lg font-bold text-slate-900 mt-8 mb-3">3. How We Use Information</h2>
        <p className="leading-relaxed mb-6">
          We use the anonymous telemetry we collect strictly to improve the functionality of the ecosystem, determine which features require updates, and maintain the operational security of the servers hosting the application.
        </p>

        <h2 className="text-lg font-bold text-slate-900 mt-8 mb-3">4. Cookies</h2>
        <p className="leading-relaxed mb-6">
          We may deploy essential cookies necessary for the secure transmission of our website over global content delivery networks. We do not use intrusive behavioral tracking cookies to profile users for third-party advertising.
        </p>

        <div className="mt-12 pt-6 border-t border-slate-200">
          <p className="text-xs text-slate-400">
            Effective Date: January 1, 2026. <br/>
            Last Updated: June 2026.
          </p>
        </div>
      </div>
    </div>
  );
}
