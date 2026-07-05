import { Link } from 'react-router-dom';
import { FOOTER_LINKS, LEGAL_CONFIG } from '../../config/legal';

export function Footer() {
  const isLocalDisclaimer = LEGAL_CONFIG.disclaimer.startsWith('/');

  return (
    <footer className="shrink-0 bg-white border-t border-slate-200 px-4 sm:px-6 py-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {FOOTER_LINKS.map(link => {
            const isLocal = link.href.startsWith('/');
            return isLocal ? (
              <Link key={link.label} to={link.href} className="text-xs font-semibold text-slate-500 hover:text-[#1e3a8a] transition-colors">
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="text-xs font-semibold text-slate-500 hover:text-[#1e3a8a] transition-colors">
                {link.label}
              </a>
            );
          })}
        </div>
        <div className="text-[11px] text-slate-400 text-center md:text-right max-w-md leading-relaxed">
          © {new Date().getFullYear()} ruralopstools.com ecosystem. Calculations and estimates are for decision support only.{' '}
          {isLocalDisclaimer ? (
            <Link to={LEGAL_CONFIG.disclaimer} className="underline hover:text-[#1e3a8a] transition-colors">See full disclaimer</Link>
          ) : (
            <a href={LEGAL_CONFIG.disclaimer} className="underline hover:text-[#1e3a8a] transition-colors">See full disclaimer</a>
          )}
          .
        </div>
      </div>
    </footer>
  );
}
