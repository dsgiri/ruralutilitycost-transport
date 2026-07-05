export function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">About Us</h1>
      
      <div className="prose prose-slate max-w-none text-slate-600 text-sm">
        <p className="leading-relaxed mb-6 font-medium text-slate-800 text-base">
          Rural Ops Tools is an ecosystem of practical estimators, logistics planners, and data models designed specifically to support rural producers, agricultural operators, and independent contractors.
        </p>

        <h2 className="text-lg font-bold text-slate-900 mt-8 mb-3">Our Mission</h2>
        <p className="leading-relaxed mb-6">
          Our mission is to replace complex spreadsheets and guesswork with clean, accessible, and highly focused tools. We believe that operators managing raw materials—whether it's grain hauling, livestock transport, or rural infrastructure development—should have immediate access to robust models that help predict costs, plan routes, and optimize yield without unnecessary bloat.
        </p>
        
        <h2 className="text-lg font-bold text-slate-900 mt-8 mb-3">The Ecosystem</h2>
        <p className="leading-relaxed mb-6">
          The Rural Ops Tools network comprises multiple specialized subdomains (such as our Transport hub) that interlock to provide a comprehensive toolkit. While the interfaces are segmented for speed and focus, they share the same underlying commitment to clarity and practical utility.
        </p>

        <h2 className="text-lg font-bold text-slate-900 mt-8 mb-3">Data Independence & Decision Support</h2>
        <p className="leading-relaxed mb-6">
          Every tool provided across our domains is strictly intended for <strong>informational and decision-support use</strong>. We base our models on standard assumptions, regional averages, and direct user inputs, but these figures do not replace the necessity for professional financial, legal, engineering, or agricultural advice. We strongly encourage all users to verify quoting and logistical decisions independently based on real-world variances.
        </p>
      </div>
    </div>
  );
}
