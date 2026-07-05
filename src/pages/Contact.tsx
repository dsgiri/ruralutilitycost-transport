export function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Contact Us</h1>
      
      <div className="prose prose-slate max-w-none text-slate-600 text-sm">
        <p className="leading-relaxed mb-8">
          The Rural Ops Tools ecosystem is maintained centrally. Whether you have inquiries regarding our Transport tools, the main predictor platform, or general feature requests, you can reach our team using the links below.
        </p>
        
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-3">Get in Touch</h2>
          <p className="mb-6 leading-relaxed">
            If you are referencing a specific calculator or subdomain (e.g., the Hauling Cost tool on the Transport hub), please mention it in your message to help us route your request quickly.
          </p>
          
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">General Support & Inquiries</span>
              <a href="mailto:support@ruralopstools.com" className="text-[#1e3a8a] font-medium hover:underline text-base">support@ruralopstools.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
