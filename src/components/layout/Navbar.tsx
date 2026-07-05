import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: 'Home', href: 'https://ruralopstools.com', external: true },
    { label: 'Plan', href: 'https://ruralopstools.com/plan', external: true },
    { label: 'Forecast', href: 'https://ruralopstools.com/forecast', external: true },
    { label: 'What If', href: 'https://ruralopstools.com/what-if', external: true },
    { label: 'Predictor', href: 'https://ruralopstools.com/predictor', external: true },
    { label: 'Transport', href: '/', external: false, active: true },
    { label: 'My favorites', href: '/favorites', external: false },
  ];

  return (
    <header className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#1e3a8a] rounded flex items-center justify-center text-white font-bold text-lg">
            R
          </div>
          <div className="leading-tight hidden sm:block">
            <h1 className="text-sm font-bold text-slate-900 group-hover:text-[#1e3a8a] transition-colors">Rural Ops Tools</h1>
            <p className="text-xs text-blue-700 font-semibold">Transport & Logistics Hub</p>
          </div>
        </Link>
      </div>

      <nav className="hidden md:flex gap-1">
        {links.map((link) => {
          const isCurrent = link.active || (location.pathname === link.href && !link.external);
          
          if (link.external) {
            return (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "text-xs font-medium px-3 py-2 rounded-md transition-colors",
                  "text-slate-500 hover:text-[#1e3a8a] hover:bg-blue-50"
                )}
              >
                {link.label}
              </a>
            );
          }

          return (
            <Link
              key={link.label}
              to={link.href}
              className={cn(
                "text-xs font-medium px-3 py-2 rounded-md transition-colors",
                isCurrent
                  ? "text-[#1e3a8a] bg-blue-50 font-semibold"
                  : "text-slate-500 hover:text-[#1e3a8a] hover:bg-blue-50"
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-500 hover:text-slate-700"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-[60px] left-0 right-0 bg-white border-b border-slate-200 z-50 md:hidden shadow-lg">
          <div className="px-4 py-3 flex flex-col gap-2">
            {links.map((link) => {
               const isCurrent = link.active || (location.pathname === link.href && !link.external);
               
               if (link.external) {
                 return (
                   <a
                     key={link.label}
                     href={link.href}
                     className="text-sm font-medium text-slate-600 px-3 py-2 rounded-md hover:bg-slate-50"
                   >
                     {link.label}
                   </a>
                 );
               }

               return (
                 <Link
                   key={link.label}
                   to={link.href}
                   onClick={() => setIsOpen(false)}
                   className={cn(
                     "text-sm font-medium px-3 py-2 rounded-md",
                     isCurrent
                       ? "text-[#1e3a8a] bg-blue-50 font-semibold"
                       : "text-slate-600 hover:bg-slate-50"
                   )}
                 >
                   {link.label}
                 </Link>
               );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
